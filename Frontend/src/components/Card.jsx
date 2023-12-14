function Card({ children, className, ...props }) {
    return ( 
        <div className={`mt-8 rounded-[4px] bg-white shadow-md ${className}`} {...props}>
            {children}
        </div>
    );
}

export default Card;