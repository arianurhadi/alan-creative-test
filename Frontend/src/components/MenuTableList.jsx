import Table from "./Table";

function MenuTableList({ menus = [], isLoading = false }) {
  return (
    <Table className="mt-8">
      <thead>
        <tr>
          <th>#</th>
          <th>Nama</th>
          <th>Foto</th>
          <th>Harga</th>
        </tr>
      </thead>
      <tbody>
        {isLoading && <tr>
            <td colSpan={4} className="text-gray-400 text-center">
              Sedang mengambil data...
            </td>
          </tr>}
        {!isLoading && menus.length === 0 && (
          <tr>
            <td colSpan={4} className="text-gray-400 text-center">
              Belum ada menu
            </td>
          </tr>
        )}
        {!isLoading && menus.length > 0 &&
          menus.map((menu, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{menu.name}</td>
              <td>
                <img
                  src={menu.image}
                  alt="Foto Menu"
                  width={100}
                  height={100}
                />
              </td>
              <td>{menu.price}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default MenuTableList;
