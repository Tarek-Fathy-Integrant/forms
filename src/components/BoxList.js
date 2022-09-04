import React, { Component } from 'react';
import Box from './Box'
import NewBoxForm from './NewBoxForm';
import uuid from 'uuid';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        }
        this.addBox = this.addBox.bind(this);
        this.deleteBox = this.deleteBox.bind(this);
    }
    addbox(boxInfo) {
        let newBoxes = [...this.state.boxes, {...boxInfo, key: uuid()}];
        this.setState({boxes: newBoxes}) 
    }
    deleteBox(key) {
        const newBoxes = this.state.boxes.filter((box) => {
            return box.key !== key;
        });
        this.setState({boxes: newBoxes});
    }
    render() {
        let Boxes = this.state.boxes.map((box) => {
            return <Box key={box.key} height={box.height} width={box.width} color={box.color} />
        });
        return (
            <div>
                {Boxes}
                <NewBoxForm />
            </div>
        );
    }
}

export default BoxList;