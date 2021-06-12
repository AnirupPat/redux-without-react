const redux = require('redux');

const counterReducer = (state, action) => {
    if(action.type == 'increment') {
        return {
            counter: state.counter + 1
        };
    } else if(action.type == 'decrement') {
        return {
            counter: state.counter - 1
        };
    } else {
        return state;
    }
    
};

const store = redux.createStore(counterReducer, {
    counter: 0
});

console.log(store.getState());

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

// for the store to let know that counterSubscriber is subscribing to the store...
store.subscribe(counterSubscriber);

// dispatch 
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});