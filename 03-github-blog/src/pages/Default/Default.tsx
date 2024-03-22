import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { SummaryInfoHeader } from "../../components/SummaryInfoHeader/SummaryInfoHeader";
import { GlobalWrapper } from "./styles";

export const Default = () => {
  return (
    <GlobalWrapper>
      <Header />
      <SummaryInfoHeader />
      <Outlet />
    </GlobalWrapper>
  );
};
