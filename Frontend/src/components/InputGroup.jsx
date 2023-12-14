function InputGroup({ children }) {
    return ( 
    <div className="flex [&>*:nth-child(1)]:rounded-s-none [&>*:nth-child(1)]:rounded-e-sm [&>*:nth-child(1)]:rounded-t-sm [&>*:nth-child(1)]:rounded-b-sm [&>*:nth-child(1)]:border-s-0 [&>*:nth-child(0)]:rounded-e-none [&>*:nth-child(0)]:border-e-0 [&>*:nth-child(0)]:border-s-1 [&>*:nth-child(0)]:border-t-1 [&>*:nth-child(0)]:border-b-1 [&>*:nth-child(1)]:border-gray-300">
        {children}
    </div> 
    );
}

export default InputGroup;