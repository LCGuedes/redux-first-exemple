import { createStore } from "redux";
import * as actions from "./actions";

const reducer = (state = {counter: 0}, action) => {
    // Synchronous Function
    // We should not mutate the original state

    if(action.type === actions.INCREMENT) {
        return { counter: state.counter + 1};
    }

    if(action.type === actions.DECREMENT) {
        return { counter: state.counter - 1};
    }

    if(action.type === actions.ADD_BY_5) {
        return { counter: state.counter + action.payload};
    }

    return state;
};

const Store = createStore(reducer);

export default Store;