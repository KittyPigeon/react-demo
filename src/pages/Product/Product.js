import React,{Component} from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'; 
import store from '../../store/store';
import List from '../../component/list/list'
class Product extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'Product'
        };
    }
    render(){
        return (
            <div>Product<Tab1 history={this.props.history}></Tab1><List></List>{this.props.user}</div>
        );
    }
}

class Tab1 extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    handleSubmit(event) {

        event.preventDefault()
      
       }

       
    btnFn=()=>{
        console.log(this.props);
        
        this.props.history.push('/order');
        // return <Link to="/order"></Link>
    }
       
    login=()=>{
        console.log(this.props);
        
        this.props.history.push('/login');
        // return <Link to="/order"></Link>
    }

    render(){
        return <h1>
            <button><Link to="/order">订单</Link></button>
            <button onClick={this.btnFn.bind(this)}>单击跳转</button>
            <button onClick={this.login.bind(this)}>登录</button>
            <Clock></Clock>
            <p></p>
        </h1>
    }
}

class Clock extends React.Component {
    constructor(props){
      super(props);
      this.state={
        data:{
          msg:'hello err msg'
        },
        userInfo:['143'],
        addr:'北京'
      }
    }
  
    handlerClick=(e)=>{
      console.log(e);
      let param={send_type:1, ver_type: 1, account:'18841126869'}
      this.$axios.get('https://elm.cangdu.org/v1/cities?type=guess').then(res=>{
        console.log(res);
        this.setState({
            addr:res.data.name
        });
        store.dispatch({
          type:'USER_LIST_SUCCESS',
          user:{
            name:'王者'
          }
        })
      })
    }


    render() {
      return (
        <div>
            <span>{this.state.addr}</span>
          <span onClick={this.handlerClick.bind(this)}>单击请求</span>
        </div>
      );
    }
  }

export default Product;