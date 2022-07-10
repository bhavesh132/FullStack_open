import ContactDetail from './ContactDetail'
import './style.css'
const ContactList = (props) => {

    return (
        <div className='list'>
            <table>
                <tbody>
        {props.contacts.map((contact) => (
            <tr key={contact.id}>
            <ContactDetail data={contact} key={contact.id} handleDelete={() => props.deleteContact(contact)}/>
            </tr>
        ))}
        </tbody>
        </table>
        </div>
    )
}


export default ContactList