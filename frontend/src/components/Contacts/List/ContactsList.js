import ContactsItem from "./ContactsItem";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "../../../state/selectors/contacts";
import { getContacts } from "../../../state/actions/contacts";

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts) || [];

  const getAllContacts = async () => {
    dispatch(getContacts());
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <>
      <ol>
        {contacts.map((contact) => {
          return <ContactsItem contact={contact} key={contact.id} />;
        })}
      </ol>
    </>
  );
};

export default ContactsList;
