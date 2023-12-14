function Table({ className = "", children, ...props }) {

    let headClasses = '[&_thead]:bg-gray-200';

    return ( 
        <div className="relative overflow-x-auto">
            <table className={`table-auto w-full text-left [&_tr:nth-child(even)]:bg-gray-100 [&_th]:p-4 [&_td]:p-4 ${headClasses} ${className}`} {...props}>
                { children }
            </table>
        </div>
     );
}

export default Table;