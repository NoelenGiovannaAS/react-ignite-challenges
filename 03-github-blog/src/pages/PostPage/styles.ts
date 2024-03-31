import { styled } from "styled-components";

export const PostPageWrapper = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme["max-width-page"]};
  margin-top: 3rem;
  padding: 0 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
