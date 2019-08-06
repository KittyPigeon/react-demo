import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'
import SendCode from '../../component/sendCode/sendCode';
import './Login.scss';
import '../../component/sendCode/sendCode.scss'
import LoginMobile from '../../component/LoginMobile/LoginMobile'

// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响

import { connect } from 'react-redux'

import {setPageTitle,setUserInfo,setToken} from '../../store/action.js'
import store from '../../store/store2'


const mapStateToProps=(state)=>{
    console.log(state);
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
    componentDidMount () {
        let { setPageTitle, setUserInfo ,setToken} = this.props
         
        // 触发setPageTitle action
        setPageTitle('登录页面')
         
        // 触发setInfoList action
        setToken('abc')
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
        this.props.setPageTitle('fasdf')
        this.setState({
            isLoginType:4
        });
    }

    render(){
        var loginContent='';
        const {pageTitle,token}=this.props;

        switch(this.state.isLoginType){
            case 1:
                loginContent=(<LoginMobile history={this.props.history} goPwd={this.goPwd.bind(this)} goCode={this.goCode.bind(this)}></LoginMobile>);
                break;
            case 2:
                    loginContent=(<LoginCode getBack={this.goBack.bind(this)} ></LoginCode>);
                break;
            case 4:
                    loginContent=(<ForgetPwd back={this.goBack.bind(this)} ></ForgetPwd>)
                    break;
        }

        return (<div className="login-wrap">
                {loginContent/* {this.state.isLoginType==1?(<LoginMobile goCode={this.goCode.bind(this)}/>):(<LoginCode getBack={this.goBack.bind(this)} />)} */}
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
            if(tmp.id===e.target.id){
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
LoginCode=connect(mapDispatchToProps,mapStateToProps)(LoginCode);
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
            if(tmp.id===e.target.id){
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
        if(this.props.id==='code'){
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

export default connect(mapStateToProps,mapDispatchToProps)(Login);