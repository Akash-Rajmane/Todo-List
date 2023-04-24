const initialState = {
    todos: [],
    cardStyle: 'basic',
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        const { id, todo, strike, themeLight } = action.payload;
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: id,
              todo: todo,
              strike: strike,
              themeLight: themeLight,
            },
          ],
        };
  
      case 'DELETE_TODO':
        const newTodos = state.todos.filter((el) => el.id !== action.id);
        return {
          ...state,
          todos: newTodos,
        };
  
      case 'COMPLETE_TODO':
        const updatedTodos = state.todos.map((el) => {
          if (el.id === action.id) {
            return { ...el, strike: !el.strike };
          }
          return el;
        });
  
        return {
          ...state,
          todos: updatedTodos,
        };
  
      case 'EDIT_TODO':
        const editedTodos = state.todos.filter((el) =>
          el.id === action.payload.id ? Object.assign(el, action.payload) : el
        );
  
        return {
          ...state,
          todos: editedTodos,
        };
  
      case 'TOGGLE':
        const modifiedTodos = state.todos.map((el) => {
          if (el.id === action.id) {
            el.themeLight = !el.themeLight;
          }
          return el;
        });
        
        return {
          ...state,
          todos: modifiedTodos,
        };
  
      case 'SET_CARDSTYLE':
        const { cardStyle } = action.payload;
        return {
          ...state,
          cardStyle: cardStyle,
        };
  
      default:
        return state;
    }
  };
  
  export default todoReducer;
  