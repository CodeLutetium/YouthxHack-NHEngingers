import Listing from "./Listing"


const Listings = ({ listings }) => {
  return (
    <>
        {listings.map(
            (listing) => (<Listing key={listing.product_id} listing={listing}/>)
        )}
    </>
  )
}

export default Listings