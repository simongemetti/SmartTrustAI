import { useState } from "react";

function DashboardScreen({ dashboardData, latestResult, analysisLog, onReset }) {
  const [openAnalysisId, setOpenAnalysisId] = useState(null);

  const toggleAnalysisDetails = (id) => {
    setOpenAnalysisId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="screen-card">
      <div className="screen-inner">
        <div className="screen-header">
          <span className="screen-badge">Schritt 4 · Dashboard</span>
          <h2>Operative Übersicht und Priorisierung</h2>
          <p>
            Das Dashboard unterstützt Treuhänder im Jahresabschluss durch
            Priorisierung kritischer Fälle, Übersicht über den Automatisierungsgrad
            und eine klare Darstellung des Effizienzgewinns.
          </p>
        </div>

        <div className="step-indicator">
          <div className="step-pill">1 Upload</div>
          <div className="step-pill">2 Analyse</div>
          <div className="step-pill">3 Ergebnis</div>
          <div className="step-pill active">4 Dashboard</div>
        </div>

        <div className="dashboard-layout">
          <div>
            <div className="dashboard-grid">
              <div className="dashboard-card">
                <span>Verarbeitete Belege</span>
                <strong>{dashboardData.processedDocuments}</strong>
              </div>

              <div className="dashboard-card">
                <span>Automatisch geprüft</span>
                <strong>{dashboardData.autoChecked}</strong>
              </div>

              <div className="dashboard-card">
                <span>Kritische Fälle</span>
                <strong>{dashboardData.criticalCases}</strong>
              </div>

              <div className="dashboard-card">
                <span>Geschätzte Zeitersparnis</span>
                <strong>{dashboardData.timeSaved}</strong>
              </div>

              <div className="dashboard-card">
                <span>Manuelle Prüfungen reduziert</span>
                <strong>{dashboardData.manualReduction}</strong>
              </div>

              <div className="dashboard-card">
                <span>Beratungspotenzial</span>
                <strong>{dashboardData.advisoryGain}</strong>
              </div>
            </div>

            <div className="dashboard-section">
              <h3>Offene Prioritäten im Jahresabschluss</h3>
              <div className="priority-list">
                {dashboardData.priorityCases.map((caseItem) => (
                  <div className="priority-case-card" key={caseItem.id}>
                    <div>
                      <p className="priority-case-title">{caseItem.title}</p>
                      <p className="priority-case-text">{caseItem.description}</p>
                    </div>
                    <span className={`priority-tag ${caseItem.priorityClass}`}>
                      {caseItem.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {latestResult && (
              <div className="latest-result-box">
                <h3>Letzter analysierter Beleg</h3>
                <p>
                  <strong>{latestResult.documentType}</strong> von{" "}
                  <strong>{latestResult.supplier}</strong> wurde mit der
                  Risikostufe <strong>{latestResult.riskLevel}</strong> bewertet.
                </p>
                <p>Status: {latestResult.reviewStatus}</p>
                <p>Hinweis: {latestResult.warning}</p>
              </div>
            )}

            {analysisLog.length > 0 && (
              <div className="dashboard-section">
                <h3>Analyse-Historie</h3>
                <div className="analysis-log-list">
                  {analysisLog.map((item) => {
                    const isOpen = openAnalysisId === item.id;

                    return (
                      <div className="analysis-log-card" key={item.id}>
                        <div className="analysis-log-header">
                          <div>
                            <p className="analysis-log-title">
                              <strong>{item.documentType}</strong> · {item.supplier}
                            </p>
                            <p className="analysis-log-meta">
                              Betrag: {item.amount} · Risiko:{" "}
                              <span className={`risk-${item.riskLevel.toLowerCase()}`}>
                                {item.riskLevel}
                              </span>
                            </p>
                          </div>

                          <button
                            className="toggle-details-button"
                            onClick={() => toggleAnalysisDetails(item.id)}
                          >
                            {isOpen ? "Details schliessen" : "Details öffnen"}
                          </button>
                        </div>

                        {isOpen && (
                          <div className="analysis-details-box">
                            <div className="analysis-details-grid">
                              <div className="analysis-detail-item">
                                <span>Datei</span>
                                <strong>{item.fileName}</strong>
                              </div>

                              <div className="analysis-detail-item">
                                <span>Datum</span>
                                <strong>{item.date}</strong>
                              </div>

                              <div className="analysis-detail-item">
                                <span>MWST-Status</span>
                                <strong>{item.vatStatus}</strong>
                              </div>

                              <div className="analysis-detail-item">
                                <span>Buchungsvorschlag</span>
                                <strong>{item.bookingSuggestion}</strong>
                              </div>

                              <div className="analysis-detail-item">
                                <span>Priorität</span>
                                <strong className={`priority-${item.priority.toLowerCase()}`}>
                                  {item.priority}
                                </strong>
                              </div>

                              <div className="analysis-detail-item">
                                <span>Status</span>
                                <strong>{item.reviewStatus}</strong>
                              </div>

                              <div className="analysis-detail-item analysis-detail-full">
                                <span>Warnhinweis</span>
                                <strong>{item.warning}</strong>
                              </div>

                              <div className="analysis-detail-item analysis-detail-full">
                                <span>Prozessunterstützung</span>
                                <strong>{item.processSupport}</strong>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="chart-card">
            <h3>Verteilung der Prüfungsfälle</h3>

            <div className="chart-wrapper">
              <div className="donut-chart">
                <div className="donut-center">
                  <strong>{dashboardData.processedDocuments}</strong>
                  <span>Belege</span>
                </div>
              </div>

              <div className="chart-legend">
                <div className="chart-legend-item">
                  <span className="chart-dot blue"></span>
                  <span className="chart-legend-label">Automatisch geprüft</span>
                  <span className="chart-legend-value">{dashboardData.autoChecked}</span>
                </div>

                <div className="chart-legend-item">
                  <span className="chart-dot orange"></span>
                  <span className="chart-legend-label">Manuelle Prüfung</span>
                  <span className="chart-legend-value">{dashboardData.manualChecks}</span>
                </div>

                <div className="chart-legend-item">
                  <span className="chart-dot red"></span>
                  <span className="chart-legend-label">Kritische Fälle</span>
                  <span className="chart-legend-value">{dashboardData.criticalCases}</span>
                </div>
              </div>
            </div>

            <div className="chart-note-box">
              <p>
                SmartTrust AI automatisiert Routinearbeit und lenkt den Fokus
                gezielt auf jene Fälle, die für den Jahresabschluss wirklich
                relevant sind.
              </p>
            </div>
          </div>
        </div>

        <div className="screen-actions">
          <button className="primary-button" onClick={onReset}>
            Weitere Analyse starten
          </button>
        </div>
      </div>
    </section>
  );
}

export default DashboardScreen;