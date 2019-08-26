import React,{Component} from 'react';
import './About.scss';
import store from '../../store/store2';
import headerTitle from '../../component/headTitle/headerTitle'
class About extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'About'
        };
    }
    render(){
        return (
            <div className="red">About{store.getState().routerReducer.route} <span className="icon iconfont iconaddress"></span></div>
           
        );
    }
}
export default About;