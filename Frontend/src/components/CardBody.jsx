function CardBody({ children, className = "", ...props }) {
    return ( 
        <div className={`p-4 ${className}`} {...props}>
            {children}
        </div>
     );
}

export default CardBody;