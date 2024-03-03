import { styled } from "styled-components";

export const WrapperSummary = styled.div`
  display: flex;
  max-width: 40rem;
  flex: 2;
  border-radius: 8px 50px 8px 50px;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.base.card};
  height: 31rem;
`;
