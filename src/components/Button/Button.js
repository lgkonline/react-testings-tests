import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

class Button extends React.Component {
    render() {
        return (
            <button
                className={"Button " + (this.props.large ? "large" : "")}
                onClick={this.props.onClick}
            >
                {this.props.children}
            </button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    large: PropTypes.bool
};

export default Button;