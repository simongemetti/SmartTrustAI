import { useState } from "react";

function UploadScreen({ onStartAnalysis }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);

    if (file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    } else {
      setPreviewUrl("");
    }
  };

  const handleSubmit = () => {
    if (!selectedFile) return;
    onStartAnalysis(selectedFile.name);
  };

  return (
    <section className="screen-card">
      <div className="screen-inner">
        <div className="screen-header">
          <span className="screen-badge">Schritt 1 · Upload</span>
          <h2>Beleg digital erfassen</h2>
          <p>
            Laden Sie einen bestehenden Beleg hoch oder nehmen Sie direkt ein
            Foto mit dem Handy auf. SmartTrust AI übernimmt den Beleg anschliessend
            automatisch in den Analyseprozess.
          </p>
        </div>

        <div className="step-indicator">
          <div className="step-pill active">1 Upload</div>
          <div className="step-pill">2 Analyse</div>
          <div className="step-pill">3 Ergebnis</div>
          <div className="step-pill">4 Dashboard</div>
        </div>

        <div className="feature-strip">
          <div className="feature-pill">Datei-Upload</div>
          <div className="feature-pill">Fotoaufnahme per Handy</div>
          <div className="feature-pill">Mock-Analyse</div>
          <div className="feature-pill">Dashboard-Übersicht</div>
        </div>

        <div className="upload-box">
          <div className="upload-actions-grid">
            <div className="upload-action-card">
              <label className="upload-label">Datei hochladen</label>
              <input
                type="file"
                accept=".pdf,.png,.jpg,.jpeg,image/*"
                onChange={handleFileChange}
              />
            </div>

            <div className="upload-action-card">
              <label className="upload-label">Foto aufnehmen</label>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {selectedFile && (
            <div className="file-preview-box">
              <p className="file-info">
                Ausgewählte Datei: <strong>{selectedFile.name}</strong>
              </p>
              <p className="file-info">
                Dateityp: <strong>{selectedFile.type || "Unbekannt"}</strong>
              </p>

              {previewUrl && (
                <div className="image-preview-wrapper">
                  <img
                    src={previewUrl}
                    alt="Beleg Vorschau"
                    className="image-preview"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        <div className="screen-actions">
          <button
            className="primary-button"
            onClick={handleSubmit}
            disabled={!selectedFile}
          >
            Analyse starten
          </button>
        </div>
      </div>
    </section>
  );
}

export default UploadScreen;