import { useDispatch } from "react-redux";
import { getContact, deleteContact } from "../../../state/actions/contacts";

const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {contact.name} {contact.phone}
      <button onClick={() => dispatch(getContact(contact.id))}>
        Edit contact
      </button>
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete contact
      </button>
    </li>
  );
};

export default ContactsItem;
