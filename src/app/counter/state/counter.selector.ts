import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

// Selectors are used to select a slice of the state from the store. 
// They are used to get the data from the store and pass it to the component. 
// They are also used to compute derived state from the store. 
// They are also used to memoize the state, so that they only recompute when the state changes.
const getCounterState = createFeatureSelector<CounterState>('counter');

// This selector is used to get the counter value from the state. 
// It takes the counter state as an argument and returns the counter value. 
// It is used in the component to get the counter value from the store.
export const getCounter = createSelector(getCounterState, (state) => {
    return state.counter;
});

// This selector is used to get the toggle value from the state.
// It takes the counter state as an argument and returns the toggle value. 
// It is used in the component to get the toggle value from the store.
export const getToggle = createSelector(getCounterState, (state) => {
    return state.toggle;
})