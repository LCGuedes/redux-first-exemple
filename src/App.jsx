import { useSelector } from "react-redux";
import Store from "./app/store"
import { Increment, Decrement, AddBy5} from "./app/actionCreators";

 const App = () => {

    const counter = useSelector(state => state.counter);

    const increment = () => {
        Store.dispatch(Increment())

    };

    const decrement = () => {
        Store.dispatch(Decrement())
    };

    const addBy5 = () => {
        Store.dispatch(AddBy5())
    }

    return (
        <div>
            <h1>counter</h1>
            <h2>{counter}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={addBy5}>addBy5</button>
        </div>
    )
}

export default App;

