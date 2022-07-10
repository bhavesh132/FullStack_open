const Search = (props) => {

    const handleChange = (e) => {
        props.setSearchText(e.target.value)
    }

    return (
        <div>
            <label> Enter Country Name: </label>
            <input type="text" onChange={handleChange} placeholder="Search" />
        </div>
    )
}

export default Search