import { useContext } from "react";
import { ProfileInfoHeader } from "../../components/SummaryInfo/ProfileInfoHeader/ProfileInfoHeader";
import { PostsContext } from "../../contexts/Posts";
import { Post } from "./Post/Post";
import { SearchBar } from "./SearchBar/SearchBar";
import { PostsContainer, PostsWrapper } from "./styles";

export const Blog = () => {
  const {
    dataPosts: { items: posts, total_count },
  } = useContext(PostsContext);

  const isEmpty = !posts.length;
  return (
    <PostsWrapper>
      <ProfileInfoHeader />
      <SearchBar totalPublications={total_count} />
      <PostsContainer $isEmpty={isEmpty}>
        {isEmpty ? (
          <p>Nenhum resultado encontrado.</p>
        ) : (
          posts.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              content={post.body}
              timePosted={post.createdAt}
              issueId={post.number}
            />
          ))
        )}
      </PostsContainer>
    </PostsWrapper>
  );
};
