import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { PostsProvider } from "./contexts/Posts";
import { Router } from "./routes/router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export const App = () => {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <PostsProvider>
          <Router />
        </PostsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
