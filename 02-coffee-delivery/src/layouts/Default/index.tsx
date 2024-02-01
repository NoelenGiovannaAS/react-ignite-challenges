import { Header } from "components/Header/Header.tsx";
import { Outlet } from "react-router-dom";
import * as Styles from "./styles.ts";

export const Default = () => {
  return (
    <Styles.Container>
      <Header />
      <Outlet />
    </Styles.Container>
  );
};
