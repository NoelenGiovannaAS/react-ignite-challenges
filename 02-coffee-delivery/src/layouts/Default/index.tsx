import { Header } from "components/Header/Header.tsx";
import { Outlet } from "react-router-dom";
import { Container } from "./styles.ts";

export const Default = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};
