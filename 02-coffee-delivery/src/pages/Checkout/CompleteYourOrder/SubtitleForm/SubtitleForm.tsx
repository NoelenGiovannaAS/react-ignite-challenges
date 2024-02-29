import { ReactNode } from "react";
import {
  Subtitle,
  SubtitleIcon,
  SubtitleTitle,
  TextsWrapper,
  Wrapper,
} from "./styles";

interface SubstitleProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}
export const SubtitleForm = ({ icon, title, subtitle }: SubstitleProps) => {
  return (
    <Wrapper>
      <SubtitleIcon>{icon}</SubtitleIcon>
      <TextsWrapper>
        <SubtitleTitle>{title}</SubtitleTitle>
        <Subtitle>{subtitle}</Subtitle>
      </TextsWrapper>
    </Wrapper>
  );
};
