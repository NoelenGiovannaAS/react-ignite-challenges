import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PostsContext } from "../../../contexts/Posts";
import { api } from "../../../lib/axios";
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
} from "../styles";

interface Iuser {
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  bio: string;
  followers: number;
  login: string;
}

export const ProfileInfoHeader = () => {
  const [userSummary, setUserSummary] = useState<Iuser>({} as Iuser);
  const { username } = useContext(PostsContext);
  const getUserdata = async () => {
    const { data } = await api.get(`/users/${username}`);
    setUserSummary(data);
  };

  useEffect(() => {
    getUserdata();
  }, []);

  const {
    avatar_url: avatarUrl,
    bio,
    followers,
    html_url: htmlUrl,
    login,
    name,
    company,
  } = userSummary;
  return (
    <SummaryInfoHeaderWrapper>
      <img src={avatarUrl} alt="profile-image" />
      <Content>
        <Summary>
          <HeaderSummary>
            <Title>{name}</Title>
            <Link to={htmlUrl} target="_blank">
              <RedirectLink>GITHUB</RedirectLink>
            </Link>
          </HeaderSummary>

          <Bio>{bio}</Bio>
        </Summary>

        <Infos $isPostPage={false}>
          <Info>{login}</Info>
          {!company && <Info>{company}</Info>}
          <Info>{followers} seguidores</Info>
        </Infos>
      </Content>
    </SummaryInfoHeaderWrapper>
  );
};
