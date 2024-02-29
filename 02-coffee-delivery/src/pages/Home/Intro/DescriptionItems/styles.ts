import { styled } from "styled-components";

const ICON_COLOR = {
  yellowDark: "yellow-dark",
  text: "text",
  yellow: "yellow",
  purple: "purple",
} as const;

interface ItemProp {
  iconColor: keyof typeof ICON_COLOR;
}

export const WrapperDescriptionItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;
  grid-column-gap: 0.75rem;
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
