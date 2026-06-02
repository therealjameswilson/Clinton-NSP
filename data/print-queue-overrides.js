(function () {
  const pdfById = {
    "published-nss-1994": "https://history.defense.gov/Portals/70/Documents/nss/nss1994.pdf",
    "published-nss-1995": "https://history.defense.gov/Portals/70/Documents/nss/nss1995.pdf",
    "published-nss-1996": "https://history.defense.gov/Portals/70/Documents/nss/nss1996.pdf",
    "published-nss-1997": "https://history.defense.gov/Portals/70/Documents/nss/nss1997.pdf",
    "published-nss-1998": "https://history.defense.gov/Portals/70/Documents/nss/nss1998.pdf",
    "published-nss-1999": "https://history.defense.gov/Portals/70/Documents/nss/nss1999.pdf",
    "published-nss-2000": "https://history.defense.gov/Portals/70/Documents/nss/nss2000.pdf"
  };

  for (const record of window.NSP_RECORDS || []) {
    if (pdfById[record.id]) record.pdfUrl = pdfById[record.id];
  }
})();
