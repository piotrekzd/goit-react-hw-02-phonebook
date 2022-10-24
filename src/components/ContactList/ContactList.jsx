import PropTypes from 'prop-types';
// import style from './ContactList.module.css'


export const ContactList = ({ contacts, handleDelete }) => (
    <div>
        <ul>
        {contacts.map((contact, id) => (
            <li key={id}>
            {contact.name}: {contact.number}
            <button type="button" onClick={() => handleDelete(contact.id)}>
                Delete
            </button>
            </li>
        ))}
        </ul>
    </div>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
};