type payload = {
  id: number;
  firstName: string;
  lastName: string;
  mobile: string;
  status: string;
};

export const addContact = (payload: payload) => {
  const { id, firstName, lastName, mobile, status } = payload;
  return {
    type: "ADD_CONTACT",
    payload: {
      id,
      firstName,
      lastName,
      mobile,
      status,
    },
  };
};

export const deleteContact = (id: number) => {
  return {
    type: "DELETE_CONTACT",
    id,
  };
};

export const editContact = (payload: payload) => {
  const { id, firstName, lastName, mobile, status } = payload;

  return {
    type: "EDIT_CONTACT",
    payload: {
      id,
      firstName,
      lastName,
      mobile,
      status,
    },
  };
};
