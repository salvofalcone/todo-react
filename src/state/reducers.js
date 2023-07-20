// state => determina come lo stato era precedentemente definito
// action => per scegliere quale tipo di modifica effettuare sullo stato

export const todosReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATUS":
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };

    case "ADD_NEW_TODO":
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: Math.floor(Math.random() * 1000),
            todo: action.payload,
            completed: false,
          },
        ],
      };

    case "SET_DATABASE":
      return {
        ...state,
        todos: action.payload,
      };

    case "REMOVE_TODO":
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};
