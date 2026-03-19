import { createAction, props } from "@ngrx/store";

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

// Custom Increment Action
// props to pass data
export const customIncrement = createAction('customIncrement',
    props<{value: number}>()
);

export const toggleCustInput = createAction('toggleCustInput');