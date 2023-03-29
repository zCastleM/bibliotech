import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { adicionarEmprestimo } from "../../firebase/emprestimos";
import { getLivros, getLivro } from "../../firebase/livros";

export function AdicionarEmprestimo() {
  const [livros, setLivros] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    getLivro(data.idLivro).then(livro => {
      delete data.idLivro;
      let novoEmprestimo = {
        ...data,
        status: "Pendente",
        livro,
        dataEmprestimo: new Date(),
      };
      adicionarEmprestimo(novoEmprestimo).then(() => {
        toast.success("Empréstimo feito com sucesso", {
          duration: 3000,
          position: "bottom-left",
        });
      });
    });
  }

  useEffect(() => {
    getLivros().then((busca) => {
      setLivros(busca);
    });
  }, []);

  return (
    <div className="adicionar-emprestimo">
      <Container>
        <h1>Adicionar empréstimo</h1>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Leitor</Form.Label>
            <Form.Control
              type="text"
              className={errors.leitor && "is-invalid"}
              {...register("leitor", {
                required: "Leitor é obrigatório!",
                maxLength: { value: 255, message: "Limite de 255 caracteres!" },
              })}
            />
            <Form.Text className="invalid-feedback">
              {errors.leitor?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              className={errors.email && "is-invalid"}
              {...register("email", {
                required: "E-mail é obrigatório!",
                maxLength: { value: 255, message: "Limite de 255 caracteres!" },
              })}
            />
            <Form.Text className="invalid-feedback">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="tel"
              className={errors.telefone && "is-invalid"}
              {...register("telefone", {
                required: "Telefone é obrigatório!",
                maxLength: { value: 15, message: "Limite de 15 caracteres!" },
              })}
            />
            <Form.Text className="invalid-feedback">
              {errors.telefone?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Livro</Form.Label>
            <Form.Select
              className={errors.idLivro && "is-invalid"}
              {...register("idLivro", {
                required: "Livro é obrigatório!"
              })}>
              {livros.map((livro) => (
                <option key={livro.id} value={livro.id}>
                  {livro.titulo}
                </option>
              ))}
            </Form.Select>
            <Form.Text className="invalid-feedback">
              {errors.livro?.message}
            </Form.Text>
          </Form.Group>
          <Button type="submit" variant="success">
            Emprestar
          </Button>
        </Form>
      </Container>
    </div>
  );
}
