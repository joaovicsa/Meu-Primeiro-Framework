import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivros from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

const LivroDados = () => {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(1);

  const controleLivros = new ControleLivros(); 
  const controleEditora = new ControleEditora(); 

  const opcoes = controleEditora.getEditoras().map(editora => ({ value: editora.codEditora, text: editora.nome }));

  const navigate = useNavigate();

  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const salvarDados = (event) => {
    event.preventDefault();
    const novoLivro = {
      codigo: 0,
      titulo: titulo,
      resumo: resumo,
      autores: autores.split('\n'), 
      codEditora: codEditora
    };
    controleLivros.incluir(novoLivro);
    navigate('/');
  };

  return (
    <main>
      <h2>Dados do Livro</h2>
      <form onSubmit={salvarDados}>
        <label>Título:</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Insira o título do livro" />
        <br />
        <label>Resumo:</label>
        <textarea value={resumo} onChange={(e) => setResumo(e.target.value)} placeholder="Resumo do livro" />
        <br />
        <label>Editora:</label>
        <select value={codEditora} onChange={tratarCombo}>
          {opcoes.map(opcao => <option key={opcao.value} value={opcao.value}>{opcao.text}</option>)}
        </select>
        <br />
        <label>Autores (1 por linha):</label>
        <textarea value={autores} onChange={(e) => setAutores(e.target.value)} placeholder="Insira os autores do livro separados por linha" />
        <br />
        <button type="submit" style={{ backgroundColor: 'blue', color: 'white' }}>Salvar Dados</button>
      </form>
    </main>
  );
};

export default LivroDados;
