import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ContactsForm from "./components/Contacts/Form/ContactsForm";
import ContactsList from "./components/Contacts/List/ContactsList";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "./state/selectors/contacts";
import { getContacts } from "./state/actions/contacts";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts) || [];
  console.log("contactsq1111111111", contacts);

  const getAllContacts = async () => {
    dispatch(getContacts());
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div className="wrapper">
      <Header />

      <ContactsForm />

      {contacts && contacts.length ? (
        <ContactsList contacts={contacts} />
      ) : (
        <p>No contacts</p>
      )}
    </div>
  );
}

export default App;
