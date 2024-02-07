import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const value = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const incrementHandler = () => {
        dispatch({ type: 'increment', step: 1 })
    }

    const decrementHandler = () => {
        dispatch({ type: 'decrement', step: 1 })
    }

    const incrementFiveHandler = () => {
        dispatch({ type: 'increment', step: 5 })
    }

    const decrementFiveHandler = () => {
        dispatch({ type: 'decrement', step: 5 })
    }


    return (
        <div>
            <h1>Redux Counter</h1>
            <div>{value}</div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={incrementFiveHandler}>Increment by 5</button>
            <button onClick={decrementFiveHandler}>Decrement by 5</button>
        </div>
    )
}

export default Counter;