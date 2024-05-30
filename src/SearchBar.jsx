export const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="input-group mb-3">
        <button className="btn" type="button" id="button-addon1">
          <ion-icon name="search-outline"></ion-icon>
        </button>
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        ></input>
      </div>
    </div>
  );
};

export default SearchBar;
