import { css, styled } from "styled-components";

export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
  max-width: ${(props) => props.theme["max-width-page"]};
  margin-bottom: 0.5rem;
`;

const GridLayout = css`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
`;

const EmptyLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostsContainer = styled.div<{ $isEmpty: boolean }>`
  ${(props) => (props.$isEmpty ? EmptyLayout : GridLayout)}
`;
