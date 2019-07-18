import React,{Component} from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'; 

class Product extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'Product'
        };
    }
    render(){
        return (
            <div>Product<Tab1 history={this.props.history}></Tab1></div>
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
        </h1>
    }
}
export default Product;