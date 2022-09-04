import React, { Component } from 'react';
import Box from './Box'
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        };
        this.addBox = this.addBox.bind(this);
        this.deleteBox = this.deleteBox.bind(this);
    }
    addBox(boxInfo) {
        console.log(boxInfo);
        let newBoxes = [...this.state.boxes, {...boxInfo, key: uuidv4()}];
        this.setState({boxes: newBoxes}); 
    }
    deleteBox(key) {
        const newBoxes = this.state.boxes.filter((box) => {
            return box.key !== key;
        });
        this.setState({boxes: newBoxes});
    }
    render() {
        let Boxes = this.state.boxes.map((box) => {
            return <Box key={box.key} height={box.height} width={box.width} color={box.color}/>
        });
        return (
            <div>
                <h1>Box List</h1>
                <NewBoxForm addBox={this.addBox}/>
                {Boxes}
            </div>
        );
    }
}

export default BoxList;