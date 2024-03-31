import { Link, useNavigate } from "react-router-dom";

import { IPost } from "../../../contexts/Posts";
import {
  Content,
  HeaderSummary,
  Info,
  Infos,
  RedirectLink,
  Summary,
  SummaryInfoHeaderWrapper,
  Title,
} from "../styles";

export const PostInfoHeader = ({
  comments,
  createdAt,
  title,
  login,
  url,
}: IPost) => {
  const navigate = useNavigate();

  return (
    <SummaryInfoHeaderWrapper>
      <Content>
        <Summary>
          <HeaderSummary>
            <RedirectLink onClick={() => navigate(-1)}>VOLTAR</RedirectLink>
            <Link to={url} target="_self">
              <RedirectLink>VER NO GITHUB</RedirectLink>
            </Link>
          </HeaderSummary>

          <Title>{title}</Title>
        </Summary>

        <Infos $isPostPage={true}>
          <Info>{login}</Info>
          <Info>{createdAt}</Info>
          <Info>{comments} comentários</Info>
        </Infos>
      </Content>
    </SummaryInfoHeaderWrapper>
  );
};
