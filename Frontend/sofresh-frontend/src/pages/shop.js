import Button from '../components/Button';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Listings from '../components/Listings';
import { FaHeart } from 'react-icons/fa'
import { useState, useEffect } from 'react'

function Shop() {
    const [products, setProducts] = useState([]);

    async function getFarmName(farm, farm_id) {
        const response = await fetch(`http://localhost:3001/api/farm/${farm_id}`, {
            method: 'GET',
        })
        const farmData = await response.json()
        console.log(farmData)
        let farmName = farmData[0].farm_name
        console.log(farmName)
        farm.farm_name = farmName
    }

    async function getAllProducts() {
        const response = await fetch('http://localhost:3001/api/product', {
            method: 'GET',
        })
        const responseData = await response.json()
        // console.log(responseData)
        setProducts(responseData)

        for (let prod of responseData) {   
            getFarmName(prod, prod.farm_id)
        }
    }
    
    useEffect(() =>{
        getAllProducts();
      },[])

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
                <Listings listings={products}/>
            </div>
        </div>
    )
}

export default Shop
