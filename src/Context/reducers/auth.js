export const auth = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return state;

    case 'LOGOUT':
      return state;
    default:
      return state;
  }
};
