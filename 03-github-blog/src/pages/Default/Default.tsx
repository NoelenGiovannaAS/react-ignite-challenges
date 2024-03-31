import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { GlobalWrapper } from "./styles";

export const Default = () => {
  return (
    <GlobalWrapper>
      <Header />
      <Outlet />
    </GlobalWrapper>
  );
};
