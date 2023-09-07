import { LogoDetailsStyled } from "./styled";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import logoLight from "../../../../assets/logo-ico.png";

type LogoDetailsProps = {
    isOpen: boolean;
    toggleSidebar: React.MouseEventHandler<SVGElement>;
};

export default function LogoDetails({
    isOpen,
    toggleSidebar,
}: LogoDetailsProps) {
    return (
        <LogoDetailsStyled open={isOpen}>
            {isOpen && <img src={logoLight} alt="logo" />}
            {isOpen ? (
                <FiChevronLeft onClick={toggleSidebar} />
            ) : (
                <FiChevronRight onClick={toggleSidebar} />
            )}
        </LogoDetailsStyled>
    );
}
