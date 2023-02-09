import Button from '../components/Button';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { FaHeart } from 'react-icons/fa'

function main() {
    return (
        <div className="container">
            <Header />
            <div className='container-body'>
                <p>Support local produce <FaHeart /></p>
                <p>Order from the comfort of your home, or find out the nearest grocer that sells what you're looking for.</p>
                <br />
                <br />
                <div className='searchbar-outer'>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}

export default main
