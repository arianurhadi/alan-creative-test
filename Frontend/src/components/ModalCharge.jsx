import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";
import Table from "./Table";

function ModalCharge({ isOpen, onClose = () => {} }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="grid grid-cols-12 gap-6 divide-x-2">
        <div className="col-span-7">
          <h3 className="text-xl font-bold text-black">Detail Pesanan</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th>#</th>
                <th>Nama</th>
                <th>Foto</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Sate x1</td>
                <td>Foto</td>
                <td>Rp. 30.000</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="col-span-5 px-4 flex justify-center flex-col">
            <p className="text-base text-center font-normal">Uang Pembeli (Rp)</p>
            <Input type="number" name="amount" className="mt-4"/>
            <div className="flex gap-2 mt-4">
              <Button onClick={handleClose} color="light" className="flex-1">
                Close
              </Button>
              <Button color="primary" className="flex-1">Pay!</Button>
            </div>
            <p className="text-danger mt-4">Kembalian: </p>
        </div>
      </div>
    </Modal>
  );
}

export default ModalCharge;
