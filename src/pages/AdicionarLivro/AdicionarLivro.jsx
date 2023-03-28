import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addLivro } from "../../firebase/livros";

export function AdicionarLivro() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    function onSubmit(data) {
        addLivro(data)
    }

    return (
        <div className="adicionar-livro">
            <Container>
                <h1>Adicionar livro</h1>
                <hr />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="text" placeholder="Titulo" className={errors.titulo && "is-invalid"} {...register("titulo", {required: "Título é obrigatório!", maxLength: {value: 255, message: "Limite de 255 caracteres!"}})} />
                        <Form.Text className="text-muted">
                        {errors.titulo?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Autor</Form.Label>
                        <Form.Control type="text" placeholder="Autor" className={errors.autor && "is-invalid"} {...register("autor", {required: "Autor é obrigatório!", maxLength: {value: 255, message: "Limite de 255 caracteres!"}})} />
                        <Form.Text className="text-muted">
                        {errors.autor?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control type="text" placeholder="Categoria" className={errors.categoria && "is-invalid"} {...register("categoria", {required: "Categoria é obrigatório!", maxLength: {value: 255, message: "Limite de 255 caracteres!"}})} />
                        <Form.Text className="text-muted">
                        {errors.categoria?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control type="text" placeholder="ISBN" className={errors.isbn && "is-invalid"} {...register("isbn", {required: "ISBN é obrigatório!", maxLength: {value: 255, message: "Limite de 255 caracteres!"}})} />
                        <Form.Text className="text-muted">
                        {errors.isbn?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Capa do Livro</Form.Label>
                        <Form.Control type="url" placeholder="Url da Imagem" className={errors.urlCapa && "is-invalid"} {...register("urlCapa", {required: "O endereço da capa é obrigatório!"})} />
                        <Form.Text className="text-muted">
                        {errors.urlCapa?.message}
                        </Form.Text>
                    </Form.Group>
                    <Button type="submit" variant="success">Adicionar</Button>
                </Form>
            </Container>
        </div>
    )
}