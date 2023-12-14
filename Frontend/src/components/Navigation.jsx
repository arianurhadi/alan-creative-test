import { Link } from "react-router-dom";
import Container from "./Container";
import NavTab from "./NavTab";
import NavTabItem from "./NavTabItem";

function Navigation() {
  return (
    <NavTab>
      <NavTabItem to="/">Food</NavTabItem>
      <NavTabItem to="/transaksi">Transaksi</NavTabItem>    
    </NavTab>
  );
}

export default Navigation;
