const initialState = {
  contacts: [],
};

const contactReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_CONTACT":
      const { id, firstName, lastName, mobile, status } = action.payload;
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            id,
            firstName,
            lastName,
            mobile,
            status,
          },
        ],
      };

    case "DELETE_CONTACT":
      const newContacts = state.contacts.filter(
        (el: any) => el.id !== action.id
      );
      return {
        ...state,
        contacts: newContacts,
      };

    case "EDIT_CONTACT":
      const editedContacts = state.contacts.filter((el: any) =>
        el.id === action.payload.id ? Object.assign(el, action.payload) : el
      );
      console.log(editedContacts, "editedContacts");
      return {
        ...state,
        contacts: editedContacts,
      };

    default:
      return state;
  }
};

export default contactReducer;
