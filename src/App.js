import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
          <div class="top bg-dark text-light"> {/* top class to avoid body tag within a body tag*/}
        <header class="container-fluid">
          <nav class="navbar fixed-top navbar-dark">
            <div class="navbar-brand" href="#">Simon<sup>&reg;</sup></div>
            <menu class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="scores.html">Scores</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
            </menu>
          </nav>
        </header>

        <main class="bg-secondary">
          Simon
        </main>
          

        <footer class="bg-dark text-dark text-muted">
            <div class="container-fluid">
              <span class="text-reset">Ben Kartchner</span>
              <a class="text-reset"
                href="https://github.com/theregular/simon"
                >GitHub </a>
            </div>
        </footer>
    </div>
  );
}

export default App;
