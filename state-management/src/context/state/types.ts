// this script contains the state and action type defintions

// this module exports the interface defining the structure of the state interface which contains a count and loading variable
export interface State{
    count: number,
    loading: boolean
}

export type Action = 
| { type: "INCREMENT"}
| { type: "DECREMENT"}
| {type: "SET_LOADING"; payload: boolean}