import { styled } from "styled-components";

const ICON_COLOR = {
  orange: "yellow-dark",
  black: "text",
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

export const Item = styled.div<ItemProp>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;

  & > svg {
    padding: 0 8px;
    background: ${(props) =>
      props.iconColor === "black"
        ? props.theme.base[ICON_COLOR[props.iconColor]]
        : props.theme.product[ICON_COLOR[props.iconColor]]};
    border-radius: 50%;
    color: ${(props) => props.theme.base.white};
  }
`;
