const redux = require('redux')

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 5
        }
    }

    if (action.type === 'decrement') {

        return {
            counter: state.counter - 5
        }
    }
}

const store = redux.createStore(counterReducer)

const counterSubscriber = () => {
    const lateststate = store.getState()
    console.log(lateststate)
}

store.subscribe(counterSubscriber)

store.dispatch({ type: 'increment' })
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })