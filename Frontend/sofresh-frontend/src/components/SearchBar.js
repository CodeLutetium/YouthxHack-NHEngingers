import { useState } from 'react'

const SearchBar = ({ sendSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  
  const products = [
  
  ];

  // Return matches into the search bar
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return <div>
  <input
    type="search"
    placeholder="&#xf002;"
    onChange={handleChange}
    value={searchInput} 
    onSubmit={() => 
      sendSearch(searchInput)
    }
    className="searchbar" />
  </div>
};

export default SearchBar;