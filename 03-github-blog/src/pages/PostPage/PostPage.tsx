import { useContext, useEffect, useState } from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import { PostInfoHeader } from "../../components/SummaryInfo/PostInfoHeader/PostInfoHeader";
import { IPost, PostsContext } from "../../contexts/Posts";
import { api } from "../../lib/axios";
import { Content, PostPageWrapper } from "./styles";

export const PostPage = () => {
  const { username, repository } = useContext(PostsContext);
  const { issueId } = useParams();

  const [postPageContent, setPostPageContet] = useState<IPost>({} as IPost);

  const getPostdata = async () => {
    const { data, request } = await api.get(
      `repos/${username}/${repository}/issues/${issueId}`
    );
    setPostPageContet(data);
    console.log(request);
  };

  useEffect(() => {
    getPostdata();
  }, []);

  return (
    <PostPageWrapper>
      <PostInfoHeader {...postPageContent} />
      <Content>
        <Markdown>{postPageContent.body}</Markdown>
      </Content>
    </PostPageWrapper>
  );
};
