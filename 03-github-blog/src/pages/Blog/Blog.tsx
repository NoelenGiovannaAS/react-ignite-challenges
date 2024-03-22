import { Post } from "./Post/Post";
import { SearchBar } from "./SearchBar/SearchBar";
import { PostsContainer, PostsWrapper } from "./styles";

export const Blog = () => {
  const posts = [
    {
      title: "Title 1",
      timePosted: "1 hour ago",
      text: "Text 1",
    },
  ];
  return (
    <PostsWrapper>
      <SearchBar />
      <PostsContainer>
        {posts.map((post) => (
          <Post title={post.title} content={post.text} />
        ))}
      </PostsContainer>
    </PostsWrapper>
  );
};
