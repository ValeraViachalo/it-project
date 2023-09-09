import { Logo } from "../../components/Logo";
import { HeaderNavigation } from "./HeaderNavigation";

import './Header.scss';

export const Header = () => (
  <header className="header container">
    <Logo />

    <HeaderNavigation />
  </header>
);
