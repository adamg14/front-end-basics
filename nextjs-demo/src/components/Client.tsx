"use client"

// the user client string above defines that this will be run on the client side
import Reactl, { useEffect, useState } from "react";

export default function ClientComponent() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        setMessage("Hello from the client-side component");
    }, []);

    return <div>{ message }</div>
}