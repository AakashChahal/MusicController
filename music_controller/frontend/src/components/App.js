import React, { Component } from "react";
import { render } from "react-dom";
import LoginHomePage from "./LoginHomePage";
import ContactForm from "./feedback";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="center">
                <LoginHomePage />
            </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
