import React, { Component } from 'react';
import Box from './Box'
import NewBoxForm from './NewBoxForm';

class BoxList extends Component{
constructor(props){
    super(props);
    this.state = {
        boxes: []
    }
    this.addBox = this.addBox.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
}
addbox(){

}
deleteBox(){
    
}
render(){
    return(

        <NewBoxForm />
    );
}
}

export default BoxList;