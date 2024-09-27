//reducer

// building initial state below that will be default rendered on page refresh
export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 1
  },

  {
    item: "Weightlifting 30 Min",
    completed: false,
    id: 2
  },

  {
    item: "Start Redux project",
    completed: false,
    id: 3
  },

  {
    item: "Launch your web dev career",
    completed: false,
    id: 4
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    // ADD

    // our switch function above will read which action we are passing into it and perform that action and update the state accordingly when this action type is invoked. it will default to not completed and have an id of the current date
    case "AddTodo":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ];

    // TOGGLE
    // building out the toggle function below
    case "Toggle":
      let Clicktoggle = state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      });
      return Clicktoggle;

    // SUBTRACT
    // this function will filter out any completed todos using the filter method
    case "SubtractTodo":
      let Subtract = state.filter(item => {
        if (item.completed === true) {
          return !item.completed;
        } else {
          return item;
        }
      });
      return Subtract;

    default:
      return state;
  }
};
