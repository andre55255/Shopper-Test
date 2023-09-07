import { SelectObjectType } from "../../../types/select-object";
import { SelectField, SelectWrapper } from "./styled";

type InputSelectDefaultProps = {
    labelDefaultOption?: string;
    options: SelectObjectType[];
    value?: string | number;
    handleChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export default function InputSelectDefault({
    labelDefaultOption,
    options,
    value,
    handleChange,
}: InputSelectDefaultProps) {
    return (
        <SelectWrapper>
            <SelectField onChange={handleChange} value={value}>
                {labelDefaultOption && (
                    <option value="">{labelDefaultOption}</option>
                )}
                {options.map((item) => (
                    <option
                        key={`${item.label}${item.value}`}
                        value={item.value}
                    >
                        {item.label}
                    </option>
                ))}
            </SelectField>
            {/* <ArrowIcon>&#9660;</ArrowIcon> */}
        </SelectWrapper>
    );
}
