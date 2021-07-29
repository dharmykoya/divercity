import PropTypes from "prop-types";
import Button from "../button/Button";

const SearchBar = ({ searchValue, handleSearch, handleSearchValue }) => (
  <form onSubmit={handleSearch}>
    <input
      type="search"
      id="search"
      placeholder="search for jobs"
      className="border px-2 py-2 rounded-md mr-4 "
      value={searchValue}
      onChange={handleSearchValue}
    />
    <Button
      buttonText="search"
      submitType
      handleClick={() => handleSearch(searchValue)}
      customClass="bg-blue-500 text-white text-xl font-bold px-6 py-2 rounded-md"
    />
  </form>
);

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleSearchValue: PropTypes.func.isRequired,
};

export default SearchBar;
