import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 0.5rem;
  }

  /* a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme["gray-100"]};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      &:hover {
        border-bottom: 3px solid ${(props) => props.theme["green-500"]};
      }

      &.active {
        color: ${(props) => props.theme["green-500"]};
      }
    }
  }*/
`;

export const LocaleInfo = styled.div`
  color: ${(props) => props.theme.product["purple-dark"]};
  background: ${(props) => props.theme.product["purple-light"]};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 8.9375rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  border-radius: 6px;

  & > svg {
    color: ${(props) => props.theme.product["purple"]};
  }
`;
