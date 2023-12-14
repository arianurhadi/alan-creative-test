import { Link } from "react-router-dom";

function NavTabItem( { className, children, active, to, ...props } ) {
    return ( 
        <Link to={to} className={`block px-8 pb-2 font-medium border-b-2 hover:border-primary group ${active ? 'border-primary' : 'border-transparent'}`} {...props}>
             <div className={`text-base group-hover:text-primary ${active ? 'text-primary' : 'text-black'}`}>
                { children }
            </div>
        </Link>
     );
}

export default NavTabItem;