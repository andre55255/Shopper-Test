import { useNavigate } from "react-router-dom";
import { Button, Container, ErrorContent, Message, Title } from "./styles";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <Container>
            <ErrorContent>
                <Title>404</Title>
                <Message>Página não encontrada</Message>
                <Button onClick={() => navigate(-1)}>Voltar à página anterior</Button>
            </ErrorContent>
        </Container>
    );
}
