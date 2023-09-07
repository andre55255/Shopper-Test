import TitlePage from "../../title-page";
import FormUpload from "../../form-upload";

import { ContainerStyled } from "./styled";
import { useState } from "react";
import { FormUploadType } from "../../../types/form-upload";
import { FormikHelpers } from "formik";
import { handleUploadFileProducts } from "../../../services/products/upload-file-products";
import { showToastSuccess } from "../../../helpers/toast-utils";
import { UploadFileResponse } from "../../../types/product-service";
import TableProductsData from "../../table-data";

export default function UploadPageComponent() {
    const [data, setData] = useState<FormUploadType>({ file: null });
    const [isFetching, setIsFetching] = useState<boolean>(false);

    const [isValidationReady, setIsValidationReady] = useState<boolean>(false);
    const [resultProds, setResultProds] = useState<UploadFileResponse[]>([]);

    const handleSubmit = async (
        values: FormUploadType,
        helpers: FormikHelpers<FormUploadType>
    ) => {
        setIsFetching(true);

        if (!data || !data.file) {
            helpers.setFieldError("file", "Arquivo não informado");
            setIsFetching(false);
            return;
        }

        const formData = new FormData();
        formData.append("file", data.file);

        const result = await handleUploadFileProducts(formData);
        setIsFetching(false);

        if (result.statusCode !== 200) {
            helpers.setFieldError("file", result.message);
            return;
        }
        showToastSuccess({ message: "Arquivo upado com sucesso" });
        setIsValidationReady(true);
        setResultProds(result.object ?? []);
    };

    const resetScreen = () => {
        setIsValidationReady(false);
        setData({ file: null });
    }

    return (
        <ContainerStyled>
            <TitlePage>Upload</TitlePage>
            {!isValidationReady && (
                <FormUpload
                    values={data}
                    setValues={setData}
                    handleSubmit={handleSubmit}
                    isFetching={isFetching}
                />
            )}
            {isValidationReady && (
                <TableProductsData
                    data={resultProds}
                    setIsValidationReady={resetScreen}
                />
            )}
        </ContainerStyled>
    );
}
