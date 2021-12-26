export const GET_CONTACTS = "GET_CONTACTS";
export const GET_CONTACT = "GET_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const ADD_CONTACT = "ADD_CONTACT";
const baseUrl = "http://localhost:5050/api/contacts";

export const getContacts = () => {
  return async (dispatch) => {
    const resp = await fetch(baseUrl);
    const contacts = await resp.json();
    dispatch({
      type: GET_CONTACTS,
      payload: contacts,
    });
  };
};

export const getContact = (id) => {
  return async (dispatch) => {
    const resp = await fetch(`${baseUrl}/${id}`);
    const contact = await resp.json();
    dispatch({
      type: GET_CONTACT,
      payload: contact,
    });
  };
};

export const addContact = (newContact) => {
  return async (dispatch) => {
    const resp = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    });
    const result = await resp.json();
    dispatch({
      type: ADD_CONTACT,
      payload: newContact,
    });
  };
};

export const deleteContact = (id) => {
  return async (dispatch) => {
    const resp = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };
};

export const editContact = (updatedContact) => {
  return async () => {
    const resp = fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedContact),
    });
    const result = await resp.json();
    dispatch({
      type: ADD_CONTACT,
      payload: newContact,
    });
  };
};
