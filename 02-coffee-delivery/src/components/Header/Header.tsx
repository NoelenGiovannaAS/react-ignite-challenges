import { CartLink } from "components/ui/CartLink/CartLink";
import { MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { HeaderContainer, LocaleInfo } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <nav>
        <LocaleInfo>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </LocaleInfo>
        <NavLink to="/checkout" title="Carrinho">
          <CartLink />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
