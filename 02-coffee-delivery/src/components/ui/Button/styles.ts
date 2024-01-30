import { css, styled } from "styled-components";

const variantStyles = (variant = "primary") =>
  ({
    primary: css`
      background: ${(props) => props.theme.product.yellow};
      color: ${(props) => props.theme.base.white};
      font-size: 14px;
      line-height: 160%;
      font-weight: bold;
      width: 8.25rem;
      height: 2.875rem;
      padding: 0.75rem 0.5rem;
      margin: 0 0.25rem;
      &:hover {
        background: ${(props) => props.theme.product["yellow-dark"]};
      }
    `,
    secondary: css`
      background: ${(props) => props.theme.base.button};
      font-size: 10px;
      line-height: 130%;
      font-weight: bold;
      width: 5.6875rem;
      height: 2rem;
      border-radius: 6px;
      padding: 0 0.5rem;
      margin: 0 0.25rem;
      &:hover {
        background: ${(props) => props.theme.base["hover"]};
      }
    `,
    icon: css`
      background: ${(props) => props.theme.product["purple-dark"]};
      width: 2.375rem;
      height: 2.375rem;
      border-radius: 6px;
      padding: 0.5rem 0.5rem;
      margin: 0 0.5rem;
      font-size: 22px;

      &:hover {
        background: ${(props) => props.theme.product["purple"]};
      }
    `,
  })[variant];

export const Button = styled.button<{ variant: string }>`
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  ${({ variant }) => variantStyles(variant)}
`;
