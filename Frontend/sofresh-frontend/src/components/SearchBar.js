import { useState } from 'react'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  
  const products = [
  
  ];

  // Return matches into the search bar
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  
    if (searchInput.length > 0) {
      products.filter((products) => {
        return products.name.match(searchInput);
      })
    };
  };

  return <div>
  <input
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />

</div>
}

export default SearchBar;