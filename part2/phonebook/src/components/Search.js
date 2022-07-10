const Search = (props) => {
    
    return (
        <div>
        <h3>Search Contacts</h3>
        <input type="text" onChange={(e) => props.handleSearch(e.target.value.toLowerCase())} placeholder="Search Contacts...." />
        </div>
    )
}


export default Search