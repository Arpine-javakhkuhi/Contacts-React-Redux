import {
  GET_CONTACT,
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
} from "../actions/contacts";

const initialState = {
  contacts: null,
  contact: {
    name: "",
    phone: "",
    id: "",
  },
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        isLoading: false,
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: state.contacts.push(action.payload),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "EDIT_CONTACT":
      return {
        ...state,
        contacts: contacts.map((contact) => {
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
