function ResultScreen({ result, fileName, onGoToDashboard, onReset }) {
  return (
    <section className="screen-card">
      <div className="screen-inner">
        <div className="screen-header">
          <span className="screen-badge">Schritt 3 · Ergebnis</span>
          <h2>Analyseergebnis und Risikobewertung</h2>
          <p>
            Der Beleg wurde automatisch verarbeitet. Relevante Daten wurden
            erkannt, der Fall wurde bewertet und mögliche Risiken direkt
            markiert.
          </p>
        </div>

        <div className="step-indicator">
          <div className="step-pill">1 Upload</div>
          <div className="step-pill">2 Analyse</div>
          <div className="step-pill active">3 Ergebnis</div>
          <div className="step-pill">4 Dashboard</div>
        </div>

        <div className="result-grid">
          <div className="result-item">
            <span>Dokumenttyp</span>
            <strong>{result.documentType}</strong>
          </div>

          <div className="result-item">
            <span>Lieferant</span>
            <strong>{result.supplier}</strong>
          </div>

          <div className="result-item">
            <span>Betrag</span>
            <strong>{result.amount}</strong>
          </div>

          <div className="result-item">
            <span>Datum</span>
            <strong>{result.date}</strong>
          </div>

          <div className="result-item">
            <span>MWST-Status</span>
            <strong>{result.vatStatus}</strong>
          </div>

          <div className="result-item">
            <span>Buchungsvorschlag</span>
            <strong>{result.bookingSuggestion}</strong>
          </div>

          <div className="result-item">
            <span>Risikostufe</span>
            <strong className={`risk-${result.riskLevel.toLowerCase()}`}>
              {result.riskLevel}
            </strong>
          </div>

          <div className="result-item">
            <span>Priorität</span>
            <strong className={`priority-${result.priority.toLowerCase()}`}>
              {result.priority}
            </strong>
          </div>

          <div className="result-item">
            <span>Status</span>
            <strong>{result.reviewStatus}</strong>
          </div>

          <div className="result-item warning-box">
            <span>Warnhinweis</span>
            <strong>{result.warning}</strong>
          </div>

          <div className="result-item info-box">
            <span>Prozessunterstützung</span>
            <strong>{result.processSupport}</strong>
          </div>
        </div>

        {fileName && (
          <p className="file-info">
            Analysierte Datei: <strong>{fileName}</strong>
          </p>
        )}

        <div className="screen-actions">
          <button className="secondary-button" onClick={onReset}>
            Neuer Beleg
          </button>
          <button className="primary-button" onClick={onGoToDashboard}>
            Zum Dashboard
          </button>
        </div>
      </div>
    </section>
  );
}

export default ResultScreen;