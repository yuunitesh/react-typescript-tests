import { useReducer } from "react";

const initialState = { count: 0 };
type CounterState = {
  count: number;
};
type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};
type UpdateReset = {
  type: "reset";
};
type CounterAction = UpdateAction | UpdateReset;
const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      initialState;
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // state:CounterState and dispatch:React.dispatch<CounterAction>
  return (
    <div>
      count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        decrement 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};
