import { styled } from "styled-components";

export const PostWrapper = styled.div`
  background: ${(props) => props.theme["base-post"]};
  //max-height: 16.25rem;
  min-height: 16.25rem;
  max-width: 35rem;
  padding: 2rem;
  border-radius: 10px;
  > a {
    text-decoration: none;
  }
`;

export const HeaderPost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme["base-text"]};
`;

export const TimePosted = styled.span`
  color: ${(props) => props.theme["base-span"]};
  font-size: 0.875rem;
`;

export const Content = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0.75rem 0;
  color: ${(props) => props.theme["base-text"]};
  font-weight: 400;
`;
