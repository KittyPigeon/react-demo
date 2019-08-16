import React,{Component} from 'react';
import store from '../../store/store';
import {connect} from 'react-redux'
import {setPageTitle,setUserInfo,setToken} from '../../store/action.js'

import {Button, DatePicker } from 'antd';

const mapStateToProps=(state)=>{
    return {
        pageTitle:state.pageTitle,
        user:state.user,
        token:state.token
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        setPageTitle(data){
            dispatch(setPageTitle(data))
        },
        setUserInfo(data){
            dispatch(setUserInfo(data))
        },
        setToken(data){
            dispatch(setToken(data))
        }
    }
}
class Order extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'Order'
        };
    }
    componentWillMount() {
        console.log('Component WILL MOUNT!');
        console.log(store.getState());
    }
    componentDidMount() {
         console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
          console.log('Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
          return true;
    }
    componentWillUpdate(nextProps, nextState) {
          console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
          console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
           console.log('Component WILL UNMOUNT!')
    }

    render(){
        return (
            <div>Order{store.getState().routerReducer.route}<Button type="primary">百度</Button></div>
        );
    }
}

export default connect(mapDispatchToProps,mapStateToProps)(Order);