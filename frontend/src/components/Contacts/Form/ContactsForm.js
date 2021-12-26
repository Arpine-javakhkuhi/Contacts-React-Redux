import React, { useState, useEffect } from "react";
import { addContact, editContact } from "../../../state/actions/contacts";
import { useDispatch, useSelector } from "react-redux";
import {
  selectContact,
  selectEdit,
  selectError,
} from "../../../state/selectors/contacts";

const ContactsForm = () => {
  const [inputs, setInputs] = useState({});
  const contact = useSelector(selectContact) || {};
  const edit = useSelector(selectEdit);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    setInputs(contact);
  }, [contact]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!edit) {
      dispatch(addContact(inputs));
    } else {
      dispatch(editContact(inputs));
    }
  };
  return (
    <>
      <h3>{edit ? "Edit contact" : "Add contact"}</h3>
      {error ? <p className="error">{error}</p> : null}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={inputs.name || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone number:
          <input
            type="text"
            name="phone"
            placeholder="098764758"
            value={inputs.phone || ""}
            onChange={handleChange}
            required
          />
        </label>
        <input className="submit" type="submit" value="Submit" />
      </form>
    </>
  );
};

export default ContactsForm;
