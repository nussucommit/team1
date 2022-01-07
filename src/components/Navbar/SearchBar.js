import './SearchBar.css'

const SearchBar = () => (
    <form class="form-inline" className="search-bar" action="/" method="get">
        <div>
            <input
                placeholder="Type Here..."
                type="text"
                id="header-search"
            />
            {/* <button class="btn" type="submit">Search</button> */}
            {/* <input type="submit" value="Submit"/> */}
        </div>
    </form>
);

export default SearchBar;