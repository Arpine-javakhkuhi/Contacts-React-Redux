export const GET_CONTACTS = "GET_CONTACTS";
export const GET_CONTACT = "GET_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const ADD_CONTACT = "ADD_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
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
      edit: true,
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
    if (result.error) {
      dispatch({
        type: ADD_CONTACT,
        error: result.error,
      });
    } else {
      dispatch({
        type: ADD_CONTACT,
        payload: result,
      });
    }
  };
};

export const editContact = (updatedContact) => {
  return async (dispatch) => {
    const resp = await fetch(`${baseUrl}/${updatedContact.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedContact),
    });
    const result = await resp.json();
    if (result.error) {
      dispatch({
        type: EDIT_CONTACT,
        error: result.error,
        edit: true,
      });
    } else {
      dispatch({
        type: EDIT_CONTACT,
        payload: result,
      });
    }
  };
};

export const deleteContact = (id) => {
  return async (dispatch) => {
    const resp = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });
    if (resp.error) {
      dispatch({
        type: DELETE_CONTACT,
        payload: id,
        error: resp.error,
      });
    } else {
      dispatch({
        type: DELETE_CONTACT,
        payload: id,
      });
    }
  };
};
