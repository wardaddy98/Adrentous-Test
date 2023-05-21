const initialState = {
  lists: []
};

export const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "SET_LISTS": {
      return { ...state, lists: action.payload };
    }

    case "DELETE_LIST_ITEM": {
      const id = action.payload;

      const lists = state.lists.filter((e) => e.id !== id);
      return { lists };
    }

    case "UPDATE_LIST_ITEM": {
      const lists = state.lists.map((e) => {
        return action.payload.id === e.id ? { ...e, ...action.payload } : e;
      });

      return { lists };
    }

    case "ADD_LIST_ITEM": {
      const lists = [...state.lists];
      lists.push({ ...action.payload, id: lists.length + 1 });
      return { lists };
    }

    default:
      return state;
  }
};

export default mainReducer;
