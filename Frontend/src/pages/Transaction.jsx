import Container from '../components/Container';
import TransactionCart from '../components/TransactionCart';
import TransactionMenuList from '../components/TransactionMenuList';

function TransactionPage() {
    return ( 
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen mt-8">
                <TransactionMenuList/>
                <TransactionCart/>
            </div>
        </Container>
     );
}

export default TransactionPage;