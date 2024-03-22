import logo from "assets/logo.svg";
import { CartLink } from "components/ui/CartLink/CartLink";
import { MapPin } from "phosphor-react";
import { Link, NavLink } from "react-router-dom";
import { HeaderContainer, LocaleInfo } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to={"/"} title="Home">
        <img src={logo} alt="" />
      </Link>

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
