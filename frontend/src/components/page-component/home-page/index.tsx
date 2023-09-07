import { JumbotronStyled, LinkPortfolioStyled, SubtitleStyled, TitleStyled } from "./styled";

export default function HomePageComponent() {
    return (
        <JumbotronStyled>
            <TitleStyled>
                Olá Amigo, Bem vindo ao Sistema de Manipulação de Produtos
            </TitleStyled>
            <SubtitleStyled>
                Comece a usufruir das funcionalidades já!! Se quiser ver mais
                coisas minhas acesse{" "}
                <LinkPortfolioStyled
                    href="https://www.albarros.com.br/"
                    target="_blank"
                    rel="noreferrer"
                >
                    meu portfolio
                </LinkPortfolioStyled>
                <br />
                Este site foi contruído baseando a paleta de cores e alguns designs do portfolio que eu estou criando para mim
            </SubtitleStyled>
        </JumbotronStyled>
    );
}
