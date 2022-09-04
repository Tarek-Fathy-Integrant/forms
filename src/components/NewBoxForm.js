import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            width: 0,
            color: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addBox(this.state);
    }
    handleChange(){

    }
    render() {
        return (
            <div>
                <form onChange={this.handleChange}>

                    <button onClick={this.handleSubmit}>Add Box</button>
                </form>
            </div>
        );
    }
}

export default NewBoxForm;