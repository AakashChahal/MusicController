import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import SignIn from "./SignIn";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="center">
                <SignIn />
            </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
