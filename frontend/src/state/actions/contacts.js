export const GET_CONTACTS = "GET_CONTACTS";
export const GET_CONTACT = 'GET_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const ADD_CONTACT = 'ADD_CONTACT';
const baseUrl = "http://localhost:5050/api/contacts";

export const getContacts = () => {
  return async (dispatch) => {
    const resp = await fetch(baseUrl);
    const contacts = await resp.json();
    console.log('contacts after fetch', contacts)
    // setContacts(contacts);
    dispatch({
      type: GET_CONTACTS,
      payload: contacts,
    });
  };
};

export const getContact = (id) => {
  return async (dispatch) => {
    console.log('id', id)
    const resp = await fetch(`${baseUrl}/${id}`);
    const contact = await resp.json();
    console.log('contact after getting', contact);
    dispatch({
      type: GET_CONTACT,
      payload: contact
    });
  }
}

export const addContact = (newContact) => {
  console.log('adddddddddddddddddddd'. newContact)
  return async (dispatch) => {
    console.log('1111111111111')
      const resp = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
      });
      const result = await resp.json();
      console.log('result', result)
      // .then(resp => {
      //   console.log('resppppppp')
      //   return resp.json();
      // }).then(resp => {
      //   if (resp && resp.error) {
      //     console.log('Error: ', resp.error)
      //   } else {
      //     dispatch({
      //       type: ADD_CONTACT,
      //       payload: newContact
      //     })
      //   }
      // })
      // .then((resp) => {
      //   return resp.json();
      // })
      // .then((resp) => {
      //   if (resp && resp.error) {
      //     setError(resp.error);
      //   } else {
      //     store.despatch({
      //       type: 'ADD',
      //       payload: {
      //         name: resp.name,
      //         phone: resp.phone,
      //         id: resp.id,
      //       }
      //     })
      //     // setContacts([
      //     //   ...contacts,
      //       // {
      //       //   name: resp.name,
      //       //   phone: resp.phone,
      //       //   id: resp.id,
      //       // },
      //     // ]);
      //     setError(false);
      //     setContact({});
      //     setEdit(false);
      //   }
      // });
  }
}

export const deleteContact = (id) => {
  return async (dispatch) => {
      fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
      }).then((resp) => {
        if (resp.error) {
          // setError(resp.error);
          console.log('ERORR: ', resp.error);
        } else {
          console.log('id for deleting', id);
          dispatch({
            type: DELETE_CONTACT,
            payload: id
          })
          // setContacts(contacts.filter((contact) => contact.id !== id));
        }
      });
      // .then((resp) => {
      //   console.log('resp', resp);
      //   return getContacts();
      // })
  }
}

export const editContact = (id, name, phone) => {
  return async () => {
    // const editContact = (updatedContact) => {
      fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          name,
          phone
        }),
      })
        // .then((resp) => {
        //   return resp.json();
        // })
        // .then((resp) => {
        //   if (resp && resp.error) {
        //     setError(resp.error);
        //   } else {
        //     setError(false);
        //     store.despatch({
        //       type: 'EDIT',
        //       payload: updatedContact
        //     })
        //     // setContacts(
        //     //   contacts.map((contact) => {
        //     //     if (contact.id === updatedContact.id) {
        //     //       contact = updatedContact;
        //     //     }
        //     //     return contact;
        //     //   })
        //     // );
        //     setContact({});
        //     setEdit(false);
        //   }
        // });
    // };
  
  }
}

// export const getContacts = (payload) => ({
//     type: GET,
//     payload
// });

// export const addContact = () => ({
//   type: ADD,
//   payload,
// });

//continue!!!!!!!!!!
