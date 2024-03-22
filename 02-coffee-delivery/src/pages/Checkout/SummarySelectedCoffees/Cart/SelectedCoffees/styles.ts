import { styled } from "styled-components";

export const WrapperSelectedCoffees = styled.div`
  max-height: 60%;
  //min-height: 60%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.base.button};
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.base.label};
    border-radius: 6px;
  }

  & > div:nth-child(1) {
    padding-top: 0;
  }
`;
