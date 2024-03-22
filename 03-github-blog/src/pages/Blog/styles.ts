import { styled } from "styled-components";

export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
  max-width: ${(props) => props.theme["max-width-page"]};
  margin-bottom: 2rem;
`;
export const PostsContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
`;
