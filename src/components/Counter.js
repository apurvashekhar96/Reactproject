import Panel from "./Panel";
import { useReducer } from "react";
import Buttons from "./Buttons";
import produce from "immer";

function Counter() {
  const INCREMENT_COUNT = "increament_counter_value";
  const DECREMENT_COUNT = "decrement_counter_value";
  const TRACK_CHANGE = "track_input_changes";
  const SUBMIT_TO_CHANGE = "submit_change_in_counter";

  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT_COUNT: {
        state.counter = state.counter + 1;
        return;
      }
      case DECREMENT_COUNT: {
        state.counter = state.counter - 1;
        return;
      }
      case TRACK_CHANGE: {
        state.valueToSet = action.payload;
        return;
      }
      case SUBMIT_TO_CHANGE: {
        state.counter += state.valueToSet;
        state.valueToSet = 0;
        return;
      }
      default:
        return;
    }
  };

  const [state, dispatch] = useReducer(produce(reducer), {
    counter: 0,
    valueToSet: 0,
  });

  const handleIncClick = () => {
    dispatch({ type: INCREMENT_COUNT });
  };
  const handleDecClick = () => {
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = (event) => {
    dispatch({
      type: TRACK_CHANGE,
      payload: parseInt(event.target.value),
    });
  };

  const handleChangeCounter = (event) => {
    event.preventDefault();
    dispatch({
      type: SUBMIT_TO_CHANGE,
    });
  };

  const renderingElemnt = (
    <div>
      Current Counter Value: {state.counter}
      <div className="flex flex-row mt-3">
        <Buttons onClick={handleIncClick} primary>
          Increament
        </Buttons>
        <Buttons onClick={handleDecClick} secondary>
          Decreament
        </Buttons>
      </div>
      <Panel className="mt-3">
        <div className="flex flex-col">
          <label className="text-base mb-5">
            Enter a value to increase counter:
          </label>
          <form>
            <input
              onChange={handleChange}
              value={state.valueToSet || ""}
              className="drop-shadow-md border-blue-500 mb-3"
              type="number"
            ></input>
            <Buttons onClick={handleChangeCounter} warning>
              Change Counter
            </Buttons>
          </form>
        </div>
      </Panel>
    </div>
  );

  return <Panel>{renderingElemnt}</Panel>;
}

export default Counter;
