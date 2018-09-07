import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

import ToDoList from "../ToDoList/ToDoList";

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>

                <ToDoList />
            </div>
        );
    }
}

export default App;
