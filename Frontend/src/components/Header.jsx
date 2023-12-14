import { Link } from "react-router-dom";
import Logo from "../assets/react.svg";
import Navigation from "./Navigation";
import Container from "./Container";

function Header() {
  return (
    <header>
      <div className="bg-primary p-2">
        <Container>
            <Link to="/">
                <div className="flex gap-2 text-lg text-white font-semibold">
                <img
                    alt="logo alan resto"
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top me-2"
                />
                Alan Resto
                </div>
            </Link>
        </Container>
      </div>

      <Navigation />
    </header>
  );
}

export default Header;
