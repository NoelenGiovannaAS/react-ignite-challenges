import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import * as Styles from "./styles";

export const Header = () => {
  return (
    <Styles.HeaderContainer>
      <nav>
        <NavLink to="/" end title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </Styles.HeaderContainer>
  );
};
