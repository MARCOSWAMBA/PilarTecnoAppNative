const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SET_PAGE_NAME = 'SET_PAGE_NAME';
const SET_LOADING = 'SET_LOADING';
const SET_TOKEN = 'SET_TOKEN';

///state inicial
const stateInitial = {
  pageTitle: '',
  todo: [],
  jwt: false,
  loading: false,
};

export const selectTasks = state => state.app.todo;

export const appSelector = {
  todo: state => state.todo,
  pageTitle: state => state.pageTitle,
  loading: state => state.loading,
  jwt: state => state.jwt,
};

export const appActions = {
  setPagrTitle: title => ({
    type: SET_PAGE_NAME,
    title,
  }),
  setToken: payload => ({
    type: SET_TOKEN,
    payload,
  }),
  addTodo: payload => ({
    type: ADD_TODO,
    payload,
  }),
  setCompletedTodo: payload => ({
    type: COMPLETE_TODO,
    payload,
  }),
  deleteTodo: id => ({
    type: DELETE_TODO,
    id,
  }),
  loading: value => ({
    type: SET_LOADING,
    value,
  }),
};

export const appReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todo: state.todo.map(t => {
          if (t.id === action.payload.id) {
            return {
              ...t,
              completed: action.payload.completed,
              //completed: true
            };
          }
          return t;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter(t => t.id !== action.id),
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        jwt: action.payload,
      };

    default:
      return state;
  }
};
