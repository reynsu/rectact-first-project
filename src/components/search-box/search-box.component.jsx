import "./search-box.style.css"; //-> can be use for other components and can affected all the page.

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
