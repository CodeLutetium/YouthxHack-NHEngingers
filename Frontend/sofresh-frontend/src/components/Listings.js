import Listing from "./Listing"


const Listings = ({ listings }) => {

  return (
    <div className="listings">
        {listings.map(
            (listing) => (<Listing key={listing.product_id} listing={listing}/>)
        )}
    </div>
  )
}

export default Listings