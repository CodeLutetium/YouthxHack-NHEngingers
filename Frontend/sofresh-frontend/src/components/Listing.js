

/* 
LISTING REFERS TO THE LISTINGS SHOWN ON THE LANDING PAGE AND SEARCH COMPONENT. NOT THE INDIVIDUAL PRODUCT PAGE UPON CLICKING ON A LISTING.
*/

const Listing = ({ listing }) => {
  return (
    <div className="listing">
        {/* TODO: CHANGE IMG SOURCE TO PRODUCT_IMGFILENAME FROM JSON PAYLOAD */}
        <img src={listing.product_imgfilename} alt={listing.product_name} className="img-listing"/>
        <p>{listing.product_name}<span className="price">${listing.product_price}</span></p>    
        <div className="listing-bottom-text">
            <p>{listing.product_type}</p>
            <p className="farm-name">Produced By: {listing.farm_id}</p> {/* TODO: CHANGE TO FARM_NAME */}
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
