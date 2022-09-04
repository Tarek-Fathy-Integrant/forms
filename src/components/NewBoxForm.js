import React, { Component } from 'react';
import './NewBoxForm.css';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            width: 0,
            color: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(evt) {
        console.log(this.state);
        evt.preventDefault();
        this.props.addBox(this.state);
        this.setState({
            height: 0,
            width: 0,
            color: ""
        });
    }
    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value});
    }
    render() {
        return (
            <div className='BoxForm'>
                <form>
                    <div>
                        <label htmlFor='height'>Height: </label>
                        <input type="Number" name="height" id ="height" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='width'>Width: </label>
                        <input type="Number" name="width" id ="width" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='color'>Color: </label>
                        <input type="color" name="color" id ="color" onChange={this.handleChange}/>
                    </div>
                    <br />
                    <button onClick={this.handleSubmit}>Add Box</button>
                </form>
            </div>
        );
    }
}

export default NewBoxForm;