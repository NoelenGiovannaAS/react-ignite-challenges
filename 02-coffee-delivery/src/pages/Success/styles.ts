import { styled } from "styled-components";

export const WrapperSuccess = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-top: 5rem;
`;
export const SummaryDetails = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div`
  > h1 {
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme.product["yellow-dark"]};
  }
  font-size: 1.25rem;
  color: ${(props) => props.theme.base.subtitle};
`;

const ICON_COLOR = {
  yellowDark: "yellow-dark",
  text: "text",
  yellow: "yellow",
  purple: "purple",
} as const;

interface ItemProp {
  iconColor: keyof typeof ICON_COLOR;
}

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  height: 17.5rem;
  gap: 2rem;
  padding: 2.5rem;
  border: 1px solid;
  border-radius: 8px 50px 8px 50px;
  min-width: 20rem;

  > div {
    max-width: 100%;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ItemIcon = styled.div<ItemProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  background: ${(props) =>
    props.iconColor === "text"
      ? props.theme.base[ICON_COLOR[props.iconColor]]
      : props.theme.product[ICON_COLOR[props.iconColor]]};

  padding: 10px;
  border-radius: 50%;
  & > svg {
    color: ${(props) => props.theme.base.white};
  }
`;

export const ItemInfo = styled.span`
  display: flex;
  flex-direction: column;
`;
