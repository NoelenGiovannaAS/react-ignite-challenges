import { styled } from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export const SubtitleIcon = styled.div``;
export const SubtitleTitle = styled.h4`
  color: ${(props) => props.theme.base.subtitle};
  font-weight: 100;
`;
export const Subtitle = styled.p`
  font-size: 14px;
`;
