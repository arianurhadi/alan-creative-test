import Button from "./Button";
import Card from "./Card";
import CardBody from "./CardBody";
import TransactionCartCharge from "./TransactionCartCharge";

function TransactionCart() {
  return (
    <div className="md:col-span-4 sticky">
      <Card>
        <CardBody>
          <div className="flex justify-center gap-2">
            <h5 className="text-lg text-black font-medium">Pesanan</h5>
          </div>
          <ul className="space-y-2">
            <li>
              <div className="grid grid-cols-12 lg:gap-3 items-center">
                <div className="col-span-3">
                  <img
                    src="/vite.svg"
                    alt=""
                    className="md:w-[50px] md:h-[50px] lg:w-[80px] lg:h-[80px]"
                  />
                </div>
                <div className="col-span-5">
                  <span className="text-black font-semibold text-xs md:text-base">
                    Nama Menu
                  </span>
                </div>
                <div className="col-span-4">
                  <p className="font-bold text-xs md:text-base">
                    x 1 <span className="text-primary ms-2">Rp.200.000</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <Button color="outline-danger" className="w-full mt-3">
            Clear Cart
          </Button>
          <div className="flex gap-2 mt-3">
            <Button color="success" className="flex-1">
              Save Bill
            </Button>
            <Button color="success" className="flex-1">
              Print Bill
            </Button>
          </div>
          <TransactionCartCharge />
        </CardBody>
      </Card>
    </div>
  );
}

export default TransactionCart;
