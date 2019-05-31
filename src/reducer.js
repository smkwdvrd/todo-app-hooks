export default function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      if (!action.payload) {
        return state;
      }
      if (state.todos.includes(action.payload)) {
        return state;
      }

      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter(t => t !== action.payload)
      };
    case "REFRESH": {
      return {
        ...state,
        todos: action.payload
      };
    }
    case "INPUT_ADD": {
      return {
        ...state,
        input: "INPUT_ADD"
      };
    }
    case "INPUT_SEARCH": {
      return {
        ...state,
        input: "INPUT_SEARCH"
      };
    }
    case "SEARCH": {
      return {
        ...state,
        query: action.payload
      };
    }
    case "ALL_FILTER": {
      return {
        ...state,
        filter: "all"
      };
    }
    case "NEW_FILTER": {
      return {
        ...state,
        filter: "new"
      };
    }
    case "COMPLETED_FILTER": {
      return {
        ...state,
        filter: "completed"
      };
    }

    default:
      return state;
  }
}
