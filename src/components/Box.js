import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.deleteBox(this.props.key);
    }
    render() {
        const boxStyle = {
            height: this.props.height,
            width: this.props.width,
            backgroundColor: this.props.color
        }
        return (
            <div>
                <div style={boxStyle}></div>
                <button onClick={this.handleClick}>Delete Box</button>
            </div>
        );
    }
}

export default Box;