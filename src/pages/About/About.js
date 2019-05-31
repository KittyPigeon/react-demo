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
            <div className="red">About <span className="icon iconfont iconaddress"></span></div>
           
        );
    }
}
export default About;