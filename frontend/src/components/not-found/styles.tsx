import styled from 'styled-components';
import { StyledComponentProps } from '../../types/styled-component-props';

export const Container = styled.div<StyledComponentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bodyBackground};
`;

export const ErrorContent = styled.div<StyledComponentProps>`
  text-align: center;
  padding: 1.2rem;
  background-color: ${(props) => props.theme.contentBackground};
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px #00000019;
`;

export const Title = styled.h1<StyledComponentProps>`
  font-size: 5rem;
  margin: 0;
  color: ${(props) => props.theme.primaryColor};
`;

export const Message = styled.p<StyledComponentProps>`
  font-size: 1.5rem;
  margin: 10px 0;
  color: ${(props) => props.theme.textColor};
`;

export const Button = styled.button<StyledComponentProps>`
  padding: .5rem 1rem;
  font-size: 1.2rem;
  border: none;
  background-color: ${(props) => props.theme.primaryColor};
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.primaryColorHover};
  }
`;