import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'

import Logo from '../../component/log/log.js';
import './Login.scss';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            loginArr:[
                {id:'mobile',placeholder:'请输入手机号',value:'',type:'text',icon:'iconfont icondelete'},
                {id:'pwd',placeholder:'请输入密码',value:'',type:'text',icon:'iconfont iconvisible'}
            ]
        }
        this.inputChange=this.inputChange.bind(this);
    }
    goHome(){
        this.props.history.push("/home")
    }
    inputChange(e){
        let loginArr=this.state.loginArr;
        loginArr.forEach(tmp=>{
            if(tmp.id===e.target.id){
                tmp.value=e.target.value;
            }
        });
        console.log(loginArr);
        this.state.loginArr=[].concat(loginArr);
    }
    login(){

    }
    render(){
        return (<div className="login">
            <div className="code-login">验证码登录</div>
            <div className="title">密码登录</div>
            <div className="login-form">
                {
                    this.state.loginArr.map((item,index)=>{
                        return (
                            <div className="login-input-item" key={index}>
                                <input onChange={this.inputChange} type={item.type} placeholder={item.placeholder} value={item.value} id={item.id} />
                                <div className={item.icon}></div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="login-btn" onClick={this.goHome.bind(this)}>登录</div>
            <div className="login-tip">忘记密码</div>
            <div className="login-tip2">还没账号？快去注册</div>
        </div>
        )    
}
}

export default Login;