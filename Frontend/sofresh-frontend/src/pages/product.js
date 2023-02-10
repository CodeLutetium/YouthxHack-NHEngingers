import Header from "../components/Header"
import { listing_var } from '../components/Listing'

// TODO: CHANGE LISTING TO BE A PROP PASSED IN FROM THE SHOP PAGE

function product() {

    return (
        <div>
            <>
                <Header />
            </>
            <div className="background">
                <div className="container-product">
                    <img src={`/Product_Images/${listing_var.product_imgfile}`} alt={listing_var.product_name} className="img-product"/>

                    <div className="product-details">
                        <h2 className="product-label">Product: <span className="product-detail">{listing_var.product_name}</span></h2>
                        <h2 className="product-label">ID: <span className="product-detail">{listing_var.product_id}</span></h2>
                        <h2 className="product-label">Price: <span className="product-detail-price-border"><span className="product-detail-price">${listing_var.product_price}</span></span></h2>
                        <br />
                        <h2 className="product-label">Rating: <span className="product-detail">{listing_var.product_rating}</span></h2>
                        <h2 className="product-label">Produced By: <span className="product-detail">{listing_var.farm_name}</span></h2>
                        <h2 className="product-label">Category: <span className="product-detail">{listing_var.product_type}</span></h2>
                        <h2 className="product-label">Description: <span className="product-detail">{listing_var.product_description}</span></h2>
                        <h2 className="product-label">Nearest Store: <span className="product-detail">{listing_var.product_location}</span></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default product

/*
    listing columns:
    product_id, product_name, farm_id, product_type, product_price, product_description, product_location, product_imgfilename
    *** extract farm_id from JSON payload to make another API call to retrieve farm_name from farm table
*/