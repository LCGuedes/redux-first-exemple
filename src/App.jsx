import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement, AddBy5 } from "./redux/actions/counterActions";
import { selectCounter } from "./redux/selectors/selectCounter";

 const App = () => {

    //const counter = useSelector(state => state.counterReducer.counter);
    const counter = useSelector(selectCounter);
    console.log(counter)

    const dispatch = useDispatch();

// - The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object. The store will run its reducer function and save the new state value inside.

// dispatch is like a interface between action and reducer

    return (
        <div>
            <h1>counter</h1>
            <h2>{counter}</h2> 
            <button onClick={() => dispatch({type: "increment"})}>+</button>
            <button onClick={() => dispatch(Decrement())}>-</button>
            <button onClick={() => dispatch(AddBy5())}>addBy5</button> 
        </div>
    );
};

export default App;

