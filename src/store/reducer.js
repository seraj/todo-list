export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      if (!action.payload) {
        return state;
      }
      if (state.todos?.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        todos: [...state?.todos, action.payload],
      };
    case "COMPLETE":
      return {
        ...state,
        todos: state.todos?.filter((t) => t !== action.payload),
      };
    case "EDIT":
      return {
        ...state,
        editTask: action.payload,
      };
    case "UPDATE_TODO":
      return {
        ...state,
        editTask: {},
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...action.payload } : todo
        ),
      };
    case "CANCEL_UPDATE":
      return {
        ...state,
        editTask: {},
      };
    default:
      return state;
  }
}
