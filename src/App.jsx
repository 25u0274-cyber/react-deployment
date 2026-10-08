import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>DevOps Demo</h2>
        <span>CI/CD Project</span>
      </nav>

      <main className="hero">
        <div className="card">
          <h1>React CI Demo 🚀</h1>

          <p>
            This is a demo React frontend created for testing
            Continuous Integration.
          </p>

          <div className="status">
            <span className="dot"></span>
            CI Pipeline Ready
          </div>

          <button onClick={() => alert("CI Demo Working!")}>
            Test Application
          </button>
        </div>

        <div className="features">
          <div>
            <h3>⚛️ React</h3>
            <p>Frontend application</p>
          </div>

          <div>
            <h3>🔧 GitHub</h3>
            <p>Source code management</p>
          </div>

          <div>
            <h3>⚙️ CI</h3>
            <p>Automated testing & build</p>
          </div>
        </div>
      </main>

      <footer>
        <p>React + GitHub Actions | CI/CD Demo</p>
      </footer>
    </div>
  );
}

export default App;