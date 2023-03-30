import { useEffect, useState } from "react";
import { Badge, Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { getEmprestimos } from "../../firebase/emprestimos";

export function Emprestimos() {
  const [emprestimos, setEmprestimos] = useState(null);

  useEffect(() => {
    initializeTable();
  }, []);

  function initializeTable() {
    getEmprestimos().then((busca) => {
      setEmprestimos(busca);
    });
  }

  return (
    <div className="emprestimos">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h1>Emprestimos</h1>
          <Button as={Link} to="/emprestimos/adicionar" variant="success">
            Adicionar emprestimo
          </Button>
        </div>
        <hr />
        {emprestimos === null ? (
          <Loader />
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Leitor</th>
                <th>Email</th>
                <th>Data</th>
                <th>Livro</th>
                <th>Telefone</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {emprestimos.map((emprestimo) => {
                const data = emprestimo.dataEmprestimo
                  .toDate()
                  .toLocaleDateString("pt-br");
                return (
                  <tr key={emprestimo.id}>
                    <td>{emprestimo.leitor}</td>
                    <td>{emprestimo.email}</td>
                    <td>{data}</td>
                    <td>{emprestimo.livro.titulo}</td>
                    <td>{emprestimo.telefone}</td>
                    <td>
                      <Badge
                        bg={
                          emprestimo.status === "Pendente"
                            ? "warning"
                            : "success"
                        }
                      >
                        {emprestimo.status}
                      </Badge>
                    </td>
                    <td>
                    <Button as={Link} to={`/emprestimos/editar/${emprestimo.id}`} className="me-2" variant="warning" size="sm">
                                        Editar <i className="bi bi-pencil-fill"></i>
                                    </Button>                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </Container>
    </div>
  );
}
