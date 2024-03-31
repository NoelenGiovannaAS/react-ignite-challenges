import { KeyboardEvent, useContext, useState } from "react";
import { PostsContext } from "../../../contexts/Posts";
import { HeaderSearchBar, Input, SearchBarWrapper } from "./styles";

interface SearchBarProps {
  totalPublications: number;
}

export const SearchBar = ({ totalPublications }: SearchBarProps) => {
  const { getPosts } = useContext(PostsContext);
  const [searchBar, setSearch] = useState("");

  const handleInputSearch = (e: KeyboardEvent) => {
    e.key === "Enter" && getPosts(searchBar);
  };

  return (
    <SearchBarWrapper>
      <HeaderSearchBar>
        <h3>Publicações</h3>
        <h5>{`${totalPublications} publicações`}</h5>
      </HeaderSearchBar>
      <Input
        placeholder="Buscar conteúdo"
        onKeyDown={handleInputSearch}
        value={searchBar}
        onChange={(e) => setSearch(e.target.value)}
      />
    </SearchBarWrapper>
  );
};
