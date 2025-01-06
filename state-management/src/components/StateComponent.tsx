"use client";

import React from "react";
import { useStateContext  } from "@/context/state/StateProvider";
import { increment, decrement, setLoading } from "@/context/state/actions";
import 'bootstrap/dist/css/bootstrap.min.css';

const StateComponent: React.FC = () => {
    const [state, dispatch] = useStateContext();

    const handleAsyncIncrement = async () => {
        dispatch(setLoading(true));
        // asynchronous state handling
        await new Promise((resolve) => setTimeout(resolve, 1000));
        dispatch(increment());
        dispatch(setLoading(false));
    };

    const handleAsyncDecrement = async () => {
        dispatch(setLoading(true));
        await new Promise((resolve) => setTimeout(resolve, 1000));
        dispatch(decrement());
        dispatch(setLoading(false))
    }
    return (
        <div>
            <h2>Count: { state.count }</h2>
            <h2>Loading: {state.loading ? "Yes": "No"}</h2>
            <button onClick={() => dispatch(increment())} className="btn btn-primary">Increment</button>
            <br />
            <br />
            <button onClick={() => dispatch(decrement())} className="btn btn-primary">Decrement</button>
            <br />
            <br />
            <button onClick={handleAsyncIncrement} className="btn btn-secondary">Asynchronous Increment</button>
            <br />
            <br />
            <button onClick={handleAsyncDecrement} className="btn btn-secondary">Asynchronous Decrement</button>
        </div>
    )
}

export default StateComponent;