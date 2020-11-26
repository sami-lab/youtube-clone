const initialState = {
  data: [],
  loading: false,
  darkTheme: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        data: action.payload,
      };
    case 'loading':
      return {
        ...state,
        loading: action.payload,
      };
    case 'ToggleTheme':
      return {
        ...state,
        darkTheme: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
