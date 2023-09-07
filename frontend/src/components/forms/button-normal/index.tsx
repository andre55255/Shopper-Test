import { Button } from "./styled";
import { ReactNode } from "react";

type ButtonNormalProps = {
    children: ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    disabled: boolean;
};

export default function ButtonNormal({
    onClick,
    children,
    disabled,
}: ButtonNormalProps) {
    return (
        <Button
            onClick={onClick ?? undefined}
            type={onClick ? "button" : "submit"}
            disabled={disabled}
        >
            {children}
        </Button>
    );
}
