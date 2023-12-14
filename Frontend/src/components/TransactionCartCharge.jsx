import { useState } from "react";
import ModalCharge from "./ModalCharge";
import Button from "./Button";

function TransactionCartCharge() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(prevState => !prevState);
    }

    return ( 
        <>
            <Button onClick={handleToggle} color="primary" className="w-full mt-3">Charge RP. 40.000</Button>
            <ModalCharge onClose={handleToggle} isOpen={isOpen}/>
        </>
     );
}

export default TransactionCartCharge;