import { Link } from "react-router-dom";
import { Content, HeaderPost, PostWrapper, TimePosted, Title } from "./styles";

interface PostProps {
  title: string;
  content: string;
  timePosted: string;
}

export const Post = ({ title, content, timePosted }: PostProps) => {
  return (
    <PostWrapper>
      <Link to="/post">
        <HeaderPost>
          <Title>{title}</Title>
          <TimePosted>{timePosted}</TimePosted>
        </HeaderPost>
        <Content>{content}</Content>
      </Link>
    </PostWrapper>
  );
};
