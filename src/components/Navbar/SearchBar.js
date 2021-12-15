import './SearchBar.css'

const SearchBar = () => (
    <form className="search-bar" action="/" method="get">
        <div>
            <input
                placeholder="Type Here..."
                type="text"
                id="header-search"
            />
            <input type="submit" value="Submit"/>
        </div>
    </form>
);

export default SearchBar;