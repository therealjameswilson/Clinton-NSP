const chapters = window.NSP_CHAPTERS || [];
const themes = window.NSP_THEMES || [];
const records = window.NSP_RECORDS || [];
const sources = window.NSP_SOURCES || [];

const byId = (id) => document.getElementById(id);
const chapterById = new Map(chapters.map((chapter) => [chapter.id, chapter]));
const themeById = new Map(themes.map((theme) => [theme.id, theme]));
const formatter = new Intl.NumberFormat("en-US");

let activeQuickFilter = "all";

const nodes = {
  totalRecords: byId("total-records"),
  themeCount: byId("theme-count"),
  sourceCount: byId("source-count"),
  directiveCount: byId("directive-count"),
  pageCount: byId("page-count"),
  auditRoot: byId("audit-root"),
  coverageRoot: byId("coverage-root"),
  sourceLedgerRoot: byId("source-ledger-root"),
  methodRoot: byId("method-root"),
  chaptersRoot: byId("chapters-root"),
  sourceLeadCount: byId("source-lead-count"),
  highPriorityCount: byId("high-priority-count"),
  findingAidCount: byId("finding-aid-count"),
  openTaskCount: byId("open-task-count"),
  prioritySummary: byId("priority-summary"),
  priorityList: byId("priority-list"),
  searchInput: byId("record-search"),
  chapterFilter: byId("chapter-filter"),
  themeFilter: byId("theme-filter"),
  statusFilter: byId("status-filter"),
  typeFilter: byId("type-filter"),
  clearFilters: byId("clear-filters"),
  exportRecords: byId("export-records"),
  recordsSummary: byId("records-summary"),
  recordsRoot: byId("records-root"),
  sourcesRoot: byId("sources-root")
};

function number(value) {
  return formatter.format(value || 0);
}

function setText(node, value) {
  if (node) node.textContent = String(value);
}

function uniqueDirectives(items) {
  const values = new Set();
  for (const item of items) {
    for (const directive of item.directives || []) values.add(directive);
  }
  return values;
}

function collectionPageTotal(items) {
  return items.reduce((sum, item) => sum + (Number.isFinite(item.collectionPages) ? item.collectionPages : 0), 0);
}

function themeLabel(id) {
  return themeById.get(id)?.title || "Unmapped";
}

function chapterLabel(id) {
  return chapterById.get(id)?.title || "Unmapped chapter";
}

function chapterFilterLabel(id) {
  const chapter = chapterById.get(id);
  return chapter ? `${chapter.dateLabel} - ${chapter.title}` : "Unmapped chapter";
}

function sortRecords(a, b) {
  const chapterA = chapterById.get(a.chapterId)?.number || 99;
  const chapterB = chapterById.get(b.chapterId)?.number || 99;
  const themeA = themeById.get(a.themeId)?.number || 99;
  const themeB = themeById.get(b.themeId)?.number || 99;
  return (
    chapterA - chapterB ||
    a.date.localeCompare(b.date) ||
    themeA - themeB ||
    a.title.localeCompare(b.title)
  );
}

function groupCount(items, labelFor) {
  const groups = new Map();
  for (const item of items) {
    const label = labelFor(item) || "Unsorted";
    const group = groups.get(label) || { label, count: 0, pages: 0, directives: new Set() };
    group.count += 1;
    group.pages += Number.isFinite(item.collectionPages) ? item.collectionPages : 0;
    for (const directive of item.directives || []) group.directives.add(directive);
    groups.set(label, group);
  }
  return [...groups.values()];
}

function allStatuses() {
  return [...new Set(records.map((record) => record.status).filter(Boolean))].sort();
}

function allTypes() {
  return [...new Set(records.map((record) => record.type).filter(Boolean))].sort();
}

function isPublicRecord(record) {
  return /Finding Aid|Public Anchor|Foundation Lead|Published NSS|Public Source Copy|Released PRD|Released PDD|Declassified Drive Source/.test(
    record.status
  );
}

function populateSelect(select, values, fallback) {
  if (!select) return;
  select.replaceChildren(new Option(fallback, "all"));
  for (const value of values) select.append(new Option(value, value));
}

function renderStats() {
  setText(nodes.totalRecords, number(records.length));
  setText(nodes.themeCount, number(chapters.length));
  setText(nodes.sourceCount, number(sources.length));
  setText(nodes.directiveCount, number(uniqueDirectives(records).size));
  setText(nodes.pageCount, number(collectionPageTotal(records)));
  setText(nodes.sourceLeadCount, number(records.length));
  setText(nodes.highPriorityCount, number(records.filter((record) => record.priority === "High").length));
  setText(nodes.findingAidCount, number(records.filter(isPublicRecord).length));
  setText(nodes.openTaskCount, number(records.filter((record) => /Harvest|Directive Cluster/.test(record.status)).length));
}

function auditCard(title, value, detail, meta) {
  const card = document.createElement("article");
  card.className = "audit-card";

  const heading = document.createElement("h3");
  heading.textContent = title;
  const stat = document.createElement("p");
  stat.className = "audit-stat";
  stat.textContent = value;
  const body = document.createElement("p");
  body.textContent = detail;

  card.append(heading, stat, body);
  if (meta) {
    const foot = document.createElement("p");
    foot.className = "audit-meta";
    foot.textContent = meta;
    card.append(foot);
  }
  return card;
}

function renderAudit() {
  const publicItems = records.filter(isPublicRecord);
  const highPriority = records.filter((record) => record.priority === "High");
  const directiveClusters = records.filter((record) => (record.directives || []).length > 1);
  const crafting = records.filter((record) => record.nssCrafting);
  const pages = collectionPageTotal(records);

  nodes.auditRoot?.replaceChildren(
    auditCard(
      "Volume Status",
      "Planned",
      "The Office of the Historian status page identifies FRUS 1993-2000, Volume VI, National Security Policy, as planned.",
      "No published document sequence is implied by this workspace."
    ),
    auditCard(
      "Chapter Plan",
      `${chapters.length} volume chapters`,
      "The volume sequence now follows one chapter for each Clinton National Security Strategy report, plus a BMD/ABM Treaty special issue chapter.",
      `${themes.length} NSP theme lanes remain available as cross-cutting filters.`
    ),
    auditCard(
      "NSS Crafting Trail",
      `${number(crafting.length)} leads`,
      "Public Clinton Library records now capture report copies, planning notes, draft-location finding aids, and preparation context.",
      "1997 has the strongest document-level trail; 1994, 1996, and 2000 remain visible source gaps."
    ),
    auditCard(
      "Public Anchors",
      `${number(publicItems.length)} leads`,
      "Official status pages, Clinton Library directive lists, and public finding aids provide the first source-control layer.",
      `${number(pages)} pages of collection-level extent are visible where finding aids provide counts.`
    ),
    auditCard(
      "Directive Coverage",
      `${number(uniqueDirectives(records).size)} handles`,
      `${number(directiveClusters.length)} rows group multiple PRD/PDD handles for harvest rather than treating every directive title as a selected document.`,
      `${number(highPriority.length)} high-priority leads are flagged for first pass.`
    )
  );
}

function renderCoverage() {
  if (!nodes.coverageRoot) return;
  const groups = groupCount(records, (record) => themeLabel(record.themeId)).sort((a, b) =>
    a.label.localeCompare(b.label)
  );
  const max = Math.max(...groups.map((group) => group.count), 1);

  const heading = document.createElement("h3");
  heading.textContent = "Coverage by Theme";
  const list = document.createElement("div");
  list.className = "coverage-list";

  for (const group of groups) {
    const row = document.createElement("div");
    row.className = "coverage-row";
    const label = document.createElement("span");
    label.textContent = group.label;
    const meter = document.createElement("span");
    meter.className = "coverage-meter";
    meter.style.setProperty("--meter-width", `${Math.max(10, (group.count / max) * 100)}%`);
    const value = document.createElement("span");
    value.textContent = `${number(group.count)} leads / ${number(group.directives.size)} handles`;
    row.append(label, meter, value);
    list.append(row);
  }
  nodes.coverageRoot.replaceChildren(heading, list);
}

function renderSourceLedger() {
  if (!nodes.sourceLedgerRoot) return;
  const groups = groupCount(records, (record) => record.sourceName).sort(
    (a, b) => b.count - a.count || a.label.localeCompare(b.label)
  );

  const heading = document.createElement("h3");
  heading.textContent = "Source Ledger";
  const list = document.createElement("div");
  list.className = "source-ledger-list";

  for (const group of groups) {
    const row = document.createElement("div");
    row.className = "source-ledger-row";
    const label = document.createElement("span");
    label.textContent = group.label;
    const value = document.createElement("span");
    value.textContent = group.pages ? `${number(group.count)} / ${number(group.pages)} pp.` : `${number(group.count)} leads`;
    row.append(label, value);
    list.append(row);
  }
  nodes.sourceLedgerRoot.replaceChildren(heading, list);
}

function methodCard(theme) {
  const card = document.createElement("article");
  card.className = "method-card";

  const top = document.createElement("div");
  top.className = "method-card-top";
  const heading = document.createElement("h3");
  heading.textContent = theme.original;
  const badge = document.createElement("span");
  badge.className = "readiness-status set";
  badge.textContent = `Lane ${theme.number}`;
  top.append(heading, badge);

  const adapted = document.createElement("p");
  adapted.className = "adapted-title";
  adapted.textContent = theme.title;
  const body = document.createElement("p");
  body.textContent = theme.adaptation;
  const question = document.createElement("p");
  question.className = "audit-meta";
  question.textContent = theme.selectionQuestion;

  card.append(top, adapted, body, question);
  return card;
}

function renderMethod() {
  nodes.methodRoot?.replaceChildren(...themes.map(methodCard));
}

function chapterCard(chapter) {
  const chapterRecords = records.filter((record) => record.chapterId === chapter.id);
  const directives = uniqueDirectives(chapterRecords);
  const pages = collectionPageTotal(chapterRecords);
  const crafting = chapterRecords.filter((record) => record.nssCrafting);

  const card = document.createElement("a");
  card.className = "chapter-card";
  card.href = "#records";
  card.dataset.quickFilter = chapter.id;
  card.setAttribute("aria-label", `View ${chapter.title} records`);

  const numberText = document.createElement("p");
  numberText.className = "chapter-number";
  numberText.textContent = `Chapter ${chapter.number} / ${chapter.dateLabel}`;
  const heading = document.createElement("h3");
  heading.textContent = chapter.title;
  const count = document.createElement("p");
  count.className = "chapter-count";
  count.textContent = crafting.length
    ? `${number(chapterRecords.length)} leads / ${number(crafting.length)} NSS crafting`
    : `${number(chapterRecords.length)} leads`;
  const body = document.createElement("p");
  body.textContent = chapter.note;
  const action = document.createElement("span");
  action.className = "chapter-action";
  action.textContent = pages
    ? `${number(pages)} source pages / ${number(directives.size)} handles`
    : `${number(directives.size)} handles`;

  card.append(numberText, heading, count, body, action);
  return card;
}

function renderChapters() {
  nodes.chaptersRoot?.replaceChildren(...chapters.map(chapterCard));
}

function renderPriorityQueue() {
  const priority = records.filter((record) => record.priority === "High").sort(sortRecords);
  if (nodes.prioritySummary) {
    nodes.prioritySummary.textContent = `${number(priority.length)} high-priority leads should be harvested before lower-confidence directive clusters.`;
  }

  nodes.priorityList?.replaceChildren(
    ...priority.slice(0, 7).map((record) => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = `${chapterById.get(record.chapterId)?.shortTitle || "Chapter"}: ${record.title}`;
      button.addEventListener("click", () => {
        applyQuickFilter(record.chapterId);
        nodes.searchInput.value = record.title.split(",")[0];
        filterRecords();
        byId("records")?.scrollIntoView({ block: "start" });
      });
      item.append(button);
      return item;
    })
  );
}

function renderSources() {
  if (!nodes.sourcesRoot) return;
  nodes.sourcesRoot.replaceChildren(
    ...sources.map((source) => {
      const link = document.createElement("a");
      link.href = source.url;
      link.rel = "noreferrer";
      const title = document.createElement("strong");
      title.textContent = source.label;
      const note = document.createElement("span");
      note.textContent = source.note;
      link.append(title, note);
      return link;
    })
  );
}

function renderFilters() {
  populateSelect(
    nodes.chapterFilter,
    chapters.map((chapter) => chapterFilterLabel(chapter.id)),
    "All chapters"
  );
  populateSelect(
    nodes.themeFilter,
    themes.map((theme) => theme.title),
    "All themes"
  );
  populateSelect(nodes.statusFilter, allStatuses(), "All statuses");
  populateSelect(nodes.typeFilter, allTypes(), "All types");
}

function hasQuickMatch(record, filter) {
  if (filter === "all") return true;
  if (filter === "high") return record.priority === "High";
  if (filter === "public") return isPublicRecord(record);
  if (filter === "crafting") return Boolean(record.nssCrafting);
  if (filter === "directive") return (record.directives || []).length > 0;
  if (filter === "harvest") return /Harvest|Directive Cluster/.test(record.status);
  return record.themeId === filter || record.chapterId === filter;
}

function currentRecords() {
  const query = nodes.searchInput?.value.trim().toLowerCase() || "";
  const chapter = nodes.chapterFilter?.value || "all";
  const theme = nodes.themeFilter?.value || "all";
  const status = nodes.statusFilter?.value || "all";
  const type = nodes.typeFilter?.value || "all";

  return records.filter((record) => {
    const themeTitle = themeLabel(record.themeId);
    const chapterTitle = chapterLabel(record.chapterId);
    const chapterOption = chapterFilterLabel(record.chapterId);
    const matchesChapter = chapter === "all" || chapterOption === chapter;
    const matchesTheme = theme === "all" || themeTitle === theme;
    const matchesStatus = status === "all" || record.status === status;
    const matchesType = type === "all" || record.type === type;
    const matchesQuick = hasQuickMatch(record, activeQuickFilter);
    const haystack = JSON.stringify({ ...record, chapterTitle, chapterOption, themeTitle }).toLowerCase();
    return (
      matchesChapter &&
      matchesTheme &&
      matchesStatus &&
      matchesType &&
      matchesQuick &&
      (!query || haystack.includes(query))
    );
  });
}

function badge(text, className = "") {
  const item = document.createElement("span");
  item.className = className ? `badge ${className}` : "badge";
  item.textContent = text;
  return item;
}

function recordRow(record) {
  const row = document.createElement("article");
  row.className = `record-row priority-${record.priority.toLowerCase()}`;

  const date = document.createElement("time");
  date.className = "record-date";
  date.dateTime = record.date;
  date.textContent = record.dateLabel || record.date;

  const body = document.createElement("div");
  const title = document.createElement("a");
  title.className = "record-title";
  title.href = record.sourceUrl;
  title.rel = "noreferrer";
  title.textContent = record.title;

  const summary = document.createElement("p");
  summary.className = "record-subject";
  summary.textContent = record.summary;

  const meta = document.createElement("div");
  meta.className = "record-meta";
  meta.append(
    badge(chapterById.get(record.chapterId)?.shortTitle || "Chapter"),
    badge(themeById.get(record.themeId)?.shortTitle || "Theme"),
    badge(record.type),
    badge(record.status, "status"),
    badge(record.priority === "High" ? "High priority" : `${record.priority} priority`, record.priority.toLowerCase())
  );
  if (record.collectionFolders) meta.append(badge(`${number(record.collectionFolders)} folders`));
  if (record.collectionPages) meta.append(badge(`${number(record.collectionPages)} source pages`));

  const sourceNote = document.createElement("p");
  sourceNote.className = "record-source-note";
  sourceNote.textContent = record.sourceNote;

  const directives = document.createElement("div");
  directives.className = "record-directives";
  for (const directive of record.directives || []) directives.append(badge(directive, "directive"));

  const topics = document.createElement("p");
  topics.className = "record-topics";
  topics.textContent = `Topics: ${(record.topics || []).join(", ")}`;

  body.append(title, summary, meta);
  if ((record.directives || []).length) body.append(directives);
  body.append(sourceNote, topics);

  const links = document.createElement("div");
  links.className = "record-links";
  const source = document.createElement("a");
  source.href = record.sourceUrl;
  source.rel = "noreferrer";
  source.textContent = "Source";
  links.append(source);

  if (record.pdfUrl && record.pdfUrl !== record.sourceUrl) {
    const pdf = document.createElement("a");
    pdf.href = record.pdfUrl;
    pdf.rel = "noreferrer";
    pdf.textContent = "PDF";
    links.append(pdf);
  }

  row.append(date, body, links);
  return row;
}

function renderRecords(items = currentRecords()) {
  const sorted = [...items].sort(sortRecords);
  if (nodes.recordsSummary) {
    const pages = collectionPageTotal(sorted);
    const crafting = sorted.filter((record) => record.nssCrafting).length;
    const summaryParts = [
      `Showing ${number(sorted.length)} of ${number(records.length)} leads`,
      crafting ? `${number(crafting)} NSS crafting leads` : "",
      `${number(uniqueDirectives(sorted).size)} directive handles`,
      `${number(pages)} cataloged source pages`
    ].filter(Boolean);
    nodes.recordsSummary.textContent = `${summaryParts.join("; ")}.`;
  }

  if (!nodes.recordsRoot) return;
  nodes.recordsRoot.replaceChildren();
  if (!sorted.length) {
    const empty = document.createElement("p");
    empty.className = "loading";
    empty.textContent = "No records match this filter.";
    nodes.recordsRoot.append(empty);
    return;
  }

  for (const chapter of chapters) {
    const chapterRecords = sorted.filter((record) => record.chapterId === chapter.id);
    if (!chapterRecords.length) continue;

    const section = document.createElement("section");
    section.className = "record-chapter";
    section.id = `chapter-${chapter.id}`;

    const header = document.createElement("div");
    header.className = "record-chapter-header";
    const heading = document.createElement("h3");
    heading.textContent = `Chapter ${chapter.number}: ${chapter.title}`;
    const count = document.createElement("p");
    count.className = "record-count";
    const craftingCount = chapterRecords.filter((record) => record.nssCrafting).length;
    count.textContent = craftingCount
      ? `${number(chapterRecords.length)} leads / ${number(craftingCount)} NSS crafting / ${number(
          uniqueDirectives(chapterRecords).size
        )} directive handles`
      : `${number(chapterRecords.length)} leads / ${number(uniqueDirectives(chapterRecords).size)} directive handles`;
    header.append(heading, count);

    const list = document.createElement("div");
    list.className = "record-list";
    for (const record of chapterRecords) list.append(recordRow(record));

    section.append(header, list);
    nodes.recordsRoot.append(section);
  }
}

function setQuickButtons() {
  for (const button of document.querySelectorAll("[data-record-filter]")) {
    button.setAttribute("aria-pressed", String(button.dataset.recordFilter === activeQuickFilter));
  }
}

function applyQuickFilter(filter) {
  if (!filter) return;
  activeQuickFilter = filter;
  if (nodes.chapterFilter) {
    const chapter = chapterById.get(filter);
    nodes.chapterFilter.value = chapter ? chapterFilterLabel(filter) : "all";
  }
  if (nodes.themeFilter) {
    const theme = themeById.get(filter);
    nodes.themeFilter.value = theme ? theme.title : "all";
  }
  if (!chapterById.has(filter) && nodes.chapterFilter) nodes.chapterFilter.value = "all";
  if (!themeById.has(filter) && nodes.themeFilter) nodes.themeFilter.value = "all";
  if (nodes.statusFilter) nodes.statusFilter.value = "all";
  if (nodes.typeFilter) nodes.typeFilter.value = "all";
  if (nodes.searchInput) nodes.searchInput.value = "";
  setQuickButtons();
  filterRecords();
}

function filterRecords() {
  renderRecords(currentRecords());
}

function csvCell(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function exportCsv() {
  const header = [
    "chapter",
    "theme",
    "date",
    "type",
    "status",
    "priority",
    "title",
    "directives",
    "collectionFolders",
    "collectionPages",
    "sourceName",
    "sourceUrl",
    "topics"
  ];
  const rows = currentRecords()
    .sort(sortRecords)
    .map((record) =>
      [
        chapterLabel(record.chapterId),
        themeLabel(record.themeId),
        record.dateLabel || record.date,
        record.type,
        record.status,
        record.priority,
        record.title,
        (record.directives || []).join(" | "),
        record.collectionFolders || "",
        record.collectionPages || "",
        record.sourceName,
        record.sourceUrl,
        (record.topics || []).join(" | ")
      ].map(csvCell)
    );

  const csv = [header.map(csvCell), ...rows].map((row) => row.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "clinton-nsp-workspace-records.csv";
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function bindEvents() {
  nodes.searchInput?.addEventListener("input", filterRecords);
  nodes.chapterFilter?.addEventListener("change", () => {
    activeQuickFilter = "all";
    setQuickButtons();
    filterRecords();
  });
  nodes.themeFilter?.addEventListener("change", () => {
    activeQuickFilter = "all";
    setQuickButtons();
    filterRecords();
  });
  nodes.statusFilter?.addEventListener("change", filterRecords);
  nodes.typeFilter?.addEventListener("change", filterRecords);
  nodes.clearFilters?.addEventListener("click", () => {
    activeQuickFilter = "all";
    if (nodes.searchInput) nodes.searchInput.value = "";
    if (nodes.chapterFilter) nodes.chapterFilter.value = "all";
    if (nodes.themeFilter) nodes.themeFilter.value = "all";
    if (nodes.statusFilter) nodes.statusFilter.value = "all";
    if (nodes.typeFilter) nodes.typeFilter.value = "all";
    setQuickButtons();
    filterRecords();
  });
  nodes.exportRecords?.addEventListener("click", exportCsv);

  for (const control of document.querySelectorAll("[data-quick-filter]")) {
    control.addEventListener("click", (event) => {
      const filter = control.dataset.quickFilter;
      if (filter) {
        event.preventDefault();
        applyQuickFilter(filter);
        byId("records")?.scrollIntoView({ block: "start" });
      }
    });
  }

  for (const button of document.querySelectorAll("[data-record-filter]")) {
    button.addEventListener("click", () => applyQuickFilter(button.dataset.recordFilter));
  }
}

function init() {
  renderStats();
  renderAudit();
  renderCoverage();
  renderSourceLedger();
  renderMethod();
  renderChapters();
  renderPriorityQueue();
  renderSources();
  renderFilters();
  renderRecords();
  bindEvents();
}

init();
