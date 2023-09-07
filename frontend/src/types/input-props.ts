export type InputProps = {
    type: "text" | "file";
    name: string;
    placeholder?: string;
    label: string;
    maxLength?: number;
    isInvalid: boolean;
    errorMessage: string | undefined;
    onChange: React.ChangeEventHandler | React.ChangeEventHandler<HTMLInputElement>;
    value: any;
};