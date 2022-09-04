import React, { Component } from 'react';
import './Box.css'

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
            height: `${this.props.height}rem`,
            width: `${this.props.width}rem`,
            backgroundColor: this.props.color
        }
        return (
            <div className='Box'>
                <div style={boxStyle}>
                </div>
                <button onClick={this.handleClick}>Delete Box</button>
            </div>
        );
    }
}

export default Box;