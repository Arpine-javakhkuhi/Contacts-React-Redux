import React, { useState, useEffect } from "react";
import { addContact } from "../../../state/actions/contacts";
import { useSelector } from "react-redux";
import { selectContact } from "../../../state/selectors/contacts";

const ContactsForm = () => {
  const [inputs, setInputs] = useState({});
  const contact = useSelector(selectContact) || {};

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
    addContact(inputs);
  };
  return (
    <>
      <h3>Form</h3>
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
