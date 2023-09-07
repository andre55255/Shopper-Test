import { ReactNode } from "react";
import { TitlePageStyled } from "./styled";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type TitlePageProps = {
    children: ReactNode;
};

export default function TitlePage({ children }: TitlePageProps) {
    const navigate = useNavigate();

    const handlePreviousRoute = () => navigate(-1);

    return (
        <TitlePageStyled>
            <FaArrowLeft onClick={handlePreviousRoute} />
            {children}
        </TitlePageStyled>
    );
}
