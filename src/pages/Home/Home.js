import React,{Component} from 'react';
import Link from 'react-router-dom';

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'Product'
        };
    }
    render(){
        return (
            <div>Home
            </div>
        );
    }
}


export default Home;