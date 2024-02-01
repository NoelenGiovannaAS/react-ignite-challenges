import { CartLink } from "components/ui/CartLink/CartLink";
import { MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import * as Styles from "./styles";

export const Header = () => {
  return (
    <Styles.HeaderContainer>
      <img src={logo} alt="" />

      <nav>
        <Styles.LocaleInfo>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Styles.LocaleInfo>
        <NavLink to="/cart" title="Carrinho">
          <CartLink />
        </NavLink>
      </nav>
    </Styles.HeaderContainer>
  );
};
