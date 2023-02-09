import Button from '../components/Button';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Listings from '../components/Listings';
import { FaHeart } from 'react-icons/fa'

function shop() {
    const listings = [
        {
            product_id: 1,
            product_name: "cabbage",
            farm_id: 5,
            product_type: "Poultry",
            product_price: 3.99,
            product_description: "This vegetable is mingyang's childhood favourite",
            product_location: "NTUC",
            product_imgfilename: "/Product_Images/broth.png",
            product_rating: 3
        },
        {
            product_id: 2,
            product_name: "KALE",
            farm_id: 3,
            product_type: "Vegetable",
            product_price: 7,
            product_description: "This vegetable is zhekai's mother's favourite",
            product_location: "ShengShiong",
            product_imgfilename: "/Product_Images/kale.png",
            product_rating: 2
        },
        {
            product_id: 7,
            product_name: "egg",
            farm_id: 9,
            product_type: "mammal offspring",
            product_price: 0.37,
            product_description: "Laid by a chicken",
            product_location: "Giant",
            product_imgfilename: "/Product_Images/kang.png",
            product_rating: 1
        },
        {
            product_id: 10,
            product_name: "snail",
            farm_id: 100,
            product_type: "no legs lol",
            product_price: 9.99,
            product_description: "crawl",
            product_location: "Giant",
            product_imgfilename: "/Product_Images/cai.png",
            product_rating: 3
        },
        {
            product_id: 21,
            product_name: "cheetah",
            farm_id: 2,
            product_type: "mammal",
            product_price: 9.81,
            product_description: "runs fast",
            product_location: "Giant",
            product_imgfilename: "/Product_Images/xiao.png",
            product_rating: 3
        },
    ]

    return (
        <div className="background-shop">
            <Header />
            <div className='container-body'>
                <p>Support local produce <FaHeart /></p>
                <p>Order from the comfort of your home, or find out the nearest grocer that sells what you're looking for.</p>
                <br />
                <br />
                <SearchBar />
                <br />
                <Listings listings={listings}/>
            </div>
        </div>
    )
}

export default shop
