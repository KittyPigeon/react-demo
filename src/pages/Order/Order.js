import React,{Component} from 'react';
import store from '../../store/store2';
import {connect} from 'react-redux'
import {setPageTitle,setUserInfo,setToken} from '../../store/action.js'

import {Button, DatePicker } from 'antd';
import './Order.scss'
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
            name:'Order',
            data:[
                '1','2','3'
            ]
        };
    }
    componentWillMount() {
        console.log('Component WILL MOUNT!');

        console.log(store.getState());
    }
    componentDidMount() {
         console.log('Component DID MOUNT!')
         console.log(this)
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

    deleteItem(index){
        let data=this.state.data;
        data.splice(index,1);
        this.setState({
            data
        })
    }
    render(){
        return (
            <div className="order">
                <div className="order-list">
                    {
                        this.state.data.map((v,index)=>{
                            return (
                                <div className="order-list-item" key={index}>{v}<span onClick={this.deleteItem.bind(this,index)}>删除</span></div>
                            )
                        })
                    }
                </div>

                <Order2></Order2>
            </div>
        );
    }
}

export default connect(mapDispatchToProps,mapStateToProps)(Order);

class Order2 extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{}
        }
    }
    componentWillMount() {
        console.log('Component WILL MOUNT!');
        console.log(store.getState());
    }
    render(){
        return (
            <div className="order2">
                订单2
            </div>
        )
    }
}