import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import {Login} from './login/login'
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';

function App() {
  return (
    <BrowserRouter>
      <div class="top bg-dark text-light"> {/* top class to avoid body tag within a body tag*/}
          <header class="container-fluid">
            <nav class="navbar fixed-top navbar-dark">
              <div class="navbar-brand" href="#">Simon<sup>&reg;</sup></div>
              <menu class="navbar-nav">
                <li class="nav-item">
                  <NavLink class="nav-link" to="">Home</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="play">Play</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="scores">Scores</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="about">About</NavLink>
                </li>
              </menu>
            </nav>
          </header>

          <Routes>
        <Route
          path='/'
          element={
            <Login/>
          }
          exact
        />
        <Route path='/play' element={<Play/>} />
        <Route path='/scores' element={<Scores />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
            

          <footer class="bg-dark text-dark text-muted">
              <div class="container-fluid">
                <span class="text-reset">Ben Kartchner</span>
                <a class="text-reset"
                  href="https://github.com/theregular/simon"
                  >GitHub </a>
              </div>
          </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
