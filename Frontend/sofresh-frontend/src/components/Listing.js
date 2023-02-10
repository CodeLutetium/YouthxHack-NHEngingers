import { useNavigate } from "react-router-dom";

/* 
LISTING REFERS TO THE LISTINGS SHOWN ON THE LANDING PAGE AND SEARCH COMPONENT. NOT THE INDIVIDUAL PRODUCT PAGE UPON CLICKING ON A LISTING.
*/

var listing_var = '';
export {listing_var};

const Listing = ({ listing }) => {
    let navigate = useNavigate();
    const onClick = () => {
        listing_var = listing;
        navigate("/product");
    }

    return (
        <div className="listing" onClick={onClick}>
            <img src={`/Product_Images/${listing.product_imgfile}`} alt={listing.product_name} className="img-listing"/>
            {/* <img src={require(`${listing.product_imgfile}`)} alt={listing.product_name} className="img-listing"/> */}
            <p>{listing.product_name}<span className="price">${listing.product_price}</span></p>    
            <div className="listing-bottom-text">
                <p>{listing.product_type}</p>
                {/* <p className="farm-name">Produced By: {listing.farm_name}</p> */}
                <p>Rating: {listing.product_rating}</p>
            </div>
        </div>
    )
}

export default Listing

/*
    listing columns:
    product_id, product_name, farm_id, product_type, product_price, product_description, product_location, product_imgfilename
    *** extract farm_id from JSON payload to make another API call to retrieve farm_name from farm table
*/
