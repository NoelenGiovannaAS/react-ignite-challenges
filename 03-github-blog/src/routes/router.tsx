import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Blog } from "../pages/Blog/Blog";
import { Default } from "../pages/Default/Default";
import { PostPage } from "../pages/PostPage/PostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Blog />,
      },
      {
        path: "/post/:issueId",
        element: <PostPage />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
