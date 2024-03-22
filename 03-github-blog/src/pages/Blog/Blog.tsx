import { Post } from "./Post/Post";
import { SearchBar } from "./SearchBar/SearchBar";
import { PostsContainer, PostsWrapper } from "./styles";

export const Blog = () => {
  const posts = [
    {
      title: "Title 1",
      timePosted: "1 hour ago",
      text: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in",
    },
    {
      title: "Title 1",
      timePosted: "1 hour ago",
      text: "Text 1",
    },
    {
      title: "Title 1",
      timePosted: "1 hour ago",
      text: "Text 1",
    },
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
          <Post
            title={post.title}
            content={post.text}
            timePosted={post.timePosted}
          />
        ))}
      </PostsContainer>
    </PostsWrapper>
  );
};
