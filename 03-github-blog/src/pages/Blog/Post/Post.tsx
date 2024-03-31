import { Link } from "react-router-dom";
import { Content, HeaderPost, PostWrapper, TimePosted, Title } from "./styles";

interface PostProps {
  title: string;
  content: string;
  timePosted: string;
  issueId: number;
}

export const Post = ({ title, content, timePosted, issueId }: PostProps) => {
  return (
    <PostWrapper>
      <Link to={{ pathname: `/post/${issueId}` }}>
        <HeaderPost>
          <Title>{title}</Title>
          <TimePosted>{timePosted}</TimePosted>
        </HeaderPost>
        <Content>{content}</Content>
      </Link>
    </PostWrapper>
  );
};
