import ContactsItem from "./ContactsItem";
import { useSelector } from "react-redux";
import { selectContacts } from "../../../state/selectors/contacts";

const ContactsList = () => {
  const contacts = useSelector(selectContacts) || [];

  return (
    <ol>
      {contacts.map((contact) => {
        return <ContactsItem contact={contact} key={contact.id} />;
      })}
    </ol>
  );
};

export default ContactsList;
