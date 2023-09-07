import {
    ProductUpdateType,
    UploadFileResponse,
} from "../../types/product-service";
import { SelectColumnType } from "../../types/select-object";
import { useState, useEffect } from "react";

import ButtonNormal from "../forms/button-normal";
import TableComponent from "../table";
import Loading from "../loading";
import { handleUpdateProductsRequest } from "../../services/products/update-products";
import { showToastError, showToastSuccess } from "../../helpers/toast-utils";

type TableProductDataProps = {
    data: UploadFileResponse[];
    setIsValidationReady: () => void;
};

export default function TableProductsData({
    data,
    setIsValidationReady,
}: TableProductDataProps) {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isDisabledButton, setIsDisabledButton] = useState<boolean>(true);

    useEffect(() => {
        const itemsWithErrors = data.filter(
            (item) =>
                item.errorDs &&
                item.errorDs !== null &&
                item.errorDs?.length > 0
        );
        setIsDisabledButton(itemsWithErrors && itemsWithErrors.length > 0);
    }, [data]);

    const columns: SelectColumnType[] = [
        {
            label: "Código",
            value: "code",
            isVisible: true,
        },
        {
            label: "Nome",
            value: "name",
            isVisible: true,
        },
        {
            label: "Preço atual",
            value: "currentPrice",
            isVisible: true,
        },
        {
            label: "Novo preço",
            value: "newPrice",
            isVisible: true,
        },
    ];

    const handleUpdateProducts = async () => {
        setIsFetching(true);

        const dataParsed: ProductUpdateType[] = data.map(
            (item: UploadFileResponse) => {
                return {
                    code: item.code,
                    newPrice: item.newPrice,
                };
            }
        );

        const resultReq = await handleUpdateProductsRequest(dataParsed);
        setIsFetching(false);

        if (resultReq.statusCode !== 200) {
            showToastError({ message: resultReq.message });
            return;
        }
        showToastSuccess({ message: "Produtos atualizados com sucesso" });
        setIsValidationReady();
    };

    return (
        <>
            <TableComponent
                columns={columns}
                data={data.map((item) => {
                    return {
                        code: item.code,
                        name: item.name,
                        currentPrice: item.currentPrice
                            ? Number(item.currentPrice).toLocaleString(
                                  "pt-BR",
                                  {
                                      style: "currency",
                                      currency: "BRL",
                                  }
                              )
                            : "",
                        newPrice: item.newPrice
                            ? item.newPrice.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                              })
                            : "",
                        errorDs: item.errorDs,
                    };
                })}
            />

            <ButtonNormal
                disabled={isDisabledButton}
                onClick={handleUpdateProducts}
            >
                {isFetching ? <Loading isFetching={isFetching} /> : "Atualizar"}
            </ButtonNormal>
        </>
    );
}
