import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";

class ToDoList extends React.Component {
    constructor() {
        super();

        this.state = {
            list: this.receiveList()
        };
    }

    receiveList() {
        if (localStorage.getItem("ToDoList-list")) {
            return JSON.parse(localStorage.getItem("ToDoList-list"));
        }
        else {
            return [];
        }
    }

    save() {
        localStorage.setItem("ToDoList-list", JSON.stringify(this.state.list));
    }

    addItem() {
        this.state.list.push("New item");
        this.setState({ list: this.state.list }, this.save);
    }

    render() {
        return (
            <div className="ToDoList">
                <Button onClick={() => this.addItem()}>
                    Add item
                </Button>

                {this.state.list ?
                    <ul className="ToDoList-list">
                        {this.state.list.map((item, itemKey) =>
                            <li key={itemKey} className="ToDoList-item">
                                {item}
                            </li>
                        )}
                    </ul>
                    :
                    <strong>Receiving list...</strong>
                }
            </div>
        );
    }
}

ToDoList.propTypes = {
};

export default ToDoList;