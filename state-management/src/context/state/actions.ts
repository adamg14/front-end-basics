// this script defines the actions that can be applied to the state in order to change the current state

import { Action } from "./types";

// the export of this module are the different functions to carry out the different actions within the ./actions.ts module which can be applied to the state
export const increment = (): Action => ({ type: "INCREMENT"});
export const decrement = (): Action => ({ type: "DECREMENT"});
export const setLoading = (loading: boolean): Action => ({
    type: "SET_LOADING",
    payload: loading,
});