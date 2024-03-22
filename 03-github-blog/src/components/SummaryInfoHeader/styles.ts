import { styled } from "styled-components";

export const SummaryInfoHeaderWrapper = styled.section`
  display: flex;
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: ${(props) => props.theme["max-width-page"]};
  min-width: 35rem;
  max-height: 16rem;
  margin: 0 auto;
  margin-top: -5rem;
  gap: 1.5rem;

  @media (max-width: 1045px) {
    margin-top: -3.2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const HeaderSummary = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RedirectLink = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme["blue"]};
`;

export const Title = styled.h1`
  color: ${(props) => props.theme["base-title"]};
`;

export const Bio = styled.p`
  color: ${(props) => props.theme["base-text"]};
`;

export const Infos = styled.div<{ $isPostPage: boolean }>`
  display: flex;
  gap: 1.5rem;
  font-weight: 400;
  color: ${(props) =>
    props.$isPostPage
      ? props.theme["base-span"]
      : props.theme["base-subtitle"]};
`;

export const Info = styled.span`
  margin-top: 0.5rem;
  font-size: 1rem;
`;
