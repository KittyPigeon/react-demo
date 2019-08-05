import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'

import Logo from '../../component/log/log.js';
import './Login.scss';
import SendCode from '../../component/sendCode/sendCode';
import '../../component/sendCode/sendCode.scss'


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            loginArr:[
                {id:'mobile',placeholder:'请输入手机号',value:'',type:'text',icon:'iconfont icondelete'},
                {id:'pwd',placeholder:'请输入密码',value:'',type:'password',icon:'iconfont iconvisible'}
            ],
            isLogin:false,

            isLoginType:1,//登录类型 1手机密码 2：验证码 3:注册 4：忘记密码
        }
    }

    // 返回登录页
    goBack(){
        this.setState({
            isLoginType:1
        })
    }
    
    //跳转验证码登录

    goCode(){
        this.setState({
            isLoginType:2
        })
    }

    // 跳转忘记密码

    goPwd(){
        this.setState({
            isLoginType:4
        });
    }

    render(){
        var loginContent='';
        switch(this.state.isLoginType){
            case 1:
                loginContent=(<LoginMobile goPwd={this.goPwd.bind(this)} goCode={this.goCode.bind(this)}/>);
                break;
            case 2:
                    loginContent=(<LoginCode getBack={this.goBack.bind(this)} />);
                break;
            case 4:
                    loginContent=(<ForgetPwd back={this.goBack.bind(this)} />)
                    break;
        }

        return (<div className="login-wrap">
                {loginContent/* {this.state.isLoginType==1?(<LoginMobile goCode={this.goCode.bind(this)}/>):(<LoginCode getBack={this.goBack.bind(this)} />)} */}
        </div>
        )    
    }
}
// 登录组件

class LoginMobile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            loginArr:[
                {id:'mobile',placeholder:'请输入手机号',value:'',type:'text',icon:'iconfont icondelete'},
                {id:'pwd',placeholder:'请输入密码',value:'',type:'password',icon:'iconfont iconvisible'}
            ],
            isLogin:false,

            isLoginType:1,//登录类型 1手机密码 2：验证码 3:注册
        }
    }
    goHome(){
        this.props.history.push("/home")
    }
    inputChange(e){
        let id=e.target.id;
        let value=e.target.value;
        let loginArr=this.state.loginArr;
        loginArr.forEach(tmp=>{
            if(tmp.id===id){
                tmp.value=value;
            }
        });
        // this.state.loginArr=[].concat(loginArr);
        this.setState({
            loginArr
        })
        let mobileItem=loginArr.find(tmp=>tmp.id=='mobile');
        let pwdItem=loginArr.find(tmp=>tmp.id=='pwd');
        if(mobileItem.value && pwdItem.value){
            this.setState({
                isLogin:true
            })
        }else{
            this.setState({
                isLogin:false
            })
        }
    }
    iconOperation(item){
        let loginArr=this.state.loginArr;
        loginArr.forEach(tmp=>{
            if(item.id=='mobile' &&item.id==tmp.id){               
                tmp.value='';
            }else if(item.id=='pwd' &&item.id==tmp.id){
                tmp.type='text';
            }
        });
        this.setState({
            loginArr
        })
    }
    login(){

    }
    loginCode(){
        this.props.goCode()
    }
    goPwd(e){
        this.props.goPwd(e)
    }

    render(){
        return (<div className="login">
            <div className="code-login" onClick={this.loginCode.bind(this)}>验证码登录</div>
            <div className="title">密码登录</div>
            <div className="login-form">
                {
                    this.state.loginArr.map((item,index)=>{
                        return (
                            <div className="login-input-item" key={index}>
                                <input onChange={this.inputChange.bind(this)} value={item.value}  type={item.type} placeholder={item.placeholder} id={item.id} />
                                <div className={item.icon} onClick={this.iconOperation.bind(this,item)}></div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={this.state.isLogin?'login-btn active':'login-btn'} onClick={this.goHome.bind(this)}>登录</div>
            <div className="login-tip" onClick={this.goPwd.bind(this)}>忘记密码</div>
            <div className="login-tip2">还没账号？快去注册</div>
        </div>
        )    
    }

}
// 验证码组件
class LoginCode extends React.Component{
    constructor(props){
        super(props);
        this.state={
            codeInfo:[
                {id:'mobile',value:'',placeholder:'请输入账号',type:'text',max:"11"},
                {id:'code',value:'',placeholder:'请输入验证码',type:'text',max:"6"}
            ],
            isSendCode:false,
            count:60
        }
    }
    inputChange(e){
        let codeInfo=this.state.codeInfo;
        codeInfo.forEach(tmp=>{
            if(tmp.id==e.target.id){
                tmp.value=e.target.value;
            }
        })
        this.setState({
            codeInfo:codeInfo
        })
    }
    deleteCode(e){
        let codeInfo=this.state.codeInfo;
        codeInfo.forEach(tmp=>{
            if(tmp.id==='code'){
                tmp.value=''
            }
        })
        this.setState({
            codeInfo:codeInfo
        })
    }

    // 发送二维码

    sendCode(){
        let count=this.state.count;
        let that=this;
        that.setState({
            count,
            isSendCode:true
        },function(){
            let timer=setInterval(function(){
                if(count<=0){
                    clearInterval(timer);
                    that.setState({
                        count:60,
                        isSendCode:false
                    })
                }else{
                    count--;
                }
                that.setState({
                    count,
                    timer
                })
            },1000)
        })

    }

    // 返回 
    goBack(e){
        this.props.getBack(e);
        clearInterval(this.state.timer)
    }

    render(){
        return (
            <div className="login-code">
                <div className="back" onClick={this.goBack.bind(this,100)}>返回</div>
                <div className="login-code-title">验证码登录</div>
                <div className="login-code-form">
                    {
                        this.state.codeInfo.map((item,index)=>{
                            return (
                                <div className="login-code-item" key={index}>
                                    <input value={item.value} onChange={this.inputChange.bind(this)} placeholder={item.placeholder} type={item.type} id={item.id} maxLength={item.max} />
                                    <div className="iconfont icondelete" style={{display: (item.id==='code' && item.value) ? "block" : "none"}} onClick={this.deleteCode.bind(this)}></div>
                                    <div className={this.state.isSendCode?'send-code active':'send-code'} style={{display: (item.id==='code') ? "block" : "none"}} onClick={this.sendCode.bind(this)}>{this.state.isSendCode?'已发送('+this.state.count+'s)':'获取验证码'}</div>
                                </div>
                                );
                            })
                    }
                </div>
                <div className="login-code-tip">提示：未注册账号的手机号，请先<div className="register">注册</div></div>
                <div className="login-code-btn">登录</div>
            </div>
        )
    }
}

// 忘记密码组件
class ForgetPwd extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pwdInfo:[
                {id:'mobile',value:'',placeholder:"请输入账号",max:11},
                {id:'code',value:'',placeholder:"请输入验证码",max:6},
                {id:'pwd',value:'',placeholder:"请输入新密码",max:6}
            ]
        }
    }
    changeInfo(e){
        let pwdInfo=this.state.pwdInfo;
        pwdInfo.forEach(tmp=>{
            if(tmp.id==e.target.id){
                tmp.value=e.target.value;
            }
        })
        this.setState({
            pwdInfo
        })
    }
    goBack(e){
        this.props.back(e);
        this.refs.inputItem.clearTimer();
    }
    render(){
        return (
            <div className="forget-pwd">
                <div className="back" onClick={this.goBack.bind(this)}>返回</div>
                <div className="title">重置登录密码</div>
                <div className="forget-form">
                    {
                        this.state.pwdInfo.map((item,index)=>{
                            return (
                                <InputItem ref='inputItem' change={this.changeInfo.bind(this)} item={item} max={item.max} id={item.id} value={item.value} placeholder={item.placeholder} key={index} />
                            )
                        })
                    }
                </div>
                <div className="forget-confirm">确认</div>
            </div>
        )
    }
}

//表单组件 
class InputItem extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    
    inputChange(e){
        this.props.change(e)
    }
    clearTimer(){
        console.log('时间监测')
        console.log(this);
        console.log(this.state.codeRef);
        //this.refs.code.clear()
    }
    Send(){
        let codeRef=this.refs.code;
        console.log(codeRef)
        this.setState({
            codeRef:codeRef
        })
        console.log(this);
    }
    render(){
        let sendCode='';
        if(this.props.id=='code'){
            sendCode=(<SendCode ref='code' send={this.Send.bind(this)}></SendCode>);
        }
        return (
            <div className="input-item">
                <input className="input" onChange={this.inputChange.bind(this)}  type="text" maxLength={this.props.max} value={this.props.value} placeholder={this.props.placeholder} id={this.props.id}  />
                {sendCode}
            </div>
        )
    }
}

export default Login;