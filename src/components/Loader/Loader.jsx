import { Container, Spinner } from "react-bootstrap";

export function Loader(){
    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Spinner color="primary"></Spinner>
            <span className="ms-1">Carregando...</span>
        </Container>
    )
}