import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

const App = () => {
  return (
    <BrowserRouter>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <Link className='navbar-brand' to='/'>Catálogo</Link>
        <Link className='navbar-brand' to='/dados'>Novo</Link>
      </nav>
      <Routes>
        <Route path='/' element={<LivroLista />} />
        <Route path='/dados' element={<LivroDados />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;