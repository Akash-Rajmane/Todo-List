export const addTodo = (payload) => {
    const { id, todo, strike, themeLight } = payload;
    return {
      type: 'ADD_TODO',
      payload: {
        id: id,
        todo: todo,
        strike: strike,
        themeLight: themeLight,
      },
    };
  };
  
  export const deleteTodo = (id) => {
    return {
      type: 'DELETE_TODO',
      id,
    };
  };
  
  export const completeTodo = (id) => {
    return {
      type: 'COMPLETE_TODO',
      id,
    };
  };
  
  export const editTodo = (payload) => {
    const { id, todo, strike, themeLight } = payload;
    return {
      type: 'EDIT_TODO',
      payload: {
        id: id,
        todo: todo,
        strike: strike,
        themeLight: themeLight,
      },
    };
  };
  
  export const toggleTheme = (id) => {
    return {
      type: 'TOGGLE',
      id,
    };
  };
  
  export const setCardStyle = (cardStyle) => {
    return {
      type: 'SET_CARDSTYLE',
      payload: {
        cardStyle: cardStyle,
      },
    };
  };
  