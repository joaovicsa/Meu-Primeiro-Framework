import { useState, useEffect } from 'react';
import  ControleLivros  from './controle/ControleLivros';
import  ControleEditora  from './controle/ControleEditora';
import './App.css';
const LivroLista = () => {
    const controleLivro = new ControleLivros();
    const controleEditora = new ControleEditora();
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        if (!carregado) {
            setLivros(controleLivro.obterLivros());
            setCarregado(true);
        }
    }, [carregado, controleLivro]);

    const excluir = (codigoLivro) => {
        const updatedLivros = livros.filter(livro => livro.codigo !== codigoLivro);
        setLivros(updatedLivros);
    };

    const LinhaLivro = ({ livro }) => {
        const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
        return (
            <tr>
                <td className="titulo-cell">
                    {livro.titulo}
                    <div>
                        <button className="excluir-button" onClick={() => excluir(livro.codigo)}>
                            Excluir
                        </button>
                    </div>
                </td>
                <td className="resumo-cell">
                    {livro.resumo}
                </td>
                <td className="editora-cell">
                    {nomeEditora}
                </td>
                <td className="autores-cell">
                    <ul>
                        {livro.autores.map((autor, index) => (
                            <li key={index}>{autor}</li>
                        ))}
                    </ul>
                </td>
            </tr>
        );
    };

  return (
        <main className='lista-livro'>
            <h1>Catálogo de Livros</h1>
            <table className="book-table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <LinhaLivro key={livro.codigo} livro={livro} />
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default LivroLista;