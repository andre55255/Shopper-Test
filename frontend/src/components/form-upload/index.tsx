import { FormikHelpers, useFormik } from "formik";
import { FormUploadType } from "../../types/form-upload";

import FormDefault from "../forms/form-default";
import { UploadFileSchema } from "../../validation-schemas/upload-file-schema";
import InputNormal from "../forms/input-normal";

type FormUploadProps = {
    values: FormUploadType;
    setValues: React.Dispatch<React.SetStateAction<FormUploadType>>;
    isFetching: boolean;
    handleSubmit: (
        values: FormUploadType,
        formikHelpers: FormikHelpers<FormUploadType>
    ) => void | Promise<any>;
};

export default function FormUpload({
    values,
    setValues,
    isFetching,
    handleSubmit,
}: FormUploadProps) {
    const formik = useFormik({
        initialValues: values,
        onSubmit: handleSubmit,
        validationSchema: UploadFileSchema,
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setValues({ file });
        }
    };

    return (
        <FormDefault
            labelButton="Validar"
            handleSubmit={formik.handleSubmit}
            isFetching={isFetching}
        >
            <InputNormal
                label="Arquivo csv"
                name="file"
                type="file"
                value={formik.values.file}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleFileChange(e);
                }}
                isInvalid={
                    formik.touched.file && formik.errors.file ? true : false
                }
                errorMessage={formik.errors.file?.toString()}
            />
        </FormDefault>
    );
}
