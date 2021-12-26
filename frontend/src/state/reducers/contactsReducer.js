import {
  GET_CONTACT,
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  EDIT_CONTACT,
} from "../actions/contacts";

const initialState = {
  contacts: null,
  contact: {
    name: "",
    phone: "",
  },
  edit: false,
  error: null,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload,
        edit: action.edit,
      };
    case ADD_CONTACT:
      return {
        ...state,
        error: action.error,
        contact: action.error
          ? state.contact
          : {
              name: "",
              phone: "",
            },
        contacts: action.error
          ? state.contacts
          : [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        error: action.error,
        contacts: action.error
          ? state.contacts
          : state.contacts.filter((contact) => contact.id !== action.payload),
      };
    case EDIT_CONTACT:
      return {
        ...state,
        error: action.error,
        edit: action.error ? action.edit : false,
        contact: action.error
          ? state.contact
          : {
              name: "",
              phone: "",
            },
        contacts: action.error
          ? state.contacts
          : state.contacts.map((contact) => {
              if (contact.id === action.payload.id) {
                contact = action.payload;
              }
              return contact;
            }),
      };
    default:
      return state;
  }
};

export default contactsReducer;
