import { keyframes, styled } from "styled-components";
import { StyledComponentProps } from "../../types/styled-component-props";

export const SpinnerContainer = styled.div<StyledComponentProps>`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div<StyledComponentProps>`
    width: 1.2rem;
    height: 1.2rem;
    border: 4px solid ${(props) => props.theme.loadingSpinner};
    border-top: 4px solid ${(props) => props.theme.primaryColor};
    border-radius: 50%;
    animation: ${spinAnimation} 1s linear infinite;
`;

export const LoadingContainer = styled.div<StyledComponentProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0000007f;
    z-index: 9999;
`;

export const LoadingArea = styled.div<StyledComponentProps>`
    border: 4px solid ${(props) => props.theme.loadingSpinner};
    border-top: 4px solid ${(props) => props.theme.primaryColor};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${spinAnimation} 2s linear infinite;
`;
