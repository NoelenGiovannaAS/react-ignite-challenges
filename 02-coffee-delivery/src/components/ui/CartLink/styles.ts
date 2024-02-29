import { css, styled } from "styled-components";

const withQtyItemCart = (qty: number) => css`
  &:after {
    content: "${qty}";
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.product["yellow-dark"]};
    color: ${(props) => props.theme.base.white};
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
    font-size: 0.75rem;
    text-align: center;
    position: absolute;
    top: 160px;
    left: 70px;
  }
`;

export const Cart = styled.div<{ qty: number }>`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.product["yellow-light"]};
  color: ${(props) => props.theme.product["yellow-dark"]};
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  padding: 0.5rem;
  margin: 0 0.25rem;

  ${({ qty }) => qty && withQtyItemCart(qty)};
`;
