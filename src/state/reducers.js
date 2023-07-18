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

    default:
      return state;
  }
};

/* export const todosReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATUS":
      return {
        ...state,
        data: state.data.map((el) => {
          if (el.id === action.payload) return { ...el, done: !el.done };
          else return el;
        }),
      };

    default:
      return state;
  }
};
 */
