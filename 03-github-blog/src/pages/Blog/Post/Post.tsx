import { Link } from "react-router-dom";
import { Content, HeaderPost, PostWrapper, TimePosted, Title } from "./styles";

interface PostProps {
  title: string;
  content: string;
}

export const Post = ({ title, content }: PostProps) => {
  return (
    <Link to="/post">
      <PostWrapper>
        <HeaderPost>
          <Title>{title}</Title>
          <TimePosted></TimePosted>
        </HeaderPost>
        <Content>{content}</Content>
      </PostWrapper>
    </Link>
  );
};
