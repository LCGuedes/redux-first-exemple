import * as actions from "./actions";

export const Increment = description => ({
    type: actions.INCREMENT
});

export const Decrement = description => ({
    type: actions.DECREMENT
});

export const AddBy5 = description => ({
    type: actions.ADD_BY_5,
    payload: 5
});