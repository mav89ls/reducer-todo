import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/Reducer";

// above we are importing the reducer hook so that we will be able to set up state in this component through reducers

//below we are setting our initial state to initialState, its taking in props from its child component which is todoReducer from reducer.js.
const Todo = props => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const [newTitleText, setNewTitleText] = useState("");

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  //from the console log below we can see that our state is present in the dom console. this means we can access the state. initial state is set by initial state above
  console.log(state);
  return (
    <div>
      <div className="Container">
        <h1>REDUCER TODO LIST</h1>
        {/* rendering todo list below by mapping over our state given to us through props from the todoReducer component that we are importing */}
        {state.map(state => {
          return (
            //below we are setting the classname based on whether it is toggled or not and setting an event handler to toggle completed onclick
            <div
              id="test"
              className={state.completed ? "completed" : ""}
              onClick={() => {
                dispatch({ type: "Toggle", payload: state.id });
              }}
            >
              {state.item}
            </div>
          );
        })}

        {/* building a form below from scratch for simplicity purposes */}

        {/*Input*/}

        <input
          className="Input"
          type="text"
          name="newTitle"
          value={newTitleText}
          onChange={handleChanges}
        />

        {/* ADD*/}
        {/* this function uses dispatch to add the todo to our list, it uses newtitletext as the information that will be added to our todo list */}
        <button
          className="Btn"
          onClick={() => {
            dispatch({ type: "AddTodo", payload: newTitleText });
          }}
        >
          Add Item
        </button>

        {/* Sub*/}
        {/* this button will give us the ability to use the SubtractToDo function by through dispatch, it will clear our Todolist if the item is toggled as completed. */}
        <button
          className="Btn"
          onClick={() => {
            dispatch({ type: "SubtractTodo", payload: newTitleText });
          }}
        >
          Subtract Item
        </button>
      </div>
    </div>
  );
};

export default Todo;
