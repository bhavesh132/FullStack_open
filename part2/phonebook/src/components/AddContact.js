const AddContact = (props) => {
    const handleNameChange = (e) => {
        props.setContactName(e.target.value)
    }

    const handleMobileChange = (e)  => {
        props.setContactMobile(e.target.value)
    }

    return (
        <div>
        <form onSubmit={props.handleAddContact}>
            <input type="text" name="contactname" value={props.contactName} placeholder="Enter Name..." onChange={handleNameChange} /><br />
            <input type="text" name="contactPhone" value={props.contactMobile} placeholder="Enter Phone..."  onChange={handleMobileChange} /><br />
            <button type="submit">Add Contact</button>
        </form>
        </div>
    )
}


export default AddContact