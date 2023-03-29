import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { deleteLivro, getLivros } from "../../firebase/livros";

export function Livros() {

    const [livros, setLivros] = useState([]);

    useEffect(() => {
       initializeTable();
    }, []);
    
    function initializeTable() {
        getLivros().then(busca => {
            setLivros(busca);
        })
    }
    
    function onDeletelivro(id, titulo) {
        const deletar = window.confirm(`Tem certeza que deseja excluir o livro ${titulo}?`);
        if (deletar) {
            deleteLivro(id).then(() => {
            toast.success(`${titulo} apagado com sucesso!`, {duration: 3000, position: "bottom-right"});
            initializeTable();
            })
        }
    }
    
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
                                    <Button variant="danger" size="sm" onClick={() => onDeletelivro(livro.id, livro.titulo)}>
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