window.NSP_CHAPTERS = [
  {
    id: "national-security-strategy",
    number: 1,
    year: "1993-2000",
    dateLabel: "1993-2000",
    title: "National Security Strategy",
    shortTitle: "NSS",
    reportUrl: "https://history.defense.gov/Historical-Sources/National-Security-Strategy/lang/en/",
    note:
      "Chronological chapter for the Clinton administration's National Security Strategy record across 1993-2000, keeping the published NSS reports, drafting traces, directive-system leads, and strategy-review records in one eight-year sequence."
  },
  {
    id: "bmd-abm",
    number: 2,
    year: "1993-2000",
    dateLabel: "1993-2000",
    title: "National Missile Defense and the ABM Treaty",
    shortTitle: "NMD/ABM",
    reportUrl: "https://www.clintonlibrary.gov/research/presidential-directives",
    note:
      "Special issue chapter on the Clinton administration's review of national missile defense, the future of the ABM Treaty, nuclear posture, START III, and U.S.-Russian missile-launch warning cooperation."
  },
  {
    id: "tech-transfer",
    number: 3,
    year: "1993-2000",
    dateLabel: "1993-2000",
    title: "Technology Transfer, Export Controls, and Strategic Industry",
    shortTitle: "Tech Transfer",
    reportUrl: "https://www.clintonlibrary.gov/research/presidential-directives",
    note:
      "Special issue chapter on post-Cold War technology transfer: nonproliferation export controls, encryption, remote sensing, commercial satellites, jet-engine hot-section technology, conventional arms transfers, space policy, and allied defense-industrial reform."
  },
  {
    id: "y2k-planning",
    number: 4,
    year: "1998-2000",
    dateLabel: "1998-2000",
    title: "Y2K Planning and Critical Infrastructure Readiness",
    shortTitle: "Y2K Planning",
    reportUrl: "https://www.govinfo.gov/content/pkg/CFR-1999-title3-vol1/pdf/CFR-1999-title3-vol1-eo13073.pdf",
    note:
      "Special issue chapter on Year 2000 planning as a post-Cold War preparedness problem: federal conversion, critical infrastructure protection, DoD operational readiness, nuclear command and control, consequence management, international risk, and U.S.-Russian strategic warning cooperation."
  }
];

const NSS_RECORDS = [
  {
    id: "published-nss-1994",
    chapterId: "national-security-strategy",
    date: "1994-07-01",
    dateLabel: "July 1994",
    type: "NSS Report",
    status: "Published NSS",
    priority: "High",
    themeId: "defense-strategy",
    title: "Published 1994 National Security Strategy",
    summary:
      "First Clinton National Security Strategy report and the baseline chronology anchor for engagement and enlargement.",
    sourceName: "Defense Historical Office NSS index",
    sourceUrl: "https://history.defense.gov/Portals/70/Documents/nss/nss1994.pdf",
    sourceNote:
      "Official published report anchor. No public Clinton Digital Library drafting packet was confirmed for the 1994 report in the initial search pass.",
    directives: [],
    topics: ["National Security Strategy", "Engagement and enlargement", "Published report"]
  },
  {
    id: "published-nss-1995",
    chapterId: "national-security-strategy",
    date: "1995-02-01",
    dateLabel: "February 1995",
    type: "NSS Report",
    status: "Published NSS",
    priority: "High",
    themeId: "defense-strategy",
    title: "Published 1995 National Security Strategy",
    summary:
      "Second engagement-and-enlargement report, with a digitized Clinton Library source copy available in speechwriting records.",
    sourceName: "Defense Historical Office NSS index",
    sourceUrl: "https://history.defense.gov/Portals/70/Documents/nss/nss1995.pdf",
    sourceNote:
      "Official published report anchor. See the separate Clinton Digital Library row for the scanned speechwriting copy.",
    directives: [],
    topics: ["National Security Strategy", "Engagement and enlargement", "Published report"]
  },
  {
    id: "nss-1995-speechwriting-copy",
    chapterId: "national-security-strategy",
    date: "1995-02-01",
    dateLabel: "February 1995",
    type: "Digitized Source",
    status: "Public Source Copy",
    priority: "High",
    themeId: "defense-strategy",
    title: "NSC - 1995 Congressional Report",
    summary:
      "Digitized speechwriting-file copy of the 1995 National Security Strategy report, useful as a page-level source control copy for the 1995 chronology entry.",
    sourceName: "Clinton Digital Library item 11086",
    sourceUrl: "https://clinton.presidentiallibraries.us/items/show/11086",
    pdfUrl: "https://clinton.presidentiallibraries.us/files/original/d608418938dde2f8864fcb1f0990857d.pdf",
    sourceNote:
      "The PDF text begins with A National Security Strategy of Engagement and Enlargement, The White House, February 1995, and includes the report's core strategy text.",
    collectionPages: 61,
    nssCrafting: true,
    topics: ["1995 NSS", "Speechwriting file", "Source copy", "Engagement and enlargement"]
  },
  {
    id: "nss-1995-samore-finding-aid",
    chapterId: "national-security-strategy",
    date: "1995-02-01",
    dateLabel: "1995",
    type: "Finding Aid Lead",
    status: "Public Finding Aid",
    priority: "Medium",
    themeId: "technology-control",
    title: "Gary Samore and Missile Technology Control Regime finding aid reference",
    summary:
      "A collection finding aid that names the 1995 National Security Strategy Report alongside nonproliferation, export-control, and MTCR material.",
    sourceName: "Clinton Digital Library item 100522",
    sourceUrl: "https://clinton.presidentiallibraries.us/items/show/100522",
    pdfUrl: "https://clinton.presidentiallibraries.us/files/original/3fa2b38bbb8a91b8c37e1938967cd43e.pdf",
    sourceNote:
      "The finding aid text identifies the 1995 National Security Strategy Report in a Samore/MTCR source context; use as a collection-level pointer, not a drafting file by itself.",
    collectionPages: 2,
    nssCrafting: true,
    topics: ["1995 NSS", "MTCR", "Nonproliferation", "Finding aid"]
  },
  {
    id: "published-nss-1996",
    chapterId: "national-security-strategy",
    date: "1996-02-01",
    dateLabel: "February 1996",
    type: "NSS Report",
    status: "Published NSS",
    priority: "High",
    themeId: "defense-strategy",
    title: "Published 1996 National Security Strategy",
    summary:
      "Third engagement-and-enlargement report; current public search did not identify a confirmed Clinton Library drafting packet.",
    sourceName: "Defense Historical Office NSS index",
    sourceUrl: "https://history.defense.gov/Portals/70/Documents/nss/nss1996.pdf",
    sourceNote:
      "Official published report anchor. Keep the chapter open for future MDR, FOIA, or NSC Records Management Office leads.",
    directives: [],
    topics: ["National Security Strategy", "Engagement and enlargement", "Published report", "Open drafting gap"]
  },
  {
    id: "published-nss-1997",
    chapterId: "national-security-strategy",
    date: "1997-05-01",
    dateLabel: "May 1997",
    type: "NSS Report",
    status: "Published NSS",
    priority: "High",
    themeId: "defense-strategy",
    title: "Published 1997 National Security Strategy",
    summary:
      "First Clinton NSS titled for a new century, and the report with the strongest public drafting-process trail in the current workspace.",
    sourceName: "Defense Historical Office NSS index",
    sourceUrl: "https://history.defense.gov/Portals/70/Documents/nss/nss1997.pdf",
    sourceNote:
      "Official published report anchor. Companion Clinton Library rows track the public drafting and communications-planning evidence.",
    directives: [],
    topics: ["1997 NSS", "A New Century", "Published report"]
  },
  {
    id: "nss-1997-kerrick-background-1",
    chapterId: "national-security-strategy",
    date: "1997-05-01",
    dateLabel: "1997",
    type: "Crafting Document",
    status: "Digitized Source",
    priority: "High",
    themeId: "defense-strategy",
    title: "Kerrick [General Donald L.] [1] - Background on the National Security Strategy",
    summary:
      "Key source copy with background on the NSS process, a 1997 report briefing section, developments considered in formulating the report, and notes on wording changes.",
    sourceName: "Clinton Digital Library item 11500",
    sourceUrl: "https://clinton.presidentiallibraries.us/items/show/11500",
    pdfUrl: "https://clinton.presidentiallibraries.us/files/original/e5348ad63baf5365f2f32012020397ad.pdf",
    sourceNote:
      "Text hits include Background on the National Security Strategy, The 1997 National Security Strategy Report, developments considered in formulating the strategy report, and notes that enlargement was subsumed under engagement.",
    collectionPages: 41,
    nssCrafting: true,
    topics: ["1997 NSS", "Drafting background", "Formulation", "Engagement", "Enlargement"]
  },
  {
    id: "nss-1997-kerrick-background-2",
    chapterId: "national-security-strategy",
    date: "1997-05-01",
    dateLabel: "1997",
    type: "Crafting Document",
    status: "Digitized Source",
    priority: "High",
    themeId: "defense-strategy",
    title: "Kerrick [General Donald L.] [2] - companion NSS background packet",
    summary:
      "Companion Kerrick packet with additional background on the annual report requirement, 1994 NSS goals, and 1997 strategy-report formulation.",
    sourceName: "Clinton Digital Library item 11501",
    sourceUrl: "https://clinton.presidentiallibraries.us/items/show/11501",
    pdfUrl: "https://clinton.presidentiallibraries.us/files/original/a49804b0b2e67a9ef7d26ed3538ac60b.pdf",
    sourceNote:
      "Text hits include the Goldwater-Nichols annual NSS requirement, 1994 engagement and enlargement goals, and developments considered in formulating the 1997 strategy report.",
    collectionPages: 56,
    nssCrafting: true,
    topics: ["1997 NSS", "Drafting background", "Goldwater-Nichols", "Formulation"]
  },
  {
    id: "nss-1997-communications-meeting",
    chapterId: "national-security-strategy",
    date: "1997-04-01",
    dateLabel: "April 1997",
    type: "Crafting Document",
    status: "Digitized Source",
    priority: "High",
    themeId: "defense-strategy",
    title: "Communications Meeting - National Security Strategy Report publication planning",
    summary:
      "Communications-planning record that describes the NSS report as an annual NSC exercise due for publication within the next 60 days.",
    sourceName: "Clinton Digital Library item 25861",
    sourceUrl: "https://clinton.presidentiallibraries.us/items/show/25861",
    pdfUrl: "https://clinton.presidentiallibraries.us/files/original/c3ae53f9c194c72e7f10f6d8ab2a0739.pdf",
    sourceNote:
      "The relevant line reads: National Security Strategy Report (April). Annual NSC exercise due for publication within next 60 days. Nothing new, but could be peg for an event if so desired.",
    collectionPages: 28,
    nssCrafting: true,
    topics: ["1997 NSS", "Communications planning", "NSC exercise", "Publication planning"]
  },
  {
    id: "nss-1997-foreign-policy-communications-copy",
    chapterId: "national-security-strategy",
    date: "1997-04-01",
    dateLabel: "April 1997",
    type: "Crafting Document",
    status: "Digitized Source",
    priority: "Medium",
    themeId: "defense-strategy",
    title: "Foreign Policy - duplicate communications-planning copy",
    summary:
      "Foreign policy speechwriting file with a copy of the same April planning language about the NSS report's publication window.",
    sourceName: "Clinton Digital Library item 34770",
    sourceUrl: "https://clinton.presidentiallibraries.us/items/show/34770",
    pdfUrl: "https://clinton.presidentiallibraries.us/files/original/df3b510c9d22780d696167772f4f210f.pdf",
    sourceNote:
      "The relevant lines match the Communications Meeting source: NSS Report due within the next 60 days and available as a possible peg for an event.",
    collectionPages: 60,
    nssCrafting: true,
    topics: ["1997 NSS", "Communications planning", "Speechwriting file", "Duplicate source copy"]
  },
  {
    id: "nss-1997-ideas-copy",
    chapterId: "national-security-strategy",
    date: "1997-04-01",
    dateLabel: "April 1997",
    type: "Crafting Document",
    status: "Digitized Source",
    priority: "Medium",
    themeId: "defense-strategy",
    title: "Ideas [1] - additional NSS publication-planning copy",
    summary:
      "Additional source copy with the same annual NSC exercise language for the 1997 NSS report.",
    sourceName: "Clinton Digital Library item 31393",
    sourceUrl: "https://clinton.presidentiallibraries.us/items/show/31393",
    pdfUrl: "https://clinton.presidentiallibraries.us/files/original/d3d31f1f495fb61b1057b9ac8d263330.pdf",
    sourceNote:
      "Text hit identifies the National Security Strategy Report as an annual NSC exercise due for publication within the next 60 days.",
    collectionPages: 152,
    nssCrafting: true,
    topics: ["1997 NSS", "Communications planning", "Duplicate source copy"]
  },
  {
    id: "published-nss-1998",
    chapterId: "national-security-strategy",
    date: "1998-10-01",
    dateLabel: "October 1998",
    type: "NSS Report",
    status: "Published NSS",
    priority: "High",
    themeId: "defense-strategy",
    title: "Published 1998 National Security Strategy",
    summary:
      "Second New Century NSS report; the public source trail includes a finding aid that explicitly locates draft material in NSC email accounts.",
    sourceName: "Defense Historical Office NSS index",
    sourceUrl: "https://history.defense.gov/Portals/70/Documents/nss/nss1998.pdf",
    sourceNote:
      "Official published report anchor. The Northern Ireland finding aid supplies the identified drafting lead.",
    topics: ["1998 NSS", "A New Century", "Published report"]
  },
  {
    id: "nss-1998-northern-ireland-drafts",
    chapterId: "national-security-strategy",
    date: "1998-10-01",
    dateLabel: "1998",
    type: "Finding Aid Lead",
    status: "Public Finding Aid",
    priority: "High",
    themeId: "defense-strategy",
    title: "Northern Ireland Peace Process finding aid - drafts of the 1998 NSS Report",
    summary:
      "Collection finding aid that explicitly identifies NSC email account material including press guidance and drafts of the 1998 National Security Strategy Report.",
    sourceName: "Clinton Digital Library item 48944",
    sourceUrl: "https://clinton.presidentiallibraries.us/items/show/48944",
    pdfUrl: "https://clinton.presidentiallibraries.us/files/original/8f41fe0ce742c0711a2545fa72a8206e.pdf",
    sourceNote:
      "The finding aid states that NSC account emails include, but are not limited to, press guidance and drafts of the 1998 National Security Strategy Report.",
    collectionPages: 17,
    nssCrafting: true,
    topics: ["1998 NSS", "Drafts", "NSC email", "Press guidance", "Northern Ireland"]
  },
  {
    id: "published-nss-1999",
    chapterId: "national-security-strategy",
    date: "1999-12-01",
    dateLabel: "December 1999",
    type: "NSS Report",
    status: "Published NSS",
    priority: "High",
    themeId: "defense-strategy",
    title: "Published 1999 National Security Strategy",
    summary:
      "Third New Century NSS report, transmitted at the end of 1999 and announced by a White House press-statement copy in the public files.",
    sourceName: "Defense Historical Office NSS index",
    sourceUrl: "https://history.defense.gov/Portals/70/Documents/nss/nss1999.pdf",
    sourceNote:
      "Official published report anchor. Clinton Digital Library rows provide release and preparation context.",
    topics: ["1999 NSS", "A New Century", "Published report"]
  },
  {
    id: "nss-1999-china-press-statement",
    chapterId: "national-security-strategy",
    date: "1999-12-01",
    dateLabel: "December 1999",
    type: "Release Context",
    status: "Digitized Source",
    priority: "Medium",
    themeId: "defense-strategy",
    title: "China II [1] - Press Secretary statement on 1999 NSS transmittal",
    summary:
      "Digitized source containing a White House Press Secretary statement announcing the 1999 NSS report and summarizing its three core objectives.",
    sourceName: "Clinton Digital Library item 11252",
    sourceUrl: "https://clinton.presidentiallibraries.us/items/show/11252",
    pdfUrl: "https://clinton.presidentiallibraries.us/files/original/43c33522fc2ac909a6291813583e67c2.pdf",
    sourceNote:
      "The source includes Statement by the Press Secretary: 1999 National Security Strategy Report, noting transmittal to Congress and the report title A National Security Strategy for a New Century.",
    collectionPages: 71,
    nssCrafting: true,
    topics: ["1999 NSS", "Press statement", "Transmittal", "A New Century"]
  },
  {
    id: "nss-1999-bouchard-preparation",
    chapterId: "national-security-strategy",
    date: "2000-01-13",
    dateLabel: "January 13, 2000",
    type: "Crafting Document",
    status: "Digitized Source",
    priority: "High",
    themeId: "defense-strategy",
    title: "SRB - Bouchard & Kelly - Joe Bouchard and annual NSS preparation",
    summary:
      "Speechwriting file in which Berger credits Joe Bouchard with preparing the annual National Security Strategy Report and getting it cleared.",
    sourceName: "Clinton Digital Library item 11385",
    sourceUrl: "https://clinton.presidentiallibraries.us/items/show/11385",
    pdfUrl: "https://clinton.presidentiallibraries.us/files/original/9e3c89ba61c383488d079045fdba4eea.pdf",
    sourceNote:
      "The source says Bouchard drew the assignment of preparing the annual National Security Strategy Report and that the latest report, just issued, reflected his insight, sweep, rigor, and clearance work.",
    collectionPages: 11,
    nssCrafting: true,
    topics: ["1999 NSS", "Joe Bouchard", "Samuel Berger", "Clearance", "Annual report"]
  },
  {
    id: "published-nss-2000",
    chapterId: "national-security-strategy",
    date: "2000-12-01",
    dateLabel: "December 2000",
    type: "NSS Report",
    status: "Published NSS",
    priority: "High",
    themeId: "defense-strategy",
    title: "Published 2000 National Security Strategy",
    summary:
      "Final Clinton NSS report, retitled for a global age and issued after the administration had recast engagement around globalization and transnational security.",
    sourceName: "Defense Historical Office NSS index",
    sourceUrl: "https://history.defense.gov/Portals/70/Documents/nss/nss2000.pdf",
    sourceNote:
      "Official published report anchor. Current public search did not locate a confirmed drafting packet; related late-2000 speechwriting files remain contextual leads.",
    topics: ["2000 NSS", "Global Age", "Published report", "Open drafting gap"]
  },
  {
    id: "nss-2000-military-reform-context",
    chapterId: "national-security-strategy",
    date: "2000-09-27",
    dateLabel: "September 27, 2000",
    type: "Context Lead",
    status: "Digitized Source",
    priority: "Medium",
    themeId: "preparedness",
    title: "Berger National Security [Military Reform] - NSS and military strategy context",
    summary:
      "Late-2000 speechwriting source with national security strategy and national military strategy language; included as context, not as a confirmed NSS drafting file.",
    sourceName: "Clinton Digital Library item 32500",
    sourceUrl: "https://clinton.presidentiallibraries.us/items/show/32500",
    pdfUrl: "https://clinton.presidentiallibraries.us/files/original/cc27ee87f33f25a45e534091c1f8b2b4.pdf",
    sourceNote:
      "Search hits discuss the national security strategy signed by the President, its relationship to military strategy, and full-spectrum crisis standards.",
    collectionPages: 129,
    nssCrafting: true,
    topics: ["2000 NSS", "Military reform", "Readiness", "Strategy context", "Global age"]
  }
];

const BMD_ABM_RECORDS = [
  {
    id: "bmd-abm-prd31-review",
    chapterId: "bmd-abm",
    date: "1993-04-26",
    dateLabel: "April 26, 1993",
    type: "Directive Source",
    status: "Released PRD",
    priority: "High",
    themeId: "risk-reduction",
    title: "PRD-31, Review of Ballistic Missile Defenses and the Future of the ABM Treaty",
    summary:
      "Launches the Clinton administration's formal review of ballistic missile defense policy and the future of the ABM Treaty after the end of the Cold War.",
    sourceName: "Clinton Library PRD-31",
    sourceUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/prd-31.pdf",
    pdfUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/prd-31.pdf",
    sourceNote:
      "Released PRD source. The Clinton Library directives page identifies PRD-31 as U.S. Policy on Ballistic Missile Defenses and the Future of the ABM Treaty, dated April 26, 1993.",
    collectionPages: 9,
    directives: ["PRD-31"],
    topics: ["Ballistic missile defense", "ABM Treaty", "Policy review", "Russia"]
  },
  {
    id: "bmd-abm-pdd17-decision",
    chapterId: "bmd-abm",
    date: "1993-12-11",
    dateLabel: "December 11, 1993",
    type: "Directive Source",
    status: "Released PDD",
    priority: "High",
    themeId: "risk-reduction",
    title: "PDD-17, Ballistic Missile Defenses and the ABM Treaty",
    summary:
      "Converts the PRD-31 review into presidential decision guidance on U.S. ballistic missile defenses and the treaty framework with Russia.",
    sourceName: "Clinton Library PDD-17",
    sourceUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-17.pdf",
    pdfUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-17.pdf",
    sourceNote:
      "Released PDD source. The Clinton Library directives page identifies PDD-17 as U.S. Policy on Ballistic Missile Defenses and the Future of the ABM Treaty, dated December 11, 1993.",
    collectionPages: 5,
    directives: ["PDD-17"],
    topics: ["Ballistic missile defense", "ABM Treaty", "Presidential decision", "Russia"]
  },
  {
    id: "bmd-abm-pdd30-nuclear-posture",
    chapterId: "bmd-abm",
    date: "1994-09-21",
    dateLabel: "September 21, 1994",
    type: "Directive Source",
    status: "Released PDD",
    priority: "Medium",
    themeId: "risk-reduction",
    title: "PDD-30, Nuclear Posture and Arms Control Beyond START I and START II",
    summary:
      "Places missile defense and ABM Treaty choices alongside the Nuclear Posture Review, START implementation, Nunn-Lugar threat reduction, and possible further strategic reductions.",
    sourceName: "Clinton Library PDD-30",
    sourceUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-30.pdf",
    pdfUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-30.pdf",
    sourceNote:
      "Released PDD source. The directive establishes U.S. nuclear posture and arms-control policy beyond START I and START II and explicitly ties the posture review to the July 1994 NSS.",
    collectionPages: 4,
    directives: ["PDD-30"],
    topics: ["Nuclear posture", "START", "Arms control", "Nunn-Lugar"]
  },
  {
    id: "bmd-abm-pdd66-start-iii",
    chapterId: "bmd-abm",
    date: "1998-08-17",
    dateLabel: "August 17, 1998",
    type: "Directive Source",
    status: "Released PDD",
    priority: "Medium",
    themeId: "risk-reduction",
    title: "PDD-66, START III Principles and Further Nuclear Reductions",
    summary:
      "Defines late-Clinton principles for further nuclear reductions with Russia, giving the chapter a bridge from ABM Treaty management to START III diplomacy.",
    sourceName: "Clinton Library PDD-66",
    sourceUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-66.pdf",
    pdfUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-66.pdf",
    sourceNote:
      "Released PDD source. The directive establishes principles and objectives for nuclear arms control with Russia and further reductions in or related to START III.",
    collectionPages: 7,
    directives: ["PDD-66"],
    topics: ["START III", "Russia", "Nuclear reductions", "Strategic stability"]
  },
  {
    id: "bmd-abm-jdec-shared-early-warning",
    chapterId: "bmd-abm",
    date: "1998-09-02",
    dateLabel: "1998-2000",
    type: "FOIA Collection",
    status: "Public Finding Aid",
    priority: "High",
    themeId: "risk-reduction",
    title: "Joint Data Exchange Center and Shared Early Warnings",
    summary:
      "A declassified-records collection for U.S.-Russian missile-launch warning cooperation, including JDEC and Shared Early Warning negotiations after the 1998 Moscow summit and the Y2K demonstration.",
    sourceName: "Clinton Library JDEC and Shared Early Warnings finding aid",
    sourceUrl:
      "https://www.clintonlibrary.gov/research/archives/finding-aids/joint-data-exchange-center-and-shared-early-warnings",
    sourceNote:
      "The finding aid describes 37 folders and approximately 3,564 pages of NSC memoranda, emails, drafts, reports, cables, press records, and interagency working-group materials; most responsive records remain closed for national security reasons.",
    collectionFolders: 37,
    collectionPages: 3564,
    directives: [],
    topics: ["JDEC", "Shared Early Warning", "Missile launch warning", "Russia", "Strategic stability"]
  },
  {
    id: "bmd-abm-drive-1993-treaty-compliance",
    chapterId: "bmd-abm",
    date: "1993-05-13",
    dateLabel: "May 13, 1993",
    type: "Drive Document",
    status: "Declassified Drive Source",
    priority: "Medium",
    themeId: "risk-reduction",
    title: "Clinton transmittal of the START treaty-compliance report",
    summary:
      "A Drive-held Clinton Library packet transmitting a treaty-compliance report to Congress under the START Resolution of Ratification, with ABM, SALT, INF, and START compliance treated as the inherited post-Soviet baseline.",
    sourceName: "Google Drive PDF 9302217",
    sourceUrl: "https://drive.google.com/file/d/1GYUkzmtbhpYDzN9_1V-HNWuMT_TFBNJI",
    sourceNote:
      "Drive search result for ABM Treaty. The packet includes Clinton letters to congressional leaders, Lake and ACDA memoranda, and an unclassified report on treaty compliance prepared by ACDA.",
    directives: [],
    topics: ["ABM Treaty", "START", "Treaty compliance", "ACDA", "Congress"]
  },
  {
    id: "bmd-abm-drive-1998-demarcation-compliance",
    chapterId: "bmd-abm",
    date: "1998-05-11",
    dateLabel: "May 11, 1998",
    type: "Drive Document",
    status: "Declassified Drive Source",
    priority: "High",
    themeId: "risk-reduction",
    title: "DoD planning for ABM Treaty demarcation and confidence-building compliance",
    summary:
      "Secretary of Defense guidance and staff papers on planning for U.S. compliance with the ABM Treaty agreed statements on demarcation and related confidence-building measures.",
    sourceName: "Google Drive PDF U06526",
    sourceUrl: "https://drive.google.com/file/d/1NWlAB83E6n9kwnKVAy4DbxyTs_kz3sXe",
    sourceNote:
      "Drive search result for ABM demarcation. The packet states that the September 26, 1997 agreements clarified the line between ABM systems and theater missile defense systems not subject to the treaty's central limits.",
    directives: [],
    topics: ["ABM Treaty", "Demarcation", "Theater missile defense", "Confidence-building measures", "DoD compliance"]
  },
  {
    id: "bmd-abm-drive-1999-sea-based-nmd",
    chapterId: "bmd-abm",
    date: "1999-08-10",
    dateLabel: "August 10, 1999",
    type: "Drive Document",
    status: "Declassified Drive Source",
    priority: "Medium",
    themeId: "defense-strategy",
    title: "DoD report to Congress on sea-based assets for National Missile Defense",
    summary:
      "A Secretary of Defense transmittal and unclassified BMDO summary on the utility of sea-based assets to NMD, giving the chapter a programmatic counterpart to the ABM Treaty diplomacy.",
    sourceName: "Google Drive PDF U12341",
    sourceUrl: "https://drive.google.com/file/d/1i1nV8FE5csLmwVQrApUD3YaqjzVeXjBK",
    sourceNote:
      "Drive search result for NMD. The report discusses the NMD mission, architecture, service roles, and sea-based options in response to a congressional reporting requirement.",
    directives: [],
    topics: ["National Missile Defense", "BMDO", "Sea-based assets", "Congress", "Program architecture"]
  },
  {
    id: "bmd-abm-drive-1999-roadmap-red-team",
    chapterId: "bmd-abm",
    date: "1999-08-11",
    dateLabel: "August 11, 1999",
    type: "Drive Document",
    status: "Declassified Drive Source",
    priority: "High",
    themeId: "risk-reduction",
    title: "NMD-ABM-START negotiating roadmap with Russia and red-team questions",
    summary:
      "Steven Andreasen's revised package for Sandy Berger on a Russia negotiating roadmap and red-team questions, placing NMD deployment, ABM Treaty adaptation, and START III in a single decision track.",
    sourceName: "Google Drive PDF 9906042",
    sourceUrl: "https://drive.google.com/file/d/10FP50JCN2oLJZnFll0kCAbqskFCTAoDz",
    sourceNote:
      "Drive search result for NMD ABM START. The packet shows NSC coordination with State and Defense before submission of the issue to the President in August 1999.",
    directives: [],
    topics: ["NMD", "ABM Treaty", "START III", "Russia", "NSC process"]
  },
  {
    id: "bmd-abm-drive-1999-small-group",
    chapterId: "bmd-abm",
    date: "1999-08-13",
    dateLabel: "August 13, 1999",
    type: "Drive Document",
    status: "Declassified Drive Source",
    priority: "High",
    themeId: "risk-reduction",
    title: "Small group meeting on NMD, ABM, and START",
    summary:
      "Andreasen's briefing memo for Berger before an August 16 small group meeting, framed around whether agencies could reach consensus on NMD, ABM Treaty, and START III options.",
    sourceName: "Google Drive PDF 9906160",
    sourceUrl: "https://drive.google.com/file/d/1i6jaU0MgKAEo7Sh1Vx3M66KSBLmib1ve",
    sourceNote:
      "Drive search result for NMD ABM START. The visible memo identifies Albright, Cohen, Shelton, Talbott, Holum, Bell, Binnendijk, Andreasen, Steinberg, and Fuerth as participants or principals in the decision process.",
    directives: [],
    topics: ["NMD", "ABM Treaty", "START III", "Principals", "NSC process"]
  },
  {
    id: "bmd-abm-drive-1999-consultations-framework",
    chapterId: "bmd-abm",
    date: "1999-09-02",
    dateLabel: "September 2, 1999",
    type: "Drive Document",
    status: "Declassified Drive Source",
    priority: "High",
    themeId: "risk-reduction",
    title: "Framework and core points for NMD-ABM-START consultations",
    summary:
      "Binnendijk and Andreasen's package for Berger mapping diplomatic and congressional consultations on the President's NMD, ABM, and START decisions.",
    sourceName: "Google Drive PDF 9906523",
    sourceUrl: "https://drive.google.com/file/d/1L2Har-P1VjR4Rh8hqCPKkygM2cIc4Hx4",
    sourceNote:
      "Drive search result for ABM Treaty and NMD. The framework lays out consultations with Russia, the UK, Denmark, France, Congress, NATO, China, key allies, Ukraine, Belarus, and Kazakhstan.",
    directives: [],
    topics: ["NMD", "ABM Treaty", "START III", "Russia", "Congress", "Allies"]
  },
  {
    id: "bmd-abm-drive-2000-talbott-primakov",
    chapterId: "bmd-abm",
    date: "2000-09-30",
    dateLabel: "September 30, 2000",
    type: "Drive Document",
    status: "Declassified Drive Source",
    priority: "High",
    themeId: "risk-reduction",
    title: "Talbott letter to Primakov on strategic defense and START III linkage",
    summary:
      "A declassified State cable transmitting Deputy Secretary Talbott's letter explaining why the United States linked START III discussions to strategic-defense and ABM Treaty adjustments after the emerging missile threat changed the strategic environment.",
    sourceName: "Google Drive PDF C06815185",
    sourceUrl: "https://drive.google.com/file/d/1Cc5cKs27dugY_wTyIKSeDEjTfizR5rLG",
    sourceNote:
      "Drive search result for NMD ABM START. The letter discusses the 1997 Helsinki START III framework, the 1998 Moscow summit, North Korea's Taepo Dong launch, and offense-defense linkage.",
    directives: [],
    topics: ["START III", "Strategic defense", "ABM Treaty", "Russia", "Talbott"]
  },
  {
    id: "bmd-abm-drive-2000-jdec-sergeyev",
    chapterId: "bmd-abm",
    date: "2000-10-30",
    dateLabel: "Late October 2000",
    type: "Drive Document",
    status: "Declassified Drive Source",
    priority: "High",
    themeId: "risk-reduction",
    title: "Cohen letter to Sergeyev on implementing the Joint Data Exchange Center",
    summary:
      "A Secretary of Defense letter to Russian Defense Minister Igor Sergeyev on unresolved legal, tax, customs, and liability issues affecting implementation of the JDEC early-warning information exchange.",
    sourceName: "Google Drive PDF U14650",
    sourceUrl: "https://drive.google.com/file/d/1QhATAqpgYxjXWXEuNcnFSu7NiIMmZe_w",
    sourceNote:
      "Drive search result for JDEC. The letter treats the JDEC as an exchange of early-warning information from U.S. and Russian radars and launch-detection satellites and connects implementation to CTR-style legal arrangements.",
    directives: [],
    topics: ["JDEC", "Shared Early Warning", "Missile launch warning", "Russia", "CTR"]
  }
];

const TECH_TRANSFER_RECORDS = [
  {
    id: "tech-transfer-prd8-nonproliferation-export-controls",
    chapterId: "tech-transfer",
    date: "1993-02-11",
    dateLabel: "1993",
    type: "Directive Source",
    status: "Released PRD",
    priority: "High",
    themeId: "technology-control",
    title: "PRD-8, U.S. Policy toward Nonproliferation and Export Controls",
    summary:
      "Early review directive anchoring the chapter's nonproliferation and export-control lane, where post-Cold War openness collided with the need to control dual-use technology.",
    sourceName: "Clinton Library PRD-8",
    sourceUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/research/prd-8.pdf",
    pdfUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/research/prd-8.pdf",
    sourceNote:
      "Released PRD source listed by the Clinton Library as U.S. Policy toward Nonproliferation and Export Controls.",
    directives: ["PRD-8"],
    topics: ["Nonproliferation", "Export controls", "Dual-use technology", "Post-Cold War policy"]
  },
  {
    id: "tech-transfer-pdd5-public-encryption",
    chapterId: "tech-transfer",
    date: "1993-04-15",
    dateLabel: "April 15, 1993",
    type: "Directive Source",
    status: "Released PDD",
    priority: "High",
    themeId: "technology-control",
    title: "PDD-5, Public Encryption Management",
    summary:
      "Decision directive on public encryption management, a core early-Clinton technology-transfer issue where commercial communications, law-enforcement access, intelligence equities, and export controls overlapped.",
    sourceName: "Clinton Library PDD-5",
    sourceUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-5.pdf",
    pdfUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-5.pdf",
    sourceNote:
      "Released PDD source listed by the Clinton Library as Public Encryption Management, dated April 15, 1993.",
    directives: ["PDD-5"],
    topics: ["Encryption", "Telecommunications", "Export controls", "Intelligence"]
  },
  {
    id: "tech-transfer-prd27-advanced-telecom-encryption",
    chapterId: "tech-transfer",
    date: "1993-04-16",
    dateLabel: "April 16, 1993",
    type: "Directive Source",
    status: "Released PRD",
    priority: "Medium",
    themeId: "technology-control",
    title: "PRD-27, Advanced Telecommunications and Encryption",
    summary:
      "Review directive for advanced telecommunications and encryption, pairing the encryption debate with the broader commercial communications infrastructure that made export control harder after the Cold War.",
    sourceName: "Clinton Library PRD-27",
    sourceUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/prd-27.pdf",
    pdfUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/prd-27.pdf",
    sourceNote:
      "Released PRD source listed by the Clinton Library as Advanced Telecommunications and Encryption, dated April 16, 1993.",
    directives: ["PRD-27"],
    topics: ["Advanced telecommunications", "Encryption", "Commercial technology", "Review process"]
  },
  {
    id: "tech-transfer-pdd23-remote-sensing",
    chapterId: "tech-transfer",
    date: "1994-03-09",
    dateLabel: "March 9, 1994",
    type: "Directive Source",
    status: "Released PDD",
    priority: "High",
    themeId: "technology-control",
    title: "PDD-23, Foreign Access to Remote Sensing Space Capabilities",
    summary:
      "Decision directive for commercial remote sensing, where U.S. industry access to foreign markets had to be balanced against national security, foreign policy, and imagery-control concerns.",
    sourceName: "Clinton Library PDD-23",
    sourceUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-23.pdf",
    pdfUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-23.pdf",
    sourceNote:
      "Released PDD source listed by the Clinton Library as U.S. Policy on Foreign Access to Remote Sensing Space Capabilities, dated March 9, 1994.",
    directives: ["PDD-23"],
    topics: ["Remote sensing", "Space policy", "Commercial imagery", "Export licensing"]
  },
  {
    id: "tech-transfer-prd45-arms-control-rd",
    chapterId: "tech-transfer",
    date: "1994-05-25",
    dateLabel: "May 25, 1994",
    type: "Directive Source",
    status: "Released PRD",
    priority: "Medium",
    themeId: "technology-control",
    title: "PRD-45, Coordination of Arms Control and Nonproliferation R&D",
    summary:
      "Review directive tying technology development to arms-control and nonproliferation goals, a bridge between research policy and strategic technology governance.",
    sourceName: "Clinton Library PRD-45",
    sourceUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/research/prd-45.pdf",
    pdfUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/research/prd-45.pdf",
    sourceNote:
      "Released PRD source listed by the Clinton Library as Coordination of Arms Control and Nonproliferation Research and Development, dated May 25, 1994.",
    directives: ["PRD-45"],
    topics: ["Arms control", "Nonproliferation R&D", "Technology governance", "Interagency coordination"]
  },
  {
    id: "tech-transfer-pdd34-conventional-arms-transfer",
    chapterId: "tech-transfer",
    date: "1995-02-10",
    dateLabel: "February 10, 1995",
    type: "Directive Source",
    status: "Released PDD",
    priority: "High",
    themeId: "technology-control",
    title: "PDD-34, U.S. Policy on Conventional Arms Transfer",
    summary:
      "Decision directive on conventional arms transfer policy, balancing restraint, regional stability, interoperability, and the U.S. defense industrial base after the Cold War arms market changed.",
    sourceName: "Clinton Library PDD-34",
    sourceUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-34.pdf",
    pdfUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-34.pdf",
    sourceNote:
      "Released PDD source. The directive text is dated February 10, 1995 and frames conventional arms transfer policy as both a national security and foreign policy tool.",
    directives: ["PDD-34"],
    topics: ["Conventional arms transfers", "Defense industrial base", "Regional security", "Export restraint"]
  },
  {
    id: "tech-transfer-pdd50-satellites-jet-engine",
    chapterId: "tech-transfer",
    date: "1996-10-12",
    dateLabel: "October 12, 1996",
    type: "Directive Source",
    status: "Released PDD",
    priority: "High",
    themeId: "technology-control",
    title: "PDD-50, Commercial Communications Satellites and Jet-Engine Hot-Section Technology",
    summary:
      "Decision directive on two signature dual-use export-control disputes: commercial communications satellites and jet-engine hot-section technology.",
    sourceName: "Clinton Library PDD-50",
    sourceUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-50.pdf",
    pdfUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-50.pdf",
    sourceNote:
      "Released PDD source listed by the Clinton Library as Commercial Communications Satellites and Jet-Engine Hot-Section Technology, dated October 12, 1996.",
    directives: ["PDD-50"],
    topics: ["Commercial satellites", "Jet-engine technology", "Dual-use exports", "Technology transfer"]
  },
  {
    id: "tech-transfer-drive-gc-st-working-group",
    chapterId: "tech-transfer",
    date: "1994-12-06",
    dateLabel: "December 6, 1994",
    type: "Drive Document",
    status: "Declassified Drive Source",
    priority: "High",
    themeId: "technology-control",
    title: "First Gore-Chernomyrdin S&T working group on sensitive cooperation",
    summary:
      "Unclassified Moscow cable on the first U.S.-Russia Working Group on General Problems of S&T Cooperation, showing technology transfer as a practical cooperation problem rather than a Cold War bloc-control problem.",
    sourceName: "Google Drive cable, Moscow 035094",
    sourceUrl: "https://drive.google.com/file/d/1MSB9yBgK13eqjF-sMlOEiV9tR-cPVzZZ",
    sourceNote:
      "Drive search result for technology transfer. The cable covers customs and taxes, intellectual property rights, sensitive facilities and regions, multiple-entry visas, operational contacts, and Russian insistence that dual-use project work be cleared for export-control requirements.",
    directives: [],
    topics: ["Gore-Chernomyrdin", "Russia", "Science and technology cooperation", "Dual-use technology", "Export controls"]
  },
  {
    id: "tech-transfer-drive-pdd23-implementation-guidance",
    chapterId: "tech-transfer",
    date: "1998-03-18",
    dateLabel: "March 18, 1998",
    type: "Drive Document",
    status: "Declassified Drive Source",
    priority: "High",
    themeId: "technology-control",
    title: "White House implementation guidance for NSC/PDD-23 remote sensing exports",
    summary:
      "Berger and Gibbons guidance on implementing PDD-23 for advanced remote sensing exports, including the standing interagency working group and government-to-government agreement questions.",
    sourceName: "Google Drive PDF W00303",
    sourceUrl: "https://drive.google.com/file/d/1AXuExRKsUYjzTIBPHoutAAC6VK8-e0iG",
    sourceNote:
      "Drive search result for remote sensing. The memorandum says PDD-23 supports U.S. industrial competitiveness while protecting national security and foreign policy interests, and creates an interagency process for export requests.",
    directives: ["PDD-23"],
    topics: ["Remote sensing", "Export licensing", "NSC implementation", "Commercial space"]
  },
  {
    id: "tech-transfer-drive-remote-sensing-mou",
    chapterId: "tech-transfer",
    date: "2000-01-10",
    dateLabel: "January 2000",
    type: "Drive Document",
    status: "Declassified Drive Source",
    priority: "High",
    themeId: "technology-control",
    title: "Interagency MOU on licensing private remote sensing satellite systems",
    summary:
      "DoD information memo and attached MOU/fact sheet on private remote sensing satellite licensing, including consultation procedures and interruption of normal commercial operations under PDD-23.",
    sourceName: "Google Drive PDF U01585",
    sourceUrl: "https://drive.google.com/file/d/1uMueH6sfbuAAdKIG_pFNtNGIjgSwzUAU",
    sourceNote:
      "Drive search result for remote sensing. The packet includes DOD, State, Commerce, Interior, and Intelligence Community procedures for licensing actions and possible limits on commercial operations.",
    directives: ["PDD-23"],
    topics: ["Remote sensing", "Satellite licensing", "Shutter control", "Commercial imagery", "Interagency process"]
  },
  {
    id: "tech-transfer-drive-satellite-export-licenses",
    chapterId: "tech-transfer",
    date: "1999-09-17",
    dateLabel: "September 17, 1999",
    type: "Drive Document",
    status: "Declassified Drive Source",
    priority: "High",
    themeId: "technology-control",
    title: "Satellite export licenses for launches in China and Russia",
    summary:
      "DoD update on export licenses and congressional waiver/notification actions for satellite exports for launch in China and Russia, including post-1998 legal certification requirements.",
    sourceName: "Google Drive PDF U14750",
    sourceUrl: "https://drive.google.com/file/d/13ZUVg-aUWs9wXHfrFR10LvxdewH1sI0X",
    sourceNote:
      "Drive search result for satellite export. The memo tracks State and Commerce license actions, Tiananmen sanctions waivers, and missile-technology certification requirements for China-related satellite exports.",
    directives: ["PDD-50"],
    topics: ["Commercial satellites", "China", "Russia", "Export licensing", "Congressional notification"]
  },
  {
    id: "tech-transfer-drive-commercial-satellite-congress",
    chapterId: "tech-transfer",
    date: "1998-08-21",
    dateLabel: "1998-2000",
    type: "Drive Document",
    status: "Declassified Drive Source",
    priority: "High",
    themeId: "technology-control",
    title: "Commercial satellite export controls, China investigations, and reform pressure",
    summary:
      "DoD congressional-correspondence packets on commercial communications satellite exports, Chinese technology-transfer concerns, and later export-control reform proposals.",
    sourceName: "Google Drive PDF U12605",
    sourceUrl: "https://drive.google.com/file/d/1Qf2jw9xHceTZik_ikMWqxfFZQnuQaZxf",
    sourceNote:
      "Drive search result for satellite export. The packet includes 1998 correspondence over Chinasat 8, Loral/Hughes-related assessments, comsat jurisdiction disputes, and a 2000 Gejdenson reform letter using commercial satellite technology as an example of overbroad regulation.",
    directives: ["PDD-50"],
    topics: ["Commercial satellites", "China", "Congress", "Loral/Hughes", "Export-control reform"]
  },
  {
    id: "tech-transfer-drive-dual-use-licensing-review",
    chapterId: "tech-transfer",
    date: "1999-06-18",
    dateLabel: "June 18, 1999",
    type: "Drive Document",
    status: "Declassified Drive Source",
    priority: "High",
    themeId: "technology-control",
    title: "Inspector General review of dual-use and munitions export licensing",
    summary:
      "DoD Inspector General executive summary from an interagency review of dual-use commodity and munitions export licensing after congressional concern over China and technology transfer.",
    sourceName: "Google Drive PDF U09846",
    sourceUrl: "https://drive.google.com/file/d/1b73oUBDG5srInPjaPdRrOmjykQs9TtPT",
    sourceNote:
      "Drive search result for encryption export. The review examined whether export licensing practices were consistent with national security and foreign policy objectives, including cumulative effects of technology transfers and DOD review processes.",
    directives: [],
    topics: ["Dual-use exports", "Munitions licensing", "Inspector General", "Technology transfer", "China"]
  },
  {
    id: "tech-transfer-drive-defense-trade-security-initiative",
    chapterId: "tech-transfer",
    date: "2000-06-01",
    dateLabel: "2000",
    type: "Drive Document",
    status: "Declassified Drive Source",
    priority: "Medium",
    themeId: "technology-control",
    title: "Defense Trade Security Initiative and allied ITAR exemptions",
    summary:
      "Secretary of Defense correspondence defending the Defense Trade Security Initiative as a post-Cold War adjustment to export controls for trusted allies while protecting advanced technology.",
    sourceName: "Google Drive PDF U09303",
    sourceUrl: "https://drive.google.com/file/d/1LYtIBzIDHfDY9U5lUrCQswf5dNajHo50",
    sourceNote:
      "Drive search result for Gejdenson export. The letters describe a proposed Canada-style ITAR exemption for the UK and Australia, reciprocal technology-security standards, re-transfer and end-use controls, and interoperability with close allies.",
    directives: [],
    topics: ["Defense Trade Security Initiative", "ITAR", "Allies", "Technology security", "Interoperability"]
  }
];

const Y2K_PLANNING_RECORDS = [
  {
    id: "y2k-eo13073-year-2000-conversion",
    chapterId: "y2k-planning",
    date: "1998-02-04",
    dateLabel: "February 4, 1998",
    type: "Executive Order",
    status: "Public Anchor",
    priority: "High",
    themeId: "preparedness",
    title: "Executive Order 13073, Year 2000 Conversion",
    summary:
      "Created the President's Council on Year 2000 Conversion and framed Y2K as a government-wide continuity, private-sector, state-local, tribal, and international coordination problem.",
    sourceName: "GovInfo EO 13073",
    sourceUrl:
      "https://www.govinfo.gov/content/pkg/CFR-1999-title3-vol1/pdf/CFR-1999-title3-vol1-eo13073.pdf",
    pdfUrl:
      "https://www.govinfo.gov/content/pkg/CFR-1999-title3-vol1/pdf/CFR-1999-title3-vol1-eo13073.pdf",
    sourceNote:
      "Official compiled executive order text. The National Archives disposition table lists EO 13073 as signed February 4, 1998 and published at 63 FR 6067 on February 6, 1998.",
    directives: ["EO 13073"],
    topics: ["Year 2000 conversion", "President's Council", "Federal continuity", "Critical systems", "International coordination"]
  },
  {
    id: "y2k-pdd63-critical-infrastructure",
    chapterId: "y2k-planning",
    date: "1998-05-22",
    dateLabel: "May 22, 1998",
    type: "Directive Source",
    status: "Released PDD",
    priority: "High",
    themeId: "preparedness",
    title: "PDD-63, Critical Infrastructure Protection",
    summary:
      "Decision directive establishing critical-infrastructure protection as a national-security mission, giving the Y2K chapter its broader resilience frame for telecommunications, energy, finance, transportation, emergency services, and government continuity.",
    sourceName: "Clinton Library PDD-63",
    sourceUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-63.pdf",
    pdfUrl: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-63.pdf",
    sourceNote:
      "Released PDD source. The Clinton Library administrative marker lists PDD-63 as May 20, 1998; the directive memorandum itself is dated May 22, 1998.",
    directives: ["PDD-63"],
    topics: ["Critical infrastructure", "Continuity", "Public-private coordination", "Information systems", "Preparedness"]
  },
  {
    id: "y2k-eo13127-information-coordination-center",
    chapterId: "y2k-planning",
    date: "1999-06-14",
    dateLabel: "June 14, 1999",
    type: "Executive Order",
    status: "Public Anchor",
    priority: "High",
    themeId: "preparedness",
    title: "Executive Order 13127 and the Y2K Information Coordination Center",
    summary:
      "Amended EO 13073 to create the Information Coordination Center in GSA, giving the President's Council a rollover-era mechanism for information sharing, emergency assessment, and reconstitution coordination.",
    sourceName: "GovInfo Federal Register PDF 99-15623",
    sourceUrl: "https://www.govinfo.gov/content/pkg/FR-1999-06-17/pdf/99-15623.pdf",
    pdfUrl: "https://www.govinfo.gov/content/pkg/FR-1999-06-17/pdf/99-15623.pdf",
    sourceNote:
      "Official Federal Register PDF for EO 13127, published June 17, 1999 at 64 FR 32793.",
    directives: ["EO 13127"],
    topics: ["Information Coordination Center", "GSA", "Emergency assessment", "Reconstitution", "Public-private coordination"]
  },
  {
    id: "y2k-drive-dod-six-month-update",
    chapterId: "y2k-planning",
    date: "1999-06-25",
    dateLabel: "June 25, 1999",
    type: "Drive Document",
    status: "Declassified Drive Source",
    priority: "High",
    themeId: "preparedness",
    title: "DoD Year 2000 six-month readiness update",
    summary:
      "Secretary of Defense memorandum convening a July 1999 review of DoD Y2K preparedness, with operational readiness, nuclear command and control, OSD functional areas, host-nation support, the Center for Strategic Stability, consequence management, and tabletop exercises on the agenda.",
    sourceName: "Google Drive PDF U09918",
    sourceUrl: "https://drive.google.com/file/d/1fL5j2m3myXOgK_oK-Hp_1dRfusc4QHcr",
    sourceNote:
      "Drive search result for Y2K. The memo identifies John Koskinen, Chair of the President's Council on Year 2000 Conversion, among the July 21 attendees and treats operational readiness as the principal DoD focus.",
    directives: [],
    topics: ["DoD readiness", "Operational preparedness", "Nuclear command and control", "Consequence management", "Tabletop exercises"]
  },
  {
    id: "y2k-drive-personnel-health-systems",
    chapterId: "y2k-planning",
    date: "1999-07-21",
    dateLabel: "July 21, 1999",
    type: "Drive Briefing",
    status: "Declassified Drive Source",
    priority: "Medium",
    themeId: "preparedness",
    title: "Personnel, TRICARE, and host-nation support Y2K readiness briefing",
    summary:
      "Under Secretary Rudy de Leon briefing on personnel and readiness systems, including mission-critical personnel functions, health systems, biomedical equipment, and host-nation support for possible noncombatant evacuation operations.",
    sourceName: "Google Drive PDF usdpr",
    sourceUrl: "https://drive.google.com/file/d/1A1SMy225U2UC4Oj6D8rwObSKIZW1XCAC",
    sourceNote:
      "Drive search result for Y2K. The briefing is titled Secretary's Briefing, 6 Months to Y2K, Mr. Rudy de Leon, Under Secretary (Personnel and Readiness), 21 July 1999.",
    directives: [],
    topics: ["Personnel readiness", "TRICARE", "Biomedical systems", "Host-nation support", "Noncombatant evacuation"]
  },
  {
    id: "y2k-drive-c3isr-space-nuclear-contingency",
    chapterId: "y2k-planning",
    date: "1999-07-27",
    dateLabel: "July 27, 1999",
    type: "Drive Briefing",
    status: "Declassified Drive Source",
    priority: "High",
    themeId: "technology-control",
    title: "C3ISR, space, and nuclear deterrence Y2K contingency planning",
    summary:
      "C3ISR and space briefing tracking 527 mission-critical systems and contingency planning for nuclear deterrence resources, DISA services, intelligence, space, weather, and GPS transition risks.",
    sourceName: "Google Drive PDF asdc3",
    sourceUrl: "https://drive.google.com/file/d/1mz2pRPwYoXnB3FxP2Kpo4Fn3HocfgBoy",
    sourceNote:
      "Drive search result for Y2K. The briefing references a June 16, 1999 draft DoD Y2K Operational Contingency Strategy for U.S. Nuclear Deterrence Resources and a Nuclear Operational Contingency Strategy Working Group.",
    directives: [],
    topics: ["C3ISR", "Space", "Nuclear deterrence", "GPS", "Mission-critical systems"]
  },
  {
    id: "y2k-drive-international-security-dimension",
    chapterId: "y2k-planning",
    date: "1999-09-20",
    dateLabel: "September 20, 1999",
    type: "Drive Report",
    status: "Declassified Drive Source",
    priority: "High",
    themeId: "risk-reduction",
    title: "Year 2000 International Security Dimension project report",
    summary:
      "Naval War College project summary for Secretary Cohen on global Y2K scenarios, treating social, political, religious, technological, and economic disruption as an international-security problem rather than a narrow federal IT repair task.",
    sourceName: "Google Drive PDF U15565",
    sourceUrl: "https://drive.google.com/file/d/1uHJj5fw1LhLVw_nFU5h4QVeFHEp7Jc-t",
    sourceNote:
      "Drive search result for Y2K. The packet includes a September 20, 1999 report summary transmitted under an October 6, 1999 letter to Jerry Hultin.",
    directives: [],
    topics: ["International security", "Global scenarios", "Risk assessment", "Transparency", "Consequence management"]
  },
  {
    id: "y2k-drive-cohen-sergeyev-center-arrangements",
    chapterId: "y2k-planning",
    date: "1999-12-01",
    dateLabel: "December 1999",
    type: "Drive Correspondence",
    status: "Declassified Drive Source",
    priority: "High",
    themeId: "risk-reduction",
    title: "Cohen-Sergeyev arrangements for the Joint Y2K Center for Strategic Stability",
    summary:
      "Secretary Cohen response to Russian Defense Minister Sergeyev on Russian participation in the Joint Y2K Center for Strategic Stability, including the legal limits on privileges and immunities and the plan for Russian personnel to begin work on December 22, 1999.",
    sourceName: "Google Drive PDF U18569",
    sourceUrl: "https://drive.google.com/file/d/1HZ3ta9Hu8ILFqqJ6eM4Uko_azLA_FI8U",
    sourceNote:
      "Drive search result for Joint Y2K Center. The correspondence followed an October 21, 1999 Russian letter and framed the center as a way to ensure a peaceful entry into the new millennium.",
    directives: [],
    topics: ["Joint Y2K Center", "Russia", "Strategic stability", "Missile warning", "Defense diplomacy"]
  },
  {
    id: "y2k-drive-center-strategic-stability-sitrep",
    chapterId: "y2k-planning",
    date: "2000-01-19",
    dateLabel: "January 19, 2000",
    type: "Drive Situation Report",
    status: "Declassified Drive Source",
    priority: "High",
    themeId: "risk-reduction",
    title: "Situation report on the Center for Year 2000 Strategic Stability",
    summary:
      "Post-rollover situation report on the jointly manned U.S.-Russian Y2K center at Peterson Air Force Base, covering Russian officer arrival, training, real-world launch observations, 24-hour operations beginning December 30, 1999, media attention, and the January 15 closeout.",
    sourceName: "Google Drive PDF U00975",
    sourceUrl: "https://drive.google.com/file/d/1TlAtguDOf7MHQYQFyMGv4jVMXo3SuAhM",
    sourceNote:
      "Drive search result for Joint Y2K Center Strategic Stability. The report says the rollover was a non-event for missile early warning and that the experience had value for the permanent Joint Warning Center in Moscow.",
    directives: [],
    topics: ["Peterson Air Force Base", "Joint Y2K Center", "Missile launch warning", "Russia", "Shared early warning"]
  },
  {
    id: "y2k-drive-shared-early-warning-lessons",
    chapterId: "y2k-planning",
    date: "2000-02-28",
    dateLabel: "February 28, 2000",
    type: "Drive Correspondence",
    status: "Declassified Drive Source",
    priority: "Medium",
    themeId: "risk-reduction",
    title: "Y2K strategic-stability lessons for shared early warning",
    summary:
      "Secretary Cohen transmittal to Sergeyev using the success of jointly manning the Center for Year 2000 Strategic Stability to push forward permanent Shared Early Warning and pre-launch notification arrangements.",
    sourceName: "Google Drive PDF U02212",
    sourceUrl: "https://drive.google.com/file/d/1N2iVz76pA_2ZMeqPFM91vJKHcTT1Z0yO",
    sourceNote:
      "Drive search result for Joint Y2K Center Strategic Stability. The packet links Y2K cooperation to the presidential initiative for sharing early-warning information on ballistic missile and space launches.",
    directives: [],
    topics: ["Shared Early Warning", "Pre-launch notification", "Joint Warning Center", "Russia", "Strategic stability"]
  }
];

const STROBE_FOIA_RECORDS = [
  {
    id: "strobe-1994-benign-respect-russia",
    chapterId: "national-security-strategy",
    date: "1994-03-28",
    dateLabel: "March 28, 1994",
    type: "State FOIA Source",
    status: "Public FOIA Source",
    priority: "High",
    themeId: "risk-reduction",
    title: "Whose Russia Is It Anyway? Toward a Policy of Benign Respect",
    summary:
      "Long Moscow cable on the conceptual problem of U.S. Russia policy early in the Clinton administration, useful for the NSS chronology's post-Soviet risk-reduction frame.",
    sourceName: "State FOIA C09000022",
    sourceUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Oct2024/FL-2017-13804/DOC_0C09000022/C09000022.pdf",
    pdfUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Oct2024/FL-2017-13804/DOC_0C09000022/C09000022.pdf",
    sourceNote:
      "Strobe Talbott FOIA manifest hit. The 15-section Moscow cable is titled around a policy of benign respect and should be reviewed as an early Russia-strategy candidate.",
    topics: ["Russia policy", "Post-Soviet strategy", "Moscow Embassy", "Risk reduction"]
  },
  {
    id: "strobe-1994-cnn-foreign-policy-strategy",
    chapterId: "national-security-strategy",
    date: "1994-05-02",
    dateLabel: "May 2, 1994",
    type: "State FOIA Source",
    status: "Public FOIA Source",
    priority: "High",
    themeId: "defense-strategy",
    title: "Talbott memo for Clinton's CNN foreign-policy appearance",
    summary:
      "Acting Secretary Talbott urged the President to use a CNN appearance to assert objectives, explain strategy, review accomplishments, and place U.S. policy in the post-Cold War transition.",
    sourceName: "State FOIA C09000058",
    sourceUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_May2022/FL-2017-13804/DOC_0C09000058/C09000058.pdf",
    pdfUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_May2022/FL-2017-13804/DOC_0C09000058/C09000058.pdf",
    sourceNote:
      "Strobe Talbott FOIA manifest hit. The memo is a public-facing strategy articulation lead rather than a formal NSS drafting record.",
    topics: ["Foreign policy strategy", "Public explanation", "Post-Cold War transition", "Presidential messaging"]
  },
  {
    id: "strobe-1995-russia-what-next",
    chapterId: "national-security-strategy",
    date: "1995-02-02",
    dateLabel: "February 2, 1995",
    type: "State FOIA Source",
    status: "Public FOIA Source",
    priority: "High",
    themeId: "risk-reduction",
    title: "Russia -- What Next?",
    summary:
      "Talbott eyes-only memorandum to Jim Collins on the next phase of Russia policy, including the need to rearticulate the administration's basic strategy after difficult first-term experience.",
    sourceName: "State FOIA C09000090",
    sourceUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Apr2023/FL-2017-13804/DOC_0C09000090/C09000090.pdf",
    pdfUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Apr2023/FL-2017-13804/DOC_0C09000090/C09000090.pdf",
    sourceNote:
      "Strobe Talbott FOIA manifest hit. The record should be compared against the February 1995 NSS and the broader Russia-policy files.",
    topics: ["Russia policy", "Strategy articulation", "Talbott", "Jim Collins", "1995 NSS context"]
  },
  {
    id: "strobe-1998-russia-policy-dialogue",
    chapterId: "national-security-strategy",
    date: "1998-01-07",
    dateLabel: "January 7, 1998",
    type: "State FOIA Source",
    status: "Public FOIA Source",
    priority: "Medium",
    themeId: "risk-reduction",
    title: "Continuing Our Dialogue on Russia Policy",
    summary:
      "Policy Planning memorandum to Talbott on how to frame first-tier priorities and the centrality of the U.S.-Russian relationship in Secretary Albright's agenda.",
    sourceName: "State FOIA C09000034",
    sourceUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Mar2025/FL-2017-13804/DOC_0C09000034/C09000034.pdf",
    pdfUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Mar2025/FL-2017-13804/DOC_0C09000034/C09000034.pdf",
    sourceNote:
      "Strobe Talbott FOIA manifest hit. The memo is a late-1990s Russia-policy framing lead, not a formal NSS drafting record.",
    topics: ["Russia policy", "Policy Planning", "Albright", "Strategic priorities"]
  },
  {
    id: "strobe-1998-moscow-summit-high-concept",
    chapterId: "national-security-strategy",
    date: "1998-08-19",
    dateLabel: "August 19, 1998",
    type: "State FOIA Source",
    status: "Public FOIA Source",
    priority: "High",
    themeId: "risk-reduction",
    title: "High-concept paper for Clinton's Moscow summit strategy",
    summary:
      "Talbott note calling for a paper that put the Moscow summit objectives in the context of long-term U.S. strategy toward Russia while balancing the financial crisis agenda against broader strategic goals.",
    sourceName: "State FOIA C09000008",
    sourceUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_July2023/FL-2017-13804/DOC_0C09000008/C09000008.pdf",
    pdfUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_July2023/FL-2017-13804/DOC_0C09000008/C09000008.pdf",
    sourceNote:
      "The manifest title/date says August 19, 1988, but the extracted source text dates the note Wednesday, August 19, 1998 and ties it to the Clinton-Yeltsin Moscow summit.",
    topics: ["Moscow summit", "Russia strategy", "Financial crisis", "Clinton-Yeltsin"]
  },
  {
    id: "strobe-1997-russia-iran-missile-proliferation-talks",
    chapterId: "tech-transfer",
    date: "1997-08-07",
    dateLabel: "August 7, 1997",
    type: "State FOIA Source",
    status: "Public FOIA Source",
    priority: "High",
    themeId: "technology-control",
    title: "First day of U.S.-Russian missile proliferation talks",
    summary:
      "Moscow reporting on talks with Koptev and Mamedov over Russian assistance to Iran's missile program, placing technology transfer and nonproliferation inside the U.S.-Russia diplomatic channel.",
    sourceName: "State FOIA C09000036",
    sourceUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Apr2024/FL-2017-13804/DOC_0C09000036/C09000036.pdf",
    pdfUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Apr2024/FL-2017-13804/DOC_0C09000036/C09000036.pdf",
    sourceNote:
      "Strobe Talbott FOIA manifest hit for Russia-Iran missile proliferation and sensitive technology transfer.",
    topics: ["Russia-Iran", "Missile proliferation", "Technology transfer", "Mamedov", "Nonproliferation"]
  },
  {
    id: "strobe-1997-fsb-director-iran-missile-cooperation",
    chapterId: "tech-transfer",
    date: "1997-12-08",
    dateLabel: "December 8, 1997",
    type: "State FOIA Source",
    status: "Public FOIA Source",
    priority: "Medium",
    themeId: "technology-control",
    title: "Ambassador Collins meeting with FSB director on Iran",
    summary:
      "Embassy Moscow cable on Russian-Iranian missile cooperation, with distribution to senior State, NSC, nonproliferation, and Russia-policy officials.",
    sourceName: "State FOIA C09000054",
    sourceUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Mar2025/FL-2017-13804/DOC_0C09000054/C09000054.pdf",
    pdfUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Mar2025/FL-2017-13804/DOC_0C09000054/C09000054.pdf",
    sourceNote:
      "Strobe Talbott FOIA manifest hit. Use as a supporting source for Russian entity controls and Iran missile-cooperation diplomacy.",
    topics: ["Russia-Iran", "Missile technology", "FSB", "Embassy Moscow", "Export controls"]
  },
  {
    id: "strobe-1998-russia-iran-action-plan",
    chapterId: "tech-transfer",
    date: "1998-11-04",
    dateLabel: "November 4, 1998",
    type: "State FOIA Source",
    status: "Public FOIA Source",
    priority: "High",
    themeId: "technology-control",
    title: "Interagency Russia-Iran action plan on missile and nuclear cooperation",
    summary:
      "Policy Steering Group materials tied commercial satellite launch quotas, space-project licenses, trade actions, and nuclear-cooperation programs to Russian steps against missile and nuclear cooperation with Iran.",
    sourceName: "State FOIA C09000019",
    sourceUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Mar2025/FL-2017-13804/DOC_0C09000019/C09000019.pdf",
    pdfUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Mar2025/FL-2017-13804/DOC_0C09000019/C09000019.pdf",
    sourceNote:
      "Strobe Talbott FOIA manifest hit. Strong technology-transfer candidate because it links space launch access, export licensing, and nonproliferation sanctions leverage.",
    topics: ["Russia-Iran", "Commercial satellites", "Export licensing", "Missile technology", "Nuclear cooperation"]
  },
  {
    id: "strobe-2000-berger-putin-nmd-abm-start-script",
    chapterId: "bmd-abm",
    date: "2000-05-15",
    dateLabel: "May 15, 2000",
    type: "State FOIA Source",
    status: "Public FOIA Source",
    priority: "High",
    themeId: "risk-reduction",
    title: "Berger NMD/ABM/START script for meeting with President Putin",
    summary:
      "Talking script for Sandy Berger to press Putin on limited national missile defense, ABM Treaty adaptation, and START III as one linked strategic-stability package before the Moscow summit.",
    sourceName: "State FOIA C09000043",
    sourceUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Mar2025/FL-2017-13804/DOC_0C09000043/C09000043.pdf",
    pdfUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Mar2025/FL-2017-13804/DOC_0C09000043/C09000043.pdf",
    sourceNote:
      "Strobe Talbott FOIA manifest hit. The script links NMD deployment timing, new missile threats, Russian START II ratification, START III, and an adapted ABM Treaty.",
    topics: ["NMD", "ABM Treaty", "START III", "Putin", "Strategic stability"]
  },
  {
    id: "strobe-2000-talbott-berger-path-forward",
    chapterId: "bmd-abm",
    date: "2000-05-25",
    dateLabel: "May 25, 2000",
    type: "State FOIA Source",
    status: "Public FOIA Source",
    priority: "High",
    themeId: "risk-reduction",
    title: "Talbott to Berger on the NMD-ABM-START path forward",
    summary:
      "Urgent Talbott letter after talks with Mamedov, asking that a Clinton letter go to Putin and describing the legal and diplomatic path to preserve strategic stability, strengthen the ABM Treaty, and move START III forward.",
    sourceName: "State FOIA C09000004",
    sourceUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Mar2025/FL-2017-13804/DOC_0C09000004/C09000004.pdf",
    pdfUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Mar2025/FL-2017-13804/DOC_0C09000004/C09000004.pdf",
    sourceNote:
      "Strobe Talbott FOIA manifest hit. The record captures the confidential Talbott-Mamedov channel immediately before the June 2000 Moscow summit.",
    topics: ["NMD", "ABM Treaty", "START III", "Mamedov", "Putin"]
  },
  {
    id: "strobe-2000-shemya-abm-radar-legal",
    chapterId: "bmd-abm",
    date: "2000-05-25",
    dateLabel: "May 25, 2000",
    type: "State FOIA Source",
    status: "Public FOIA Source",
    priority: "High",
    themeId: "risk-reduction",
    title: "Legal analysis of Shemya ABM radar construction and treaty violation",
    summary:
      "Deliberative legal paper asking when activity associated with constructing an ABM radar at Shemya would put the United States in violation of the ABM Treaty.",
    sourceName: "State FOIA C09000044",
    sourceUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Mar2025/FL-2017-13804/DOC_0C09000044/C09000044.pdf",
    pdfUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Mar2025/FL-2017-13804/DOC_0C09000044/C09000044.pdf",
    sourceNote:
      "Strobe Talbott FOIA manifest hit. The paper focuses on the treaty meaning of an ABM radar being under construction and the 1974/1976 dismantling procedures by analogy.",
    topics: ["Shemya", "ABM Treaty", "Legal analysis", "NMD", "Treaty compliance"]
  },
  {
    id: "strobe-2000-start-iii-basic-elements",
    chapterId: "bmd-abm",
    date: "2000-05-27",
    dateLabel: "May 27, 2000",
    type: "State FOIA Source",
    status: "Public FOIA Source",
    priority: "Medium",
    themeId: "risk-reduction",
    title: "Basic Elements of a START III Agreement",
    summary:
      "Compact START III elements paper with proposed 2,000-2,500 strategic nuclear warhead levels, verification, transparency, Presidential Nuclear Initiatives, and warhead-facility conversion measures.",
    sourceName: "State FOIA C09000005",
    sourceUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Mar2025/FL-2017-13804/DOC_0C09000005/C09000005.pdf",
    pdfUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Mar2025/FL-2017-13804/DOC_0C09000005/C09000005.pdf",
    sourceNote:
      "Strobe Talbott FOIA manifest hit. Use as a bridge record between NMD/ABM diplomacy and the strategic nuclear reductions track.",
    topics: ["START III", "Nuclear reductions", "Verification", "Warhead transparency", "Strategic stability"]
  },
  {
    id: "strobe-2000-strategic-stability-joint-statement",
    chapterId: "bmd-abm",
    date: "2000-06-04",
    dateLabel: "June 4, 2000",
    type: "State FOIA Source",
    status: "Public FOIA Source",
    priority: "High",
    themeId: "risk-reduction",
    title: "Clinton-Putin joint statement on principles of strategic stability",
    summary:
      "Summit statement reaffirming strategic nuclear stability, the ABM Treaty as a cornerstone of strategic stability, intensified START III and ABM discussions, and mutual attention to new WMD and missile threats.",
    sourceName: "State FOIA C09000055",
    sourceUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Oct2024/FL-2017-13804/DOC_0C09000055/C09000055.pdf",
    pdfUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_Oct2024/FL-2017-13804/DOC_0C09000055/C09000055.pdf",
    sourceNote:
      "Strobe Talbott FOIA manifest hit. This is the public summit output against which the preparatory NMD/ABM/START records should be sequenced.",
    topics: ["Clinton-Putin", "Strategic stability", "ABM Treaty", "START III", "Missile threats"]
  },
  {
    id: "strobe-2000-nac-moscow-summit-briefing",
    chapterId: "bmd-abm",
    date: "2000-06-08",
    dateLabel: "June 8, 2000",
    type: "State FOIA Source",
    status: "Public FOIA Source",
    priority: "Medium",
    themeId: "risk-reduction",
    title: "Talbott briefing to the North Atlantic Council on the Moscow summit",
    summary:
      "Talbott briefed NATO allies on the Moscow summit, focusing on National Missile Defense and the ABM Treaty, the strategic-stability statement, allied questions, and the remaining difficulty of concrete ABM Treaty amendments.",
    sourceName: "State FOIA C09000063",
    sourceUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_July2022/FL-2017-13804/DOC_0C09000063/C09000063.pdf",
    pdfUrl: "https://foia.state.gov/DOCUMENTS/FOIA_L_July2022/FL-2017-13804/DOC_0C09000063/C09000063.pdf",
    sourceNote:
      "Strobe Talbott FOIA manifest hit. This record adds the allied consultation layer after the Clinton-Putin Moscow summit.",
    topics: ["NATO", "NMD", "ABM Treaty", "Moscow summit", "Allied consultations"]
  }
];

window.NSP_THEMES = [
  {
    id: "defense-strategy",
    number: 1,
    original: "Defense Policy and Strategic Planning",
    title: "Defense Policy and Strategic Planning",
    shortTitle: "Strategy",
    adaptation:
      "Moves from Cold War modernization debates to post-Cold War force planning, budgets, NSC process, peace operations, and the role of alliances in regional contingencies.",
    selectionQuestion:
      "Which records show how the Clinton team defined national security strategy after containment no longer supplied the organizing premise?"
  },
  {
    id: "risk-reduction",
    number: 2,
    original: "Soviet Analysis and Risk Reduction",
    title: "Post-Soviet and Transnational Risk Reduction",
    shortTitle: "Risk",
    adaptation:
      "Keeps the risk-reduction core but widens it beyond Soviet analysis to Russia, Ukraine, arms control, nuclear safety, counterterrorism, organized crime, and unconventional threats.",
    selectionQuestion:
      "Which records reveal the shift from adversary analysis to managing diffuse, cooperative, and transnational security risks?"
  },
  {
    id: "technology-control",
    number: 3,
    original: "The Strategic Stockpile, Machine Tools, and Export Control",
    title: "Strategic Technology, Stockpile, and Export Control",
    shortTitle: "Technology",
    adaptation:
      "Updates the industrial-control lane for stockpile stewardship, CTBT politics, nonproliferation, encryption, remote sensing, space policy, commercial satellites, and dual-use technology.",
    selectionQuestion:
      "Which records show how strategic advantage moved from Cold War production controls toward science, technology, and proliferation governance?"
  },
  {
    id: "preparedness",
    number: 4,
    original: "National Security and Defense Preparedness",
    title: "National Security and Defense Preparedness",
    shortTitle: "Preparedness",
    adaptation:
      "Retains the preparedness lane for readiness, continuity, crisis management, critical infrastructure, complex contingencies, port security, and protection against unconventional threats.",
    selectionQuestion:
      "Which records show how the administration prepared institutions for security problems that crossed military, diplomatic, domestic, and technological boundaries?"
  }
];

window.NSP_SOURCES = [
  {
    label: "FRUS 1993-2000 Volume VI status page",
    url: "https://history.state.gov/historicaldocuments/frus1993-00v06",
    note: "Official Office of the Historian planned-volume anchor."
  },
  {
    label: "Reagan NSP Volume XLIV Part 1 preface",
    url: "https://history.state.gov/historicaldocuments/frus1981-88v44p1/preface",
    note: "Source for the four-part NSP framework used as the model."
  },
  {
    label: "Clinton Library Presidential Directives",
    url: "https://www.clintonlibrary.gov/research/presidential-directives",
    note: "Official PRD/PDD list and directive-system explanation."
  },
  {
    label: "Clinton Library Declassified Records",
    url: "https://www.clintonlibrary.gov/research/declassified-records",
    note: "Portal for MDR collections, memcons/telcons, and PDD/PRD releases."
  },
  {
    label: "Clinton Library Digital Records search",
    url: "https://www.clintonlibrary.gov/research/search-digitized-records",
    note: "Search entry point for digitized finding aids and released records."
  },
  {
    label: "Strobe Talbott FOIA Case F-2017-13804 manifest",
    url: "https://therealjameswilson.github.io/strobe-talbott-foia/manifest.html",
    note: "Research portal listing 1,474 State Department FOIA records with direct links to the source PDFs."
  },
  {
    label: "Strobe Talbott FOIA enriched manifest CSV",
    url: "https://therealjameswilson.github.io/strobe-talbott-foia/data/manifest_enriched.csv",
    note: "Manifest metadata and extracted descriptions used to identify NSP-relevant public FOIA records."
  },
  {
    label: "2013-0185-M NSC folder-title list",
    url:
      "https://www.clintonlibrary.gov/research/archives/finding-aids/declassified-folder-title-list-national-security-council",
    note: "Current Clinton Library page for the declassified National Security Council folder-title list used by the collection inventory."
  },
  {
    label: "2013-0185-M PDF",
    url: "https://www.clintonlibrary.gov/sites/default/files/finding_aids_a_z/2026-04/2013-0185-M.pdf",
    note: "Direct 1,290-page PDF for the declassified NSC folder-title list."
  },
  {
    label: "Clinton Digital Library National Security Council collection",
    url: "https://clinton.presidentiallibraries.us/collections/show/27",
    note: "Collection overview for Clinton NSC office collections in the Digital Library."
  },
  {
    label: "Clinton Digital Library PDD collection overview",
    url: "https://clinton.presidentiallibraries.us/collections/show/40",
    note: "Collection overview for Office of Records Management - Presidential Decision Directives."
  },
  {
    label: "Clinton Digital Library Declassified Documents collection",
    url: "https://clinton.presidentiallibraries.us/collections/show/36",
    note: "Digital Library collection of declassified records, primarily foreign-affairs records released through MDR requests."
  },
  {
    label: "PDD-25 finding aid",
    url: "https://www.clintonlibrary.gov/research/archives/finding-aids/presidential-decision-directive-25",
    note: "Public finding aid for peace operations records."
  },
  {
    label: "Nuclear Testing and Comprehensive Test Ban finding aid",
    url: "https://www.clintonlibrary.gov/research/archives/finding-aids/nuclear-testing-and-comprehensive-test-ban",
    note: "Public finding aid for PRD-19, PDD-11, CTBT, and nuclear testing records."
  },
  {
    label: "National Space Policy PDD-49 finding aid",
    url: "https://www.clintonlibrary.gov/research/archives/finding-aids/national-space-policy-pdd-49",
    note: "Public finding aid for PDD-49 and post-Cold War space policy records."
  },
  {
    label: "PRD-8 nonproliferation and export controls",
    url: "https://www.clintonlibrary.gov/sites/default/files/documents/research/prd-8.pdf",
    note: "Released directive source for the chapter's nonproliferation and dual-use export-control lane."
  },
  {
    label: "PDD-5 public encryption management",
    url: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-5.pdf",
    note: "Released decision directive source for encryption policy."
  },
  {
    label: "PDD-23 remote sensing space capabilities",
    url: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-23.pdf",
    note: "Released decision directive source for foreign access to remote sensing space capabilities."
  },
  {
    label: "PDD-34 conventional arms transfer",
    url: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-34.pdf",
    note: "Released decision directive source for post-Cold War conventional arms transfer policy."
  },
  {
    label: "PDD-50 commercial satellites and jet-engine hot-section technology",
    url: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-50.pdf",
    note: "Released decision directive source for commercial satellite and jet-engine hot-section technology-transfer questions."
  },
  {
    label: "PDD-56 white paper",
    url: "https://clintonwhitehouse4.archives.gov/WH/EOP/NSC/html/documents/NSCDoc2.html",
    note: "Archived White House statement on managing complex contingency operations."
  },
  {
    label: "Defense Historical Office NSS index",
    url: "https://history.defense.gov/Historical-Sources/National-Security-Strategy/lang/en/",
    note: "Official index for published National Security Strategy reports."
  },
  {
    label: "Clinton Digital Library NSS report search",
    url: "https://clinton.presidentiallibraries.us/solr-search?q=%22National%20Security%20Strategy%20Report%22",
    note: "Search trail used to identify public source copies and drafting-process leads."
  },
  {
    label: "PRD-31 ballistic missile defense review",
    url: "https://www.clintonlibrary.gov/sites/default/files/documents/prd-31.pdf",
    note: "Released directive source for the 1993 BMD and ABM Treaty policy review."
  },
  {
    label: "PDD-17 ballistic missile defenses and ABM Treaty",
    url: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-17.pdf",
    note: "Released decision directive source for U.S. BMD policy and the future of the ABM Treaty."
  },
  {
    label: "PDD-30 nuclear posture and post-START II arms control",
    url: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-30.pdf",
    note: "Released decision directive source connecting nuclear posture, START implementation, and further arms-control options."
  },
  {
    label: "PDD-66 START III reductions",
    url: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-66.pdf",
    note: "Released decision directive source for late-Clinton nuclear reductions in or related to START III."
  },
  {
    label: "Joint Data Exchange Center and Shared Early Warnings finding aid",
    url:
      "https://www.clintonlibrary.gov/research/archives/finding-aids/joint-data-exchange-center-and-shared-early-warnings",
    note: "Public finding aid for U.S.-Russian missile-launch warning cooperation records."
  },
  {
    label: "Google Drive ABM demarcation compliance packet",
    url: "https://drive.google.com/file/d/1NWlAB83E6n9kwnKVAy4DbxyTs_kz3sXe",
    note: "Drive-held declassified DoD packet on ABM/TMD demarcation and confidence-building compliance."
  },
  {
    label: "Google Drive NMD-ABM-START consultation package",
    url: "https://drive.google.com/file/d/1L2Har-P1VjR4Rh8hqCPKkygM2cIc4Hx4",
    note: "Drive-held declassified NSC package on 1999 diplomatic and congressional consultations."
  },
  {
    label: "Google Drive Talbott-Primakov strategic-defense linkage letter",
    url: "https://drive.google.com/file/d/1Cc5cKs27dugY_wTyIKSeDEjTfizR5rLG",
    note: "Drive-held declassified State cable on offense-defense linkage, START III, and ABM Treaty adjustment."
  },
  {
    label: "Google Drive JDEC implementation letter",
    url: "https://drive.google.com/file/d/1QhATAqpgYxjXWXEuNcnFSu7NiIMmZe_w",
    note: "Drive-held declassified Secretary of Defense letter on Joint Data Exchange Center implementation."
  },
  {
    label: "Google Drive Gore-Chernomyrdin S&T working group cable",
    url: "https://drive.google.com/file/d/1MSB9yBgK13eqjF-sMlOEiV9tR-cPVzZZ",
    note: "Drive-held declassified cable on U.S.-Russian S&T cooperation, sensitive access, intellectual property, and dual-use export-control clearance."
  },
  {
    label: "Google Drive PDD-23 remote sensing implementation guidance",
    url: "https://drive.google.com/file/d/1AXuExRKsUYjzTIBPHoutAAC6VK8-e0iG",
    note: "Drive-held White House guidance on implementing PDD-23 for advanced remote sensing exports."
  },
  {
    label: "Google Drive private remote sensing licensing MOU",
    url: "https://drive.google.com/file/d/1uMueH6sfbuAAdKIG_pFNtNGIjgSwzUAU",
    note: "Drive-held interagency MOU packet on licensing private remote sensing satellite systems."
  },
  {
    label: "Google Drive satellite export license update",
    url: "https://drive.google.com/file/d/13ZUVg-aUWs9wXHfrFR10LvxdewH1sI0X",
    note: "Drive-held DoD update on satellite export licenses for launches in China and Russia."
  },
  {
    label: "Google Drive commercial satellite export-control packet",
    url: "https://drive.google.com/file/d/1Qf2jw9xHceTZik_ikMWqxfFZQnuQaZxf",
    note: "Drive-held congressional-correspondence packet on commercial communications satellite exports and export-control reform."
  },
  {
    label: "Google Drive dual-use and munitions licensing review",
    url: "https://drive.google.com/file/d/1b73oUBDG5srInPjaPdRrOmjykQs9TtPT",
    note: "Drive-held DoD Inspector General review of export licensing for dual-use commodities and munitions."
  },
  {
    label: "Google Drive Defense Trade Security Initiative packet",
    url: "https://drive.google.com/file/d/1LYtIBzIDHfDY9U5lUrCQswf5dNajHo50",
    note: "Drive-held Secretary of Defense correspondence on allied technology-security agreements and ITAR exemptions."
  },
  {
    label: "GovInfo EO 13073 Year 2000 Conversion",
    url:
      "https://www.govinfo.gov/content/pkg/CFR-1999-title3-vol1/pdf/CFR-1999-title3-vol1-eo13073.pdf",
    note: "Official compiled text of the executive order establishing the President's Council on Year 2000 Conversion."
  },
  {
    label: "GovInfo EO 13127 Y2K Information Coordination Center",
    url: "https://www.govinfo.gov/content/pkg/FR-1999-06-17/pdf/99-15623.pdf",
    note: "Official Federal Register PDF creating the Y2K Information Coordination Center by amending EO 13073."
  },
  {
    label: "PDD-63 critical infrastructure protection",
    url: "https://www.clintonlibrary.gov/sites/default/files/documents/pdd-63.pdf",
    note: "Released decision directive source for critical infrastructure protection and continuity."
  },
  {
    label: "Google Drive DoD Year 2000 six-month update",
    url: "https://drive.google.com/file/d/1fL5j2m3myXOgK_oK-Hp_1dRfusc4QHcr",
    note: "Drive-held Secretary of Defense memorandum and agenda for the July 1999 Y2K readiness review."
  },
  {
    label: "Google Drive Personnel and Readiness six-month Y2K briefing",
    url: "https://drive.google.com/file/d/1A1SMy225U2UC4Oj6D8rwObSKIZW1XCAC",
    note: "Drive-held briefing on personnel systems, TRICARE, biomedical equipment, and host-nation support."
  },
  {
    label: "Google Drive C3ISR and Space Y2K briefing",
    url: "https://drive.google.com/file/d/1mz2pRPwYoXnB3FxP2Kpo4Fn3HocfgBoy",
    note: "Drive-held briefing on mission-critical C3ISR, space, GPS, and nuclear deterrence contingency planning."
  },
  {
    label: "Google Drive Year 2000 International Security Dimension report",
    url: "https://drive.google.com/file/d/1uHJj5fw1LhLVw_nFU5h4QVeFHEp7Jc-t",
    note: "Drive-held Naval War College project report summary on international Y2K security risks."
  },
  {
    label: "Google Drive Joint Y2K Center arrangements correspondence",
    url: "https://drive.google.com/file/d/1HZ3ta9Hu8ILFqqJ6eM4Uko_azLA_FI8U",
    note: "Drive-held Cohen-Sergeyev correspondence on Russian personnel arrangements for the Joint Y2K Center."
  },
  {
    label: "Google Drive Center for Year 2000 Strategic Stability situation report",
    url: "https://drive.google.com/file/d/1TlAtguDOf7MHQYQFyMGv4jVMXo3SuAhM",
    note: "Drive-held post-rollover situation report on the jointly manned U.S.-Russian Y2K strategic-stability center."
  },
  {
    label: "Google Drive Y2K strategic-stability lessons for shared early warning",
    url: "https://drive.google.com/file/d/1N2iVz76pA_2ZMeqPFM91vJKHcTT1Z0yO",
    note: "Drive-held Cohen-Sergeyev correspondence linking the Y2K center to Shared Early Warning and pre-launch notification."
  }
];

window.NSP_RECORDS = [
  {
    id: "directive-system-pdd-prd",
    date: "1993-01-20",
    dateLabel: "January 20, 1993",
    type: "Directive System",
    status: "Foundation Lead",
    priority: "High",
    themeId: "defense-strategy",
    title: "PDD-1, PDD-2, and the Clinton PRD/PDD architecture",
    summary:
      "The Clinton directive system is the first control point for this volume because the administration replaced Reagan and Bush NSR/NSD practice with Presidential Review Directives and Presidential Decision Directives on day one.",
    sourceName: "Clinton Library Presidential Directives",
    sourceUrl: "https://www.clintonlibrary.gov/research/presidential-directives",
    sourceNote:
      "The official Clinton Library directives page explains that PRDs requested national security and foreign policy reviews, PDDs announced presidential decisions, and PDD-1 established the two series.",
    directives: ["PDD-1", "PDD-2"],
    topics: ["NSC process", "Directive system", "Post-Cold War machinery"]
  },
  {
    id: "national-security-review-strategy",
    date: "1993-06-11",
    dateLabel: "June 11, 1993",
    type: "Strategy Lead",
    status: "Harvest",
    priority: "High",
    themeId: "defense-strategy",
    title: "PRD-35, National Security Review - Strategy",
    summary:
      "A likely backbone lead for reconstructing how the administration defined strategy after the Cold War, especially where national security, economic policy, democracy promotion, and alliance management overlapped.",
    sourceName: "Clinton Library Presidential Directives",
    sourceUrl: "https://www.clintonlibrary.gov/research/presidential-directives",
    sourceNote:
      "The directives list identifies PRD-35 as National Security Review - Strategy, dated June 11, 1993. The workspace should locate the underlying review memoranda, options papers, and decision records.",
    directives: ["PRD-35"],
    topics: ["Strategy", "National security review", "Grand strategy"]
  },
  {
    id: "pdd-25-peace-operations",
    date: "1994-05-03",
    dateLabel: "May 3, 1994",
    type: "FOIA Collection",
    status: "Public Finding Aid",
    priority: "High",
    themeId: "defense-strategy",
    title: "PDD-25, Reforming Multilateral Peace Operations",
    summary:
      "The PDD-25 release is a major source lane for the post-Cold War problem of when and how the United States would support peacekeeping and peace enforcement.",
    sourceName: "Clinton Library PDD-25 finding aid",
    sourceUrl:
      "https://www.clintonlibrary.gov/research/archives/finding-aids/presidential-decision-directive-25",
    sourceNote:
      "The finding aid describes 54 folders and about 5,405 pages, with NSC, State, Defense, White House, draft directive, annex, interagency core group, Deputies Committee, and Principals Committee material.",
    collectionFolders: 54,
    collectionPages: 5405,
    directives: ["PRD-13", "PDD-25"],
    topics: ["Peace operations", "UN peacekeeping", "Interagency process", "Defense policy"]
  },
  {
    id: "security-policy-coordination",
    date: "1994-09-16",
    dateLabel: "September 16, 1994",
    type: "Process Lead",
    status: "Directive Cluster",
    priority: "Medium",
    themeId: "defense-strategy",
    title: "Security policy coordination and NSC organization amendments",
    summary:
      "The organizational amendments and security coordination directives belong in the strategy lane because they show how the Clinton NSC adjusted process as the policy agenda widened.",
    sourceName: "Clinton Library Presidential Directives",
    sourceUrl: "https://www.clintonlibrary.gov/research/presidential-directives",
    sourceNote:
      "The directives list includes PDD-29, Security Policy Coordination, and later PDDs amending NSC organization. These should be cross-checked against NSC staff and records-management files.",
    directives: ["PDD-29", "PDD-45", "PDD-51", "PDD-53", "PDD-65"],
    topics: ["NSC organization", "Security policy coordination", "Institutional change"]
  },
  {
    id: "russia-ukraine-arms-control-cluster",
    date: "1993-02-04",
    dateLabel: "February 1993 onward",
    type: "Directive Cluster",
    status: "Harvest",
    priority: "High",
    themeId: "risk-reduction",
    title: "Russia, Ukraine, START, and post-Soviet nuclear risk reduction",
    summary:
      "This cluster replaces the Reagan volume's Soviet-analysis lane with post-Soviet risk reduction: Russia and Ukraine policy, START follow-on questions, nuclear posture, and cooperative nuclear safety.",
    sourceName: "Clinton Library Presidential Directives",
    sourceUrl: "https://www.clintonlibrary.gov/research/presidential-directives",
    sourceNote:
      "The directives list identifies early PRDs on Russia and Ukraine, strategic offensive arms after START II, the future of arms control, and nuclear posture decisions.",
    directives: ["PRD-3", "PRD-4", "PRD-25", "PRD-34", "PDD-30", "PDD-47", "PDD-66"],
    topics: ["Russia", "Ukraine", "START", "Nuclear safety", "Risk reduction"]
  },
  {
    id: "nuclear-testing-ctbt",
    date: "1993-03-03",
    dateLabel: "March-July 1993",
    type: "FOIA Collection",
    status: "Public Finding Aid",
    priority: "High",
    themeId: "risk-reduction",
    title: "Nuclear Testing and Comprehensive Test Ban",
    summary:
      "A public source collection for PRD-19, PDD-11, nuclear testing policy, CTBT negotiations, and the administration's first-year nuclear-risk decisions.",
    sourceName: "Clinton Library Nuclear Testing and CTBT finding aid",
    sourceUrl:
      "https://www.clintonlibrary.gov/research/archives/finding-aids/nuclear-testing-and-comprehensive-test-ban",
    sourceNote:
      "The finding aid describes 39 folders and about 4,020 pages, mainly NSC memoranda, emails, press material, PRD/PDD meeting records, and closed national security or Atomic Energy Act material.",
    collectionFolders: 39,
    collectionPages: 4020,
    directives: ["PRD-19", "PDD-11"],
    topics: ["Nuclear testing", "CTBT", "Arms control", "Atomic Energy Act"]
  },
  {
    id: "abm-bmd-start-transition",
    chapterId: "bmd-abm",
    date: "1993-04-26",
    dateLabel: "1993-1998",
    type: "Directive Cluster",
    status: "Directive Cluster",
    priority: "High",
    themeId: "risk-reduction",
    title: "Ballistic missile defense, ABM Treaty, and START transition",
    summary:
      "A bridge from Reagan SDI and ABM Treaty disputes into Clinton-era missile defense, START III possibilities, and Russian arms-control diplomacy.",
    sourceName: "Clinton Library Presidential Directives",
    sourceUrl: "https://www.clintonlibrary.gov/research/presidential-directives",
    sourceNote:
      "The directives list includes PRD-31 and PDD-17 on ballistic missile defenses and the ABM Treaty, PDD-30 on nuclear posture and arms control, and PDD-66 on START III.",
    directives: ["PRD-31", "PDD-17", "PDD-30", "PDD-66"],
    topics: ["ABM Treaty", "Ballistic missile defense", "START III", "Russia"]
  },
  {
    id: "transnational-risk-cluster",
    date: "1995-06-21",
    dateLabel: "1995-1998",
    type: "Directive Cluster",
    status: "Harvest",
    priority: "Medium",
    themeId: "risk-reduction",
    title: "Counterterrorism, organized crime, and unconventional threats",
    summary:
      "A non-Soviet risk-reduction lane for threats the Clinton administration treated as national security problems but not as traditional Cold War military competition.",
    sourceName: "Clinton Library Presidential Directives",
    sourceUrl: "https://www.clintonlibrary.gov/research/presidential-directives",
    sourceNote:
      "The directives list includes PDD-39 on counterterrorism, PDD-42 on international organized crime, and PDD-62 on protection against unconventional threats to the homeland and Americans overseas.",
    directives: ["PDD-39", "PDD-42", "PDD-62"],
    topics: ["Counterterrorism", "Organized crime", "Unconventional threats", "Homeland protection"]
  },
  {
    id: "nonproliferation-export-controls",
    chapterId: "tech-transfer",
    date: "1993-02-11",
    dateLabel: "1993-1994",
    type: "Directive Cluster",
    status: "Harvest",
    priority: "High",
    themeId: "technology-control",
    title: "Nonproliferation, export controls, and arms-control R&D",
    summary:
      "The old stockpile and machine-tool lane should become a broader post-Cold War technology-control lane anchored in nonproliferation and dual-use export policy.",
    sourceName: "Clinton Library Presidential Directives",
    sourceUrl: "https://www.clintonlibrary.gov/research/presidential-directives",
    sourceNote:
      "The directives list identifies PRD-8 on nonproliferation and export controls, PRD-45 on arms-control and nonproliferation R&D coordination, and PDD-34 on conventional arms transfer policy.",
    directives: ["PRD-8", "PRD-45", "PDD-34"],
    topics: ["Nonproliferation", "Export controls", "Arms transfers", "Dual-use technology"]
  },
  {
    id: "stockpile-stewardship",
    date: "1993-11-03",
    dateLabel: "November 3, 1993",
    type: "Directive Lead",
    status: "Directive Cluster",
    priority: "Medium",
    themeId: "technology-control",
    title: "PDD-15 and stockpile stewardship under a test moratorium",
    summary:
      "The Reagan-era strategic modernization story turns into stockpile stewardship, safety, reliability, and political management of a nuclear arsenal under testing constraints.",
    sourceName: "Clinton Library Presidential Directives",
    sourceUrl: "https://www.clintonlibrary.gov/research/presidential-directives",
    sourceNote:
      "The directives list identifies PDD-15 as U.S. Policy on Stockpile Stewardship Under an Extended Moratorium and Comprehensive Test Ban, dated November 3, 1993.",
    directives: ["PDD-15"],
    topics: ["Stockpile stewardship", "Nuclear weapons", "Test moratorium", "CTBT"]
  },
  {
    id: "national-space-policy-pdd49",
    chapterId: "tech-transfer",
    date: "1996-09-14",
    dateLabel: "September 14, 1996",
    type: "FOIA Collection",
    status: "Public Finding Aid",
    priority: "Medium",
    themeId: "technology-control",
    title: "National Space Policy, PDD-49",
    summary:
      "A strong technology-control and national security source lane because the PDD-49 review explicitly reconsidered space policy after domestic and international changes that came with the end of the Cold War.",
    sourceName: "Clinton Library National Space Policy PDD-49 finding aid",
    sourceUrl:
      "https://www.clintonlibrary.gov/research/archives/finding-aids/national-space-policy-pdd-49",
    sourceNote:
      "The finding aid describes 26 folders and about 1,560 pages, including NSC, OSTP, ARMS email, TRP email, WHORM, fact sheets, press material, and PDD development records.",
    collectionFolders: 26,
    collectionPages: 1560,
    directives: ["PRD/NSTC-2", "PDD-49"],
    topics: ["Space policy", "Remote sensing", "Commercial space", "National security technology"]
  },
  {
    id: "encryption-remote-sensing-technology-transfer",
    chapterId: "tech-transfer",
    date: "1993-04-15",
    dateLabel: "1993-1996",
    type: "Directive Cluster",
    status: "Directive Cluster",
    priority: "Medium",
    themeId: "technology-control",
    title: "Encryption, remote sensing, satellites, and jet-engine technology",
    summary:
      "A dual-use technology cluster for issues where commercial competitiveness, intelligence equities, and national security export controls collided.",
    sourceName: "Clinton Library Presidential Directives",
    sourceUrl: "https://www.clintonlibrary.gov/research/presidential-directives",
    sourceNote:
      "The directives list includes PDD-5 on public encryption management, PDD-23 on foreign access to remote sensing space capabilities, and PDD-50 on commercial communications satellites and jet-engine hot-section technology.",
    directives: ["PDD-5", "PDD-23", "PDD-50", "PRD-27"],
    topics: ["Encryption", "Remote sensing", "Commercial satellites", "Technology transfer"]
  },
  {
    id: "counterterrorism-infrastructure-protection",
    date: "1998-05-20",
    dateLabel: "1995-1998",
    type: "Directive Cluster",
    status: "Harvest",
    priority: "High",
    themeId: "preparedness",
    title: "Counterterrorism, critical infrastructure, and homeland protection",
    summary:
      "The preparedness lane should capture the movement from crisis response toward infrastructure protection, unconventional threats, and standing domestic-security coordination.",
    sourceName: "Clinton Library Presidential Directives",
    sourceUrl: "https://www.clintonlibrary.gov/research/presidential-directives",
    sourceNote:
      "The directives list includes PDD-39 on counterterrorism, PDD-40 on port security, PDD-62 on unconventional threats, and PDD-63 on critical infrastructure protection.",
    directives: ["PDD-39", "PDD-40", "PDD-62", "PDD-63"],
    topics: ["Counterterrorism", "Critical infrastructure", "Port security", "Continuity"]
  },
  {
    id: "complex-contingency-operations",
    date: "1997-05-20",
    dateLabel: "May 1997",
    type: "Policy White Paper",
    status: "Public Anchor",
    priority: "Medium",
    themeId: "preparedness",
    title: "PDD-56, Managing Complex Contingency Operations",
    summary:
      "PDD-56 is a preparedness and planning lane for complex contingencies, where national security depended on rehearsed interagency political-military planning rather than a single military instrument.",
    sourceName: "Archived Clinton White House PDD-56 white paper",
    sourceUrl: "https://clintonwhitehouse4.archives.gov/WH/EOP/NSC/html/documents/NSCDoc2.html",
    sourceNote:
      "The archived White House paper describes PDD-56 as a framework for managing complex contingency operations and institutionalizing lessons from post-Cold War operations.",
    directives: ["PDD-56"],
    topics: ["Complex contingencies", "Interagency planning", "Political-military planning", "Preparedness"]
  },
  {
    id: "peace-operations-criminal-justice",
    date: "1999-12-17",
    dateLabel: "1999",
    type: "Directive Lead",
    status: "Directive Cluster",
    priority: "Medium",
    themeId: "preparedness",
    title: "Criminal justice, CWC implementation, and peace operations capacity",
    summary:
      "Late Clinton directives show preparedness moving into civilian capacity, criminal justice systems, treaty implementation, and operational support for peace and complex contingency work.",
    sourceName: "Clinton Library Presidential Directives",
    sourceUrl: "https://www.clintonlibrary.gov/research/presidential-directives",
    sourceNote:
      "The directives list includes PDD-70 on national implementation of the Chemical Weapons Convention and PDD-71 on criminal justice systems in support of peace operations and complex contingencies.",
    directives: ["PDD-70", "PDD-71"],
    topics: ["Chemical Weapons Convention", "Criminal justice", "Peace operations", "Civilian capacity"]
  }
];

window.NSP_RECORDS.push(
  ...NSS_RECORDS,
  ...BMD_ABM_RECORDS,
  ...TECH_TRANSFER_RECORDS,
  ...Y2K_PLANNING_RECORDS,
  ...STROBE_FOIA_RECORDS
);

for (const record of window.NSP_RECORDS) {
  if (record.chapterId) continue;
  record.chapterId = "national-security-strategy";
}
