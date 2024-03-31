import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface IPost {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  login: string;
  comments: number;
  url: string;
  number: number;
}

export interface IGetPostsResponse {
  total_count: number;
  items: IPost[];
}

interface IPostsProviderProps {
  children: ReactNode;
}

interface PostsContextProps {
  dataPosts: IGetPostsResponse;
  search: string;
  username: string;
  repository: string;
  setSearch: (search: string) => void;
  getPosts: (search?: string) => Promise<void>;
}

export const PostsContext = createContext({} as PostsContextProps);

export const PostsProvider = ({ children }: IPostsProviderProps) => {
  const [search, setSearch] = useState("");
  const [dataPosts, setDataPosts] = useState<IGetPostsResponse>({
    total_count: 0,
    items: [],
  });

  /*const { data, isLoading } = useGetPosts({
    username,
    repository,
    search,
  });*/

  const username = "NoelenGiovannaAS";
  const repository = "react-ignite-challenges";

  const getPosts = async (query?: string) => {
    const { data } = await api.get("search/issues", {
      params: {
        sort: "created",
        order: "desc",
        q: `${query ?? ""}repo:${username}/${repository}`,
      },
    });

    setDataPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const value: PostsContextProps = {
    dataPosts,
    search,
    username,
    repository,
    setSearch,
    getPosts,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
