import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Menu from '../componentes/Menu';

const baseURL = "http://localhost:3000/api/livros";

interface Livro {
  codigo: number;
  titulo: string;
}

const obterLivros = async () => {
  const response = await fetch(baseURL);
  return response.json();
};

const excluirLivro = async (codigo: number) => {
  const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
  return response.ok;
};

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (!carregado) {
      obterLivros().then(data => {
        setLivros(data);
        setCarregado(true);
      });
    }
  }, [carregado]);

  const excluir = async (codigo: number) => {
    const sucesso = await excluirLivro(codigo);
    if (sucesso) {
      
      setLivros(livros.filter(livro => livro.codigo !== codigo));
    }
  };

  return (
    <div className={styles.container}>
       <Head>
        <title>Loja Next</title>
        <meta name="description" content="Descrição da Loja Next" />
      </Head>
      
      <Menu />
      
      <main>
        <h1>Lista de Livros</h1>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluir(livro.codigo)} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

const LinhaLivro: React.FC<{ livro: Livro; excluir: () => void }> = ({ livro, excluir }) => (
  <tr>
    <td>{livro.codigo}</td>
    <td>{livro.titulo}</td>
    <td>
      <button onClick={excluir}>Excluir</button>
    </td>
  </tr>
);

export default LivroLista;
