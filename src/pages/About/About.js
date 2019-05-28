import React,{Component} from 'react';
import './About.scss';

class About extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'About'
        };
    }
    render(){
        return (
            <div className="red">About</div>
        );
    }
}
export default About;