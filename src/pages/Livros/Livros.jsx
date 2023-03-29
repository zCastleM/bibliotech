import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getLivros } from "../../firebase/livros";

export function Livros() {

    const [livros, setLivros] = useState([]);

    useEffect(() => {
        async function fetchLivros() {
        const busca = await getLivros();
        setLivros(busca);
    } 
    fetchLivros();
        }, []);

    return (
        <div className="livros">
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Livros</h1>
                    <Button as={Link} to="/livros/add" variant="success">
                        Adicionar livro
                    </Button>
                </div>
                <hr />
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Categoria</th>
                        <th>ISBN</th>
                        <th>Imagem</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map(livro =>{
                        return (
                            <tr key={livro.id}>
                                <td>{livro.titulo}</td>
                                <td>{livro.autor}</td>
                                <td>{livro.categoria}</td>
                                <td>{livro.isbn}</td>
                                <td><img src={livro.urlCapa} width="100px" alt={livro.titulo}/></td>
                                <td>
                                    <Button as={Link} to={`/livros/edit/${livro.id}`} className="me-2" variant="warning" size="sm">
                                        Editar <i className="bi bi-pencil-fill"></i>
                                    </Button>
                                    <Button variant="danger" size="sm">
                                        Excluir <i className="bi bi-trash-fill"></i>
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            </Container>
        </div>
    )
}