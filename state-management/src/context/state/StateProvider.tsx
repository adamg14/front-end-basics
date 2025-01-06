// context provider to be displayed by the application
"use client";

import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { State, Action } from "./types";
import { reducer, initialState } from "./reducer";

const StateContext = createContext<[State, React.Dispatch<Action>] | undefined>(undefined);

interface StateProviderProps {
    children: ReactNode;
}

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StateContext.Provider value={[state, dispatch]}>
            { children }
        </StateContext.Provider>
    )
};

export const useStateContext = (): [State, React.Dispatch<Action>] => {
    const context = useContext(StateContext);
    if (!context){
        throw new Error("useStateContext must be used within a StateProvider");
    }
    return context;
}
