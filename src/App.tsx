import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Catálogo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dados">Novo</Link>
              </li>
            </ul>
          </div>
        </div>
        </nav>
      <Routes>
        <Route path='/' element={<LivroLista />} />
        <Route path='/dados' element={<LivroDados />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;