import './App.css'

function App() {
return (
<div className="container">
<h1>🚀 Welcome to My DevOps Project</h1>
<h2>CI/CD Pipeline Demo</h2>

  <p>
    Learn how to build, test, and deploy applications
    automatically using DevOps.
  </p>

  <div className="cards">
    <div className="card">
      <h3>⚛️ React</h3>
      <p>Frontend Development</p>
    </div>

    <div className="card">
      <h3>🐙 GitHub</h3>
      <p>Source Code Management</p>
    </div>

    <div className="card">
      <h3>⚙️ CI/CD</h3>
      <p>Automated Build and Deployment</p>
    </div>
  </div>

  <p className="footer">React + GitHub Actions | DevOps Project</p>
</div>

)
}

export default App