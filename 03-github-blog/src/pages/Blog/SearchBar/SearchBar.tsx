import { HeaderSearchBar, Input, SearchBarWrapper } from "./styles";
export const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <HeaderSearchBar>
        <h3>Publicações</h3>
        <h5>6 publicações</h5>
      </HeaderSearchBar>
      <Input placeholder="Buscar conteúdo" />
    </SearchBarWrapper>
  );
};
