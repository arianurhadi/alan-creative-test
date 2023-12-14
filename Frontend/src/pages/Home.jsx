import { useEffect } from "react";
import Container from "../components/Container";
import Menu from "../components/Menu";

function HomePage() {
  return (
    <Container>
      <h6 className="text-gray-400 text-base mt-8">
        Tambahkan menu makanan yanga ada di resto
      </h6>

      <Menu />
    </Container>
  );
}

export default HomePage;
