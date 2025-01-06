// this script provides the function logic for the actions provided in the ./actions.ts module
import { State, Action } from "./types";

// defining the inital state
export const initialState: State = {
    count: 0,
    loading: false
};

// this reducer function applies the function logic for each action on the current state and the desired action on this state
export const reducer = (state: State, action: Action): State => {
    switch(action.type){
        case "INCREMENT":
            return {...state, count: state.count + 1};
        case "DECREMENT":
            return {...state, count: state.count - 1};
        case "SET_LOADING":
            return {...state, loading: action.payload}
        default:
            return state;
    }
}