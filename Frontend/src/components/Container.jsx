function Container({ className = "", children,  ...props }) {
    return ( 
        <div className={`container mx-auto px-4 md:px-0 lg:px-10 ${className}`} {...props}>
            {children}
        </div> 
    );
}

export default Container;