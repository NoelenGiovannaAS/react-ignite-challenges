import { useLocation, useNavigate } from "react-router-dom";
import avatarTest from "../../assets/avatar-test.png";

import {
  Bio,
  Content,
  HeaderSummary,
  Info,
  Infos,
  RedirectLink,
  Summary,
  SummaryInfoHeaderWrapper,
  Title,
} from "./styles";
export const SummaryInfoHeader = () => {
  const currentPage = useLocation();
  const isPostPage = currentPage.pathname === "/post";
  const navigate = useNavigate();

  return (
    <SummaryInfoHeaderWrapper>
      {!isPostPage && <img src={avatarTest} alt="profile-image" />}
      <Content>
        <Summary>
          {isPostPage ? (
            <HeaderSummary>
              <RedirectLink onClick={() => navigate(-1)}>VOLTAR</RedirectLink>
              <RedirectLink>GITHUB</RedirectLink>
            </HeaderSummary>
          ) : (
            <HeaderSummary>
              <Title>CAMILA ETC...</Title>
              <RedirectLink>GITHUB</RedirectLink>
            </HeaderSummary>
          )}

          {isPostPage ? (
            <Title>NOME DO POST</Title>
          ) : (
            <Bio>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </Bio>
          )}
        </Summary>

        <Infos $isPostPage={isPostPage}>
          <Info>cameronwll</Info>
          {isPostPage ? (
            <>
              <Info>Há um dia</Info>
              <Info>5 comentários</Info>
            </>
          ) : (
            <>
              <Info>Rocketseat</Info>
              <Info>32 seguidores</Info>
            </>
          )}
        </Infos>
      </Content>
    </SummaryInfoHeaderWrapper>
  );
};
