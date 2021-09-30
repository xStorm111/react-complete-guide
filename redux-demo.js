const redux = require("redux");

//state if undefined will get the default with counter = 0
//state = old state
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

//dispatch an action
//with dispatch counter will show 2 because its his initialization and the action that was dispatched
//with switch case we don't allow the initialization to start
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
