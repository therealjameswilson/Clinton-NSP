(function () {
  const chapters = window.NSP_CHAPTERS || [];
  const themes = window.NSP_THEMES || [];
  const records = window.NSP_RECORDS || [];
  const chapterById = new Map(chapters.map((chapter) => [chapter.id, chapter]));
  const themeById = new Map(themes.map((theme) => [theme.id, theme]));
  const declassifiedStatuses = new Set([
    "Declassified Drive Source",
    "Digitized Source",
    "Official Public Statement",
    "Public FOIA Source",
    "Public Source Copy",
    "Published NSS",
    "Released PDD",
    "Released PRD"
  ]);

  const byId = (id) => document.getElementById(id);

  function chapterLabel(id) {
    return chapterById.get(id)?.title || "Unmapped chapter";
  }

  function chapterFilterLabel(id) {
    const chapter = chapterById.get(id);
    return chapter ? `${chapter.dateLabel} - ${chapter.title}` : "Unmapped chapter";
  }

  function themeLabel(id) {
    return themeById.get(id)?.title || "Unmapped";
  }

  function sourceBookLabel(value) {
    return { 1: "I", 2: "II", 3: "III" }[value] || value;
  }

  function workingCopyIdentifier(sourceName) {
    return sourceName
      .replace(/^Google Drive PDF /, "")
      .replace(/^Google Drive /, "")
      .trim();
  }

  function declassifiedWorkingCopyCitation(record, sourceName) {
    const identifier = workingCopyIdentifier(sourceName);
    const handle = identifier ? `, declassified working copy ${identifier}` : ", declassified working copy";
    const text = `${record.title || ""} ${record.type || ""} ${record.sourceNote || ""}`.toLowerCase();

    if (/cable|moscow \d+/.test(text)) {
      return `Department of State, electronic telegram${identifier ? ` ${identifier}` : ""}; central file citation to be verified`;
    }
    if (/cohen|secdef|secretary of defense|bmdo/.test(text)) {
      return `Office of the Secretary of Defense, Secretary of Defense William S. Cohen files${handle}; box and folder citation to be verified`;
    }
    if (/white house|national security council|nsc|lake|berger|gore|chernomyrdin|pdd|prd|jdec|start|abm|nmd|strategic stability/.test(text)) {
      return `William J. Clinton Presidential Library, National Security Council records${handle}; collection, box, and folder citation to be verified`;
    }
    if (/dod|defense|qdr|military|nuclear|tricare|c3isr|homeland|year 2000|y2k/.test(text)) {
      return `Department of Defense records${handle}; repository, box, and folder citation to be verified`;
    }
    return `Declassified working copy${identifier ? ` ${identifier}` : ""}; original repository, box, and folder citation to be verified`;
  }

  function frusSourceCitation(record) {
    const sourceName = String(record.sourceName || "Source unidentified").trim().replace(/\.$/, "");
    const clintonDirective = sourceName.match(/^Clinton Library ((?:PDD|PRD)-\d+)$/);
    const clintonFindingAid = sourceName.match(/^Clinton Library (.+) finding aid$/);
    const clintonDigitalItem = sourceName.match(/^Clinton Digital Library item ([\w-]+)$/);
    const stateFoia = sourceName.match(/^State FOIA (.+)$/);
    const publicPapers = sourceName.match(/^GovInfo PPP-(\d{4})-book(\d), pg (.+)$/);
    const gaoReport = sourceName.match(/^GovInfo GAO\/(.+)$/);
    const federalRegister = sourceName.match(/^GovInfo Federal Register (.+)$/);
    const federalRegisterPdf = sourceName.match(/^GovInfo Federal Register PDF (.+)$/);
    const executiveOrder = sourceName.match(/^GovInfo EO (.+)$/);
    const dtic = sourceName.match(/^DTIC public technical report (.+)$/);
    const congress = sourceName.match(/^Congress\.gov Senate event (.+)$/);
    const omb = sourceName.match(/^Archived OMB Memorandum (.+)$/);
    const archivedWhiteHouse = sourceName.match(/^Archived Clinton White House (.+)$/);

    if (sourceName.startsWith("Google Drive")) return declassifiedWorkingCopyCitation(record, sourceName);
    if (sourceName.startsWith("Clinton Presidential Library, ")) {
      return sourceName.replace(/^Clinton Presidential Library, /, "William J. Clinton Presidential Library, ");
    }
    if (sourceName === "Clinton Library Presidential Directives") {
      return "William J. Clinton Presidential Library, Presidential Directives";
    }
    if (clintonDirective) return `William J. Clinton Presidential Library, Presidential Directives, ${clintonDirective[1]}`;
    if (clintonFindingAid) return `William J. Clinton Presidential Library, ${clintonFindingAid[1]} finding aid`;
    if (clintonDigitalItem) return `William J. Clinton Presidential Library, Clinton Digital Library, item ${clintonDigitalItem[1]}`;
    if (sourceName === "2013-0185-M NSC folder-title list") {
      return "William J. Clinton Presidential Library, National Security Council Records, 2013-0185-M folder-title list";
    }
    if (sourceName === "Defense Historical Office NSS index") {
      return "Office of the Secretary of Defense Historical Office, National Security Strategy archive";
    }
    if (/^(?:Defense|DoD) Historical Office /.test(sourceName)) {
      return sourceName.replace(/^(?:Defense|DoD) Historical Office /, "Office of the Secretary of Defense Historical Office, ");
    }
    if (stateFoia) return `Department of State, FOIA Virtual Reading Room, document ${stateFoia[1]}; original file citation to be verified`;
    if (publicPapers) {
      return `Public Papers: Clinton, ${publicPapers[1]}, Book ${sourceBookLabel(publicPapers[2])}, p. ${publicPapers[3]}`;
    }
    if (gaoReport) return `U.S. General Accounting Office, ${gaoReport[1]}`;
    if (federalRegisterPdf) return `Federal Register, ${federalRegisterPdf[1]}`;
    if (federalRegister) return `Federal Register, ${federalRegister[1]}`;
    if (executiveOrder) return `Federal Register, Executive Order ${executiveOrder[1]}`;
    if (sourceName === "Federal Depository Library Program PURL") return "Federal Depository Library Program, PURL";
    if (dtic) return `Defense Technical Information Center, ${dtic[1]}`;
    if (congress) return `Congress.gov, Senate event ${congress[1]}`;
    if (omb) return `Office of Management and Budget, Memorandum ${omb[1]} (archived copy)`;
    if (archivedWhiteHouse) return `White House, ${archivedWhiteHouse[1]} (archived copy)`;
    return sourceName.replace(/^GovInfo (.+)$/, "GovInfo, $1");
  }

  function frusSourceDetail(record) {
    return String(record.sourceNote || "")
      .trim()
      .replace(/^Drive search (?:hit|result)(?: from [^.]+)? for [^.]+\. ?/, "")
      .replace(/^Drive search (?:hit|result)(?: from [^.]+)?\. ?/, "");
  }

  function frusSourceNote(record) {
    const note = frusSourceDetail(record);
    if (/^Source:/.test(note)) return note;
    const citation = frusSourceCitation(record);
    return note ? `Source: ${citation}. ${note}` : `Source: ${citation}.`;
  }

  function isPublicRecord(record) {
    return /Finding Aid|Public Anchor|Foundation Lead|Published NSS|Public Source Copy|Released PRD|Released PDD|Declassified Drive Source|Public FOIA Source|Official Public Statement/.test(
      record.status || ""
    );
  }

  function isDeclassifiedDocument(record) {
    return declassifiedStatuses.has(record.status);
  }

  function sortRecordsChronologically(a, b) {
    const chapterA = chapterById.get(a.chapterId)?.number || 99;
    const chapterB = chapterById.get(b.chapterId)?.number || 99;
    const themeA = themeById.get(a.themeId)?.number || 99;
    const themeB = themeById.get(b.themeId)?.number || 99;
    return a.date.localeCompare(b.date) || chapterA - chapterB || themeA - themeB || a.title.localeCompare(b.title);
  }

  function activeRecordFilter() {
    return document.querySelector("[data-record-filter][aria-pressed='true']")?.dataset.recordFilter || "declassified";
  }

  function hasQuickMatch(record, filter) {
    if (filter === "all") return true;
    if (filter === "declassified") return isDeclassifiedDocument(record);
    if (filter === "high") return record.priority === "High";
    if (filter === "public") return isPublicRecord(record);
    if (filter === "standalone") return Boolean(record.standaloneDocument);
    if (filter === "crafting") return Boolean(record.nssCrafting);
    if (filter === "directive") return (record.directives || []).length > 0;
    if (filter === "harvest") return /Harvest|Directive Cluster/.test(record.status || "");
    return record.themeId === filter || record.chapterId === filter;
  }

  function currentRecords() {
    const query = byId("record-search")?.value.trim().toLowerCase() || "";
    const chapter = byId("chapter-filter")?.value || "all";
    const theme = byId("theme-filter")?.value || "all";
    const status = byId("status-filter")?.value || "all";
    const type = byId("type-filter")?.value || "all";
    const quick = activeRecordFilter();

    return records
      .filter((record) => {
        const themeTitle = themeLabel(record.themeId);
        const chapterTitle = chapterLabel(record.chapterId);
        const chapterOption = chapterFilterLabel(record.chapterId);
        const haystack = JSON.stringify({ ...record, chapterTitle, chapterOption, themeTitle }).toLowerCase();
        return (
          (chapter === "all" || chapterOption === chapter) &&
          (theme === "all" || themeTitle === theme) &&
          (status === "all" || record.status === status) &&
          (type === "all" || record.type === type) &&
          hasQuickMatch(record, quick) &&
          (!query || haystack.includes(query))
        );
      })
      .sort(sortRecordsChronologically);
  }

  function compilerNoteText(record) {
    return [
      `${record.dateLabel || record.date} - ${record.title}`,
      frusSourceNote(record),
      `Source URL: ${record.sourceUrl}`,
      record.pdfUrl ? `PDF URL: ${record.pdfUrl}` : "",
      `Chapter: ${chapterLabel(record.chapterId)}`,
      `Topics: ${(record.topics || []).join(", ")}`
    ]
      .filter(Boolean)
      .join("\n");
  }

  function csvCell(value) {
    return `"${String(value ?? "").replace(/"/g, '""')}"`;
  }

  function downloadCsv(filename, header, rows) {
    const csv = [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  function exportFullCsv() {
    const header = [
      "id",
      "chapter",
      "theme",
      "date",
      "type",
      "status",
      "priority",
      "title",
      "summary",
      "directives",
      "collectionFolders",
      "collectionPages",
      "sourceName",
      "sourceNote",
      "sourceUrl",
      "pdfUrl",
      "topics"
    ];
    const rows = currentRecords().map((record) => [
      record.id,
      chapterLabel(record.chapterId),
      themeLabel(record.themeId),
      record.dateLabel || record.date,
      record.type,
      record.status,
      record.priority,
      record.title,
      record.summary,
      (record.directives || []).join(" | "),
      record.collectionFolders || "",
      record.collectionPages || "",
      record.sourceName,
      frusSourceNote(record),
      record.sourceUrl,
      record.pdfUrl || "",
      (record.topics || []).join(" | ")
    ]);

    downloadCsv("clinton-nsp-workspace-records.csv", header, rows);
  }

  function exportSourceNotes() {
    const header = ["date", "chapter", "title", "type", "status", "priority", "compilerNote", "sourceUrl", "pdfUrl"];
    const rows = currentRecords().map((record) => [
      record.dateLabel || record.date,
      chapterLabel(record.chapterId),
      record.title,
      record.type,
      record.status,
      record.priority,
      compilerNoteText(record),
      record.sourceUrl,
      record.pdfUrl || ""
    ]);

    downloadCsv("clinton-nsp-frus-source-notes.csv", header, rows);
  }

  async function copySourceNotes() {
    const button = byId("copy-source-notes");
    const original = button?.textContent || "Copy Notes";
    const text = currentRecords().map(compilerNoteText).join("\n\n");
    try {
      await navigator.clipboard.writeText(text);
      if (button) button.textContent = "Copied Notes";
    } catch {
      if (button) button.textContent = "Copy Failed";
    }
    if (button) {
      window.setTimeout(() => {
        button.textContent = original;
      }, 1800);
    }
  }

  function ensureExportNotesButton() {
    const tools = document.querySelector(".compiler-filters");
    if (!tools) return;
    if (!byId("export-source-notes")) {
      const exportButton = document.createElement("button");
      exportButton.id = "export-source-notes";
      exportButton.type = "button";
      exportButton.textContent = "Export Notes";
      tools.append(exportButton);
    }
    if (!byId("copy-source-notes")) {
      const copyButton = document.createElement("button");
      copyButton.id = "copy-source-notes";
      copyButton.type = "button";
      copyButton.textContent = "Copy Notes";
      tools.append(copyButton);
    }
  }

  function bindExportButtons() {
    const exportRecords = byId("export-records");
    const exportSourceNotesButton = byId("export-source-notes");
    const copySourceNotesButton = byId("copy-source-notes");
    exportRecords?.addEventListener(
      "click",
      (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        exportFullCsv();
      },
      true
    );
    exportSourceNotesButton?.addEventListener("click", exportSourceNotes);
    copySourceNotesButton?.addEventListener("click", copySourceNotes);
  }

  function recordForRow(row) {
    const title = row.querySelector(".record-title")?.textContent || "";
    const href = row.querySelector(".record-title")?.href || "";
    return records.find((record) => record.title === title && href.includes(record.sourceUrl));
  }

  function enhanceRows() {
    for (const row of document.querySelectorAll(".record-row")) {
      const links = row.querySelector(".record-links");
      if (!links || links.querySelector("button")) continue;
      const record = recordForRow(row);
      if (!record) continue;
      const copyNote = document.createElement("button");
      copyNote.type = "button";
      copyNote.dataset.copySourceNote = "true";
      copyNote.textContent = "Copy note";
      copyNote.addEventListener("click", async () => {
        const original = copyNote.textContent;
        try {
          await navigator.clipboard.writeText(compilerNoteText(record));
          copyNote.textContent = "Copied";
        } catch {
          copyNote.textContent = "Copy failed";
        }
        window.setTimeout(() => {
          copyNote.textContent = original;
        }, 1800);
      });
      links.append(copyNote);
    }
  }

  function injectStyles() {
    if (byId("compiler-tools-style")) return;
    const style = document.createElement("style");
    style.id = "compiler-tools-style";
    style.textContent = `
      .compiler-filters { grid-template-columns: repeat(4, minmax(140px, 1fr)) repeat(4, auto); }
      #export-source-notes,
      #copy-source-notes { border-color: #2f6f63; background: #2f6f63; color: #fff; }
      .record-links { flex-wrap: wrap; }
      .record-links button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 34px;
        border: 1px solid rgba(47, 111, 99, 0.28);
        border-radius: 999px;
        padding: 0 10px;
        background: #ffffff;
        color: #224d45;
        cursor: pointer;
        font: inherit;
        font-size: 0.82rem;
        font-weight: 700;
      }
      @media (max-width: 760px) {
        .compiler-filters { grid-template-columns: 1fr; }
      }
    `;
    document.head.append(style);
  }

  function ensureHandoffLink() {
    const nav = document.querySelector(".site-header nav");
    if (!nav || nav.querySelector("a[href='compiler-handoff.html']")) return;
    const link = document.createElement("a");
    link.href = "compiler-handoff.html";
    link.textContent = "Handoff";
    const chronology = nav.querySelector("a[href='#records']");
    if (chronology?.nextSibling) {
      nav.insertBefore(link, chronology.nextSibling);
    } else {
      nav.prepend(link);
    }
  }

  function initCompilerTools() {
    injectStyles();
    ensureHandoffLink();
    ensureExportNotesButton();
    bindExportButtons();
    enhanceRows();
    const recordsRoot = byId("records-root");
    if (recordsRoot) {
      const observer = new MutationObserver(() => enhanceRows());
      observer.observe(recordsRoot, { childList: true, subtree: true });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCompilerTools);
  } else {
    initCompilerTools();
  }
})();
