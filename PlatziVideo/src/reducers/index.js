const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE': {
      const found = state.myList.filter((item) => item.id === action.payload.id);
      if (found.length === 0) {
        return {
          ...state,
          myList: [...state.myList, action.payload],
        };
      }
      return state;
    }
    break;
    case 'DELETE_FAVORITE': {
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload),
      };
    }
    break;
    case 'LOGIN_REQUEST': {
      return {
        ...state,
        user: action.payload,
      };
    }
    break;
    default:
      return state;
  }
};

export default reducer;
