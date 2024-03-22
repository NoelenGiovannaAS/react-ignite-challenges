import Markdown from "react-markdown";
import { PostPageWrapper } from "./styles";

export const PostPage = () => {
  const markdown = `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |
  `;

  return (
    <PostPageWrapper>
      <Markdown>{markdown}</Markdown>
    </PostPageWrapper>
  );
};
