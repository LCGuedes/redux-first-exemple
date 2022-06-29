import { INCREMENT, DECREMENT, ADD_BY_5 } from "../types";

export const Increment = () => ({
    type: INCREMENT
});

export const Decrement = () => ({
    type: DECREMENT
});

export const AddBy5 = () => ({
    type: ADD_BY_5,
    payload: 5
});

/*

- An action is a plain javascript object that has a type field. You can think of a action as a event that describes something that happened in the application.
- The type field should be a string that gives this action a descriptive name ("domain/eventName").
- An action object can have other fields with additional information about what happened. By convention we put that information in a field called payload.

    const addTodoAction = {
        type: "todos/todosAdded",
        payload: "Buy milk"
    };

- An action creator is a function that creates and returns a action obejct.

    const addTodo = text => {
        return {
            type: "todos/todosAdded",
            payload: text
        };
    };

*/