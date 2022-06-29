import { INCREMENT, DECREMENT, ADD_BY_5 } from "../types";

const initialState = {
    counter: 0,
}


const counterReducer = (state = initialState, action) => {

    if(action.type === INCREMENT) {
        return { counter: state.counter + 1};
    }

    if(action.type === DECREMENT) {
        return { counter: state.counter - 1};
    }

    if(action.type === ADD_BY_5) {
        return { counter: state.counter + action.payload};
    }

    return state;
};

export default counterReducer;

/* 

- A reducer is a function that receives the current state and a action object, decides how to update de state if necessary, and return the new state (as a event listener).

*/