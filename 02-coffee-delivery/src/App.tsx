import { Checkout } from "pages/Checkout/Checkout";
import { Success } from "pages/Success/Success";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Default } from "./layouts/Default";
import { Home } from "./pages/Home/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
