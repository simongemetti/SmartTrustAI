import { useState } from "react";
import "./index.css";

import UploadScreen from "./components/UploadScreen";
import ProcessingScreen from "./components/ProcessingScreen";
import ResultScreen from "./components/ResultScreen";
import DashboardScreen from "./components/DashboardScreen";

import { getMockAnalysisResult, mockDashboardData } from "./data/mockData";

function App() {
  const [currentScreen, setCurrentScreen] = useState("upload");
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [analysisLog, setAnalysisLog] = useState([]);

  const ensureDemoResult = () => {
    if (!analysisResult) {
      const demoResult = getMockAnalysisResult("rechnung_demo.pdf");
      setAnalysisResult(demoResult);
      setAnalysisLog((prev) => [demoResult, ...prev]);
      return demoResult;
    }
    return analysisResult;
  };

  const handleStartAnalysis = (fileName) => {
    setUploadedFileName(fileName);
    setCurrentScreen("processing");

    setTimeout(() => {
      const result = getMockAnalysisResult(fileName);
      setAnalysisResult(result);
      setAnalysisLog((prev) => [result, ...prev]);
      setCurrentScreen("result");
    }, 2200);
  };

  const handleGoToDashboard = () => {
    if (!analysisResult) {
      ensureDemoResult();
    }
    setCurrentScreen("dashboard");
  };

  const handleReset = () => {
    setUploadedFileName("");
    setAnalysisResult(null);
    setCurrentScreen("upload");
  };

  const handleJumpToScreen = (screen) => {
    if (screen === "result" || screen === "dashboard" || screen === "processing") {
      ensureDemoResult();
    }

    if (screen === "processing" && !uploadedFileName) {
      setUploadedFileName("rechnung_demo.pdf");
    }

    setCurrentScreen(screen);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <h1 className="brand-title">SmartTrust AI</h1>
          <p className="brand-subtitle">
            KI-gestützte Belegverarbeitung, Risikoprüfung und Prozessunterstützung
            im Jahresabschluss für Treuhand-KMU.
          </p>
        </div>
      </header>

      <div className="demo-nav-wrapper">
        <div className="demo-nav">
          <button
            className={`demo-nav-button ${currentScreen === "upload" ? "active" : ""}`}
            onClick={() => handleJumpToScreen("upload")}
          >
            Upload
          </button>

          <button
            className={`demo-nav-button ${currentScreen === "processing" ? "active" : ""}`}
            onClick={() => handleJumpToScreen("processing")}
          >
            Analyse
          </button>

          <button
            className={`demo-nav-button ${currentScreen === "result" ? "active" : ""}`}
            onClick={() => handleJumpToScreen("result")}
          >
            Ergebnis
          </button>

          <button
            className={`demo-nav-button ${currentScreen === "dashboard" ? "active" : ""}`}
            onClick={() => handleJumpToScreen("dashboard")}
          >
            Dashboard
          </button>
        </div>
      </div>

      <main className="main-content">
        {currentScreen === "upload" && (
          <UploadScreen onStartAnalysis={handleStartAnalysis} />
        )}

        {currentScreen === "processing" && (
          <ProcessingScreen fileName={uploadedFileName || "rechnung_demo.pdf"} />
        )}

        {currentScreen === "result" && analysisResult && (
          <ResultScreen
            result={analysisResult}
            fileName={uploadedFileName || "rechnung_demo.pdf"}
            onGoToDashboard={handleGoToDashboard}
            onReset={handleReset}
          />
        )}

        {currentScreen === "dashboard" && (
          <DashboardScreen
            dashboardData={mockDashboardData}
            latestResult={analysisResult}
            analysisLog={analysisLog}
            onReset={handleReset}
          />
        )}
      </main>
    </div>
  );
}

export default App;