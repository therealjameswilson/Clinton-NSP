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

  function frusSourceNote(record) {
    const note = String(record.sourceNote || "").trim();
    if (/^Source:/.test(note)) return note;
    const sourceName = String(record.sourceName || "Source unidentified").trim().replace(/\.$/, "");
    return `Source: ${sourceName}. ${note}`;
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
