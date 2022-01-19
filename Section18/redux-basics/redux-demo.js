const redux = require("redux");

/**
 * Reducer function takes old state, dispatched action
 * Returns new state
 * Should not have side effects, ie., HTTP request, write/read from Local Storage
 */
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
