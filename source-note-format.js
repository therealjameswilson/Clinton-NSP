(function () {
  const records = window.NSP_RECORDS || [];
  const chapters = window.NSP_CHAPTERS || [];
  const themes = window.NSP_THEMES || [];
  const chapterById = new Map(chapters.map((chapter) => [chapter.id, chapter]));
  const themeById = new Map(themes.map((theme) => [theme.id, theme]));

  function sourceCitation(record) {
    const sourceName = String(record.sourceName || "Source unidentified").trim().replace(/\.$/, "");
    return sourceName
      .replace(/^Clinton Presidential Library, /, "William J. Clinton Presidential Library, ")
      .replace(/^Clinton Library Presidential Directives$/, "William J. Clinton Presidential Library, Presidential Directives")
      .replace(/^Clinton Library (.+) finding aid$/, "William J. Clinton Presidential Library, $1 finding aid")
      .replace(/^Clinton Library ((?:PDD|PRD)-\d+)$/, "William J. Clinton Presidential Library, $1")
      .replace(
        /^Clinton Digital Library item ([\w-]+)$/,
        "William J. Clinton Presidential Library, Clinton Digital Library, item $1"
      )
      .replace(/^Defense Historical Office (.+)$/, "Office of the Secretary of Defense Historical Office, $1")
      .replace(/^State FOIA (.+)$/, "Department of State FOIA Virtual Reading Room, $1")
      .replace(/^Google Drive PDF (.+)$/, "Working copy, Google Drive PDF $1")
      .replace(/^Google Drive (.+)$/, "Working copy, Google Drive, $1")
      .replace(/^GovInfo PPP-(\d{4})-book(\d), pg (.+)$/, "Public Papers: Clinton, $1, Book $2, p. $3")
      .replace(/^GovInfo (.+)$/, "GovInfo, $1");
  }

  function sourceNote(record) {
    const note = String(record.sourceNote || "").trim();
    if (/^Source:/.test(note)) return note;
    const citation = sourceCitation(record);
    return note ? `Source: ${citation}. ${note}` : `Source: ${citation}.`;
  }

  function chapterLabel(id) {
    return chapterById.get(id)?.title || "Unmapped chapter";
  }

  function compilerNote(record) {
    return [
      `${record.dateLabel || record.date} - ${record.title}`,
      sourceNote(record),
      `Source URL: ${record.sourceUrl}`,
      record.pdfUrl ? `PDF URL: ${record.pdfUrl}` : "",
      `Chapter: ${chapterLabel(record.chapterId)}`,
      `Topics: ${(record.topics || []).join(", ")}`
    ]
      .filter(Boolean)
      .join("\n");
  }

  function recordForRow(row) {
    const title = row.querySelector(".record-title")?.textContent.trim();
    const href = row.querySelector(".record-title")?.href || "";
    return (
      records.find((record) => record.title === title && href.includes(record.sourceUrl)) ||
      records.find((record) => record.title === title)
    );
  }

  function patchSourceNotes(root = document) {
    for (const row of root.querySelectorAll(".record-row, .record-card")) {
      const record = recordForRow(row);
      const note = row.querySelector(".record-source-note, .record-source");
      if (record && note) note.textContent = sourceNote(record);
    }
  }

  document.addEventListener(
    "click",
    async (event) => {
      const button = event.target.closest("button");
      if (!button || button.textContent.trim() !== "Copy note") return;
      const row = button.closest(".record-row, .record-card");
      const record = row ? recordForRow(row) : null;
      if (!record) return;

      event.preventDefault();
      event.stopImmediatePropagation();

      const original = button.textContent;
      try {
        await navigator.clipboard.writeText(compilerNote(record));
        button.textContent = "Copied";
      } catch {
        button.textContent = "Copy failed";
      }
      window.setTimeout(() => {
        button.textContent = original;
      }, 1600);
    },
    true
  );

  patchSourceNotes();
  window.addEventListener("DOMContentLoaded", () => patchSourceNotes());
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) patchSourceNotes(node);
      }
    }
  }).observe(document.body, { childList: true, subtree: true });
})();
