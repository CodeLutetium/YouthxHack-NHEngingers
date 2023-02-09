

/* 
LISTING REFERS TO THE LISTINGS SHOWN ON THE LANDING PAGE AND SEARCH COMPONENT. NOT THE INDIVIDUAL PRODUCT PAGE UPON CLICKING ON A LISTING.
*/

const Listing = ({ listing }) => {
  return (
    <div className="listing">
        {/* TODO: CHANGE IMG SOURCE TO PRODUCT_IMGFILENAME FROM JSON PAYLOAD */}
        {/* <img src="/sofresh-logo-zip-file/logo-white.png" alt={product_name} /> */}
        <p>{listing.product_name}           {listing.product_price}</p>
        <p>{listing.product_type}</p>
        <p>{listing.farm_name}</p>
    </div>
  )
}

export default Listing

/*
    listing columns:
    product_id, product_name, farm_id, product_type, product_price, product_description, product_location, product_imgfilename
    *** extract farm_id from JSON payload to make another API call to retrieve farm_name from farm table
*/
