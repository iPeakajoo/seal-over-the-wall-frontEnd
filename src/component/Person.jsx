import React from "react";

export default function Person(props) {
    return (
        <div className="flex flex-col p-6 bg-cyan-400">
            <h1>My name is {props.name} and my address is {props.address}</h1>
        </div>
    );
}