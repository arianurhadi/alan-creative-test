import TransactionMenuItem from "./TransactionMenuItem";

function TransactionMenuList() {
    return ( 
        <div className="md:col-span-8 p-5">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                <TransactionMenuItem name={'Title'} price={50000}/>
                <TransactionMenuItem/>
                <TransactionMenuItem/>
                <TransactionMenuItem/>
            </div>
        </div>
     );
}

export default TransactionMenuList;