function ProcessingScreen({ fileName }) {
  return (
    <section className="screen-card">
      <div className="screen-inner">
        <div className="screen-header">
          <span className="screen-badge">Schritt 2 · Analyse</span>
          <h2>SmartTrust AI verarbeitet den Beleg</h2>
          <p>
            Das System extrahiert zentrale Rechnungsdaten, prüft Auffälligkeiten
            und priorisiert risikobehaftete Fälle für die manuelle Kontrolle.
          </p>
        </div>

        <div className="step-indicator">
          <div className="step-pill">1 Upload</div>
          <div className="step-pill active">2 Analyse</div>
          <div className="step-pill">3 Ergebnis</div>
          <div className="step-pill">4 Dashboard</div>
        </div>

        <div className="processing-box">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <div className="processing-status-list">
            <p>Dokumentklassifikation wird durchgeführt ...</p>
            <p>Betrag, Datum, Lieferant und MWST-Felder werden erkannt ...</p>
            <p>Risikoprüfung auf Unstimmigkeiten und Pflichtangaben läuft ...</p>
            <p>Kritische Fälle werden für die Priorisierung vorbereitet ...</p>
          </div>

          {fileName && (
            <p className="file-info">
              Aktuelle Datei: <strong>{fileName}</strong>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProcessingScreen;