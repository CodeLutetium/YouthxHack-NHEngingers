import React, {useState} from 'react'

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
   placeholder="Search products"
   onChange={handleChange}
   value={searchInput} 
   class="searchbar" />
  </div>
};

export default SearchBar;