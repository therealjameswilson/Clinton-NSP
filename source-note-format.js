(function () {
  const records = window.NSP_RECORDS || [];
  const chapters = window.NSP_CHAPTERS || [];
  const themes = window.NSP_THEMES || [];
  const chapterById = new Map(chapters.map((chapter) => [chapter.id, chapter]));
  const themeById = new Map(themes.map((theme) => [theme.id, theme]));

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

  function sourceCitation(record) {
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
    if (publicPapers) return `Public Papers: Clinton, ${publicPapers[1]}, Book ${sourceBookLabel(publicPapers[2])}, p. ${publicPapers[3]}`;
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

  function sourceDetail(record) {
    return String(record.sourceNote || "")
      .trim()
      .replace(/^Drive search (?:hit|result)(?: from [^.]+)? for [^.]+\. ?/, "")
      .replace(/^Drive search (?:hit|result)(?: from [^.]+)?\. ?/, "");
  }

  function sourceNote(record) {
    const note = sourceDetail(record);
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
