import { CREATE_CONTACT_FAIL, GET_CONTACTS_SUCCESS } from "../../constants/actionTypes";

export const contacts = (state, {type, payload}) => {
  switch (type) {
    case 'GET_CONTACTS':
      return state;

    case 'FILTER_CONTACTS':
      return state;

    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          data: payload,
          error: null,
        },
      };
     case CREATE_CONTACT_FAIL:
        return {
          ...state,
          createContact: {
            ...state.createContact,
            loading: false,
            error: payload,
          },
        };
      
    default:
      return state;

  }
};
