let currentId = 1;

const scenarios = [
  {
    documentType: "Rechnung",
    supplier: "Muster AG",
    amount: "CHF 1'245.80",
    date: "12.03.2026",
    vatStatus: "Unvollständig",
    bookingSuggestion: "Aufwand / Kreditoren",
    riskLevel: "Mittel",
    priority: "Hoch",
    reviewStatus: "Manuelle Prüfung nötig",
    warning: "MWST-Angabe fehlt oder ist unvollständig.",
    processSupport: "Fall wurde für den Jahresabschluss priorisiert."
  },
  {
    documentType: "Lieferantenrechnung",
    supplier: "Alpen Treuhand Services",
    amount: "CHF 842.50",
    date: "10.03.2026",
    vatStatus: "Vollständig",
    bookingSuggestion: "Dienstleistungsaufwand",
    riskLevel: "Niedrig",
    priority: "Mittel",
    reviewStatus: "Bereit für Buchung",
    warning: "Keine kritischen Auffälligkeiten erkannt.",
    processSupport: "Automatische Verarbeitung ohne zusätzlichen Prüfbedarf."
  },
  {
    documentType: "Spesenbeleg",
    supplier: "Office World",
    amount: "CHF 389.20",
    date: "08.03.2026",
    vatStatus: "Vollständig",
    bookingSuggestion: "Büromaterial",
    riskLevel: "Hoch",
    priority: "Hoch",
    reviewStatus: "Manuelle Prüfung erforderlich",
    warning: "Ungewöhnlicher Betrag im Vergleich zu ähnlichen Belegen.",
    processSupport: "Fall wurde als potenziell risikobehaftet markiert."
  }
];

export function getMockAnalysisResult(fileName = "beleg.pdf") {
  const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];

  return {
    id: currentId++,
    fileName,
    ...scenario
  };
}

export const mockDashboardData = {
  processedDocuments: 128,
  autoChecked: 121,
  criticalCases: 7,
  manualChecks: 5,
  timeSaved: "ca. 32 %",
  manualReduction: "ca. 41 %",
  advisoryGain: "mehr Zeit für Beratung",
  priorityCases: [
    {
      id: 1,
      title: "MWST-Angaben prüfen",
      description: "Mehrere Belege mit unvollständigen Pflichtangaben erkannt.",
      priority: "Hoch",
      priorityClass: "priority-high"
    },
    {
      id: 2,
      title: "Auffällige Beträge validieren",
      description: "Zwei Rechnungen weichen deutlich von Vergleichswerten ab.",
      priority: "Mittel",
      priorityClass: "priority-medium"
    },
    {
      id: 3,
      title: "Buchungsvorschläge freigeben",
      description: "Automatisch erkannte Fälle stehen zur schnellen Freigabe bereit.",
      priority: "Niedrig",
      priorityClass: "priority-low"
    }
  ]
};