import { styled } from "styled-components";
import { StyledComponentProps } from "../../types/styled-component-props";

export const ContainerStyled = styled.div<StyledComponentProps>`
    width: 100%;
    margin: 0 auto;
    padding: 1rem 0;
    position: relative;
`;

export const SearchBarStyled = styled.div<StyledComponentProps>`
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 10px;

    svg {
        font-size: 0.8rem;
        color: ${(props) => props.theme.colorLabelForm};
    }
`;

export const SearchInputStyled = styled.input<StyledComponentProps>`
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    background-color: ${(props) => props.theme.bodyBackground};
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colorLabelForm};
    color: ${(props) => props.theme.colorLabelForm};
    outline: none;
`;

export const TableStyled = styled.table<StyledComponentProps>`
    width: 100%;
    border-collapse: collapse;
    margin-top: 2rem;
    background-color: ${(props) => props.theme.contentBackground};
    border-radius: 5px;

    @media (max-width: 960px) {
        th, td {
            display: block;
            width: 100%;
        }
    }
`;

export const TableHeaderStyled = styled.th<StyledComponentProps>`
    padding: 20px 20px 20px 10px;
    text-align: left;
    font-size: 0.75rem;
    color: ${(props) => props.theme.colorLabelForm};
    position: relative;
    cursor: pointer;
`;

export const TableBodyStyled = styled.tbody<StyledComponentProps>`
    tr:nth-child(even) {
        background-color: ${(props) => props.theme.contentBackground};

        &:hover {
            background-color: ${(props) => props.theme.bodyBackground};
        }
    }

    tr {
        border-bottom: 1px solid ${(props) => props.theme.textMenuColor};
        color: ${(props) => props.theme.colorLabelForm};
        font-size: 0.7rem;
        transition: background-color 0.3s;

        &:hover {
            background-color: ${(props) => props.theme.bodyBackground};
        }

        td {
            padding: 1rem 1rem 1rem 10px;
        }
    }
`;

export const ActionButtonsStyled = styled.div<StyledComponentProps>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: .3rem;

    width: 100%;
    font-size: .9rem;

    .edit {
        cursor: pointer;
        color: #007bff;
    }

    .delete {
        cursor: pointer;
        color: #d9534f;
    }
`;

export const PaginationStyled = styled.div<StyledComponentProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    margin-top: 1.2rem;
    font-size: .7rem;
    color: ${(props) => props.theme.colorLabelForm};
`;

export const ButtonPaginationStyled = styled.button<StyledComponentProps>`
    padding: .3rem .6rem;
    border: none;
    outline: none;
    font-size: .7rem;
`