const SearchBar = () => (
    <form action="/" method="get">
        <div>
            <input
                placeholder="Type Here..."
                type="text"
                id="header-search"
            />
            {/* <button className="submit-button" type="submit">Search</button> */}
        </div>
    </form>
);

export default SearchBar;