import React, {createContext, useReducer} from 'react';
import authIntialState from './intialState/authState';
import ContactsIntialState from './intialState/ContactsIntialState';

import {auth} from './reducers/auth';
import {contacts} from './reducers/contacts';

export const GlobaleContext = createContext();

export function GlobaleProvider(props) {
  const [authState, authDispatch] = useReducer(auth, authIntialState);
  const [contactsState, contactsDispatch] = useReducer(
    contacts,
    ContactsIntialState,
  );

  const value = {authState, contactsState, authDispatch, contactsDispatch};
  return (
    <GlobaleContext.Provider value={value}>
      {props.children}
    </GlobaleContext.Provider>
  );
}
// const Store = createContext();
// const initialState = {};
// function reducer(state, action) {
//   switch (action.type) {
//   }
// }
// export function StoreProvider(props) {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const value = {state, dispatch};
//   return <Store.Provider value={value}>{props.children}</Store.Provider>;
// }
