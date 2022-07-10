import './style.css'

const ContactDetail = (props) => {
    return (
        <>
            <td>{props.data.name}</td>
            <td>{props.data.number}</td>
            <td><button onClick={props.handleDelete}>Delete</button></td>
        </>
    )
}


export default ContactDetail