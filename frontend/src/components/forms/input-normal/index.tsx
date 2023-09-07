import { InputProps } from "../../../types/input-props";
import { FormGroup, FormHelperError, Input, Label } from "./styled";

export default function InputNormal({
    type,
    name,
    placeholder,
    label,
    isInvalid,
    errorMessage,
    onChange,
    value,
    maxLength,
}: InputProps) {
    return (
        <FormGroup>
            <Label htmlFor={name}>{label}</Label>
            <Input
                name={name}
                id={name}
                type={type}
                placeholder={placeholder}
                maxLength={maxLength}
                value={value}
                onChange={onChange}
                autoComplete="off"
            />
            {isInvalid && <FormHelperError>{errorMessage}</FormHelperError>}
        </FormGroup>
    );
}
