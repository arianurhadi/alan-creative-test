import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import Card from "./Card";
import CardBody from "./CardBody";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Table from "./Table";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuTableList from "./MenuTableList";
import { fetchAllMenus } from "../http";

function Menu() {
  const [menus, setMenus] = useState([]);
  const [isFecthing, setIsFecthing] = useState(false);

  useEffect(() => {
    async function fetchMenus() {
      try {
        setIsFecthing(true);

        const menus = await fetchAllMenus();

        setMenus(menus);
      } catch (error) {
        console.log(error);
      }
      setIsFecthing(false);
    }

    fetchMenus();
  }, []);

  return (
    <Card>
      <CardBody className="p-8">
        <Link to="/food/create">
          <Button>
            <FontAwesomeIcon icon={faPlus} />
            Tambah Menu
          </Button>
        </Link>

        <MenuTableList menus={menus.data} isLoading={isFecthing} />
      </CardBody>
    </Card>
  );
}

export default Menu;
