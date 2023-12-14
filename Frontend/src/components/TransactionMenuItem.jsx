import Card from './Card';
import CardBody from './CardBody';
import CardImage from './CardImage';
function TransactionMenuItem({ src, name, price, ...props }) {
    return ( 
        <Card>
            <CardImage src={src}/>
            <CardBody>
                <h6 className='text-base font-semibold text-center'>{ name }</h6>
                <p className='text-center text-primary font-semibold mt-2'>{ price }</p>
            </CardBody>
        </Card> 
    );
}

export default TransactionMenuItem;