function CardImage({ src, ...props }) {
    return ( 
        <img src="/vite.svg" className="w-full h-[100px] md:h-[200px] object-cover" {...props} /> 
    );
}

export default CardImage;