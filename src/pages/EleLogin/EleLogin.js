import React, { Component } from 'react'
import Head from '../../component/head/head'
import Coi from '../../util/jsCoi'
import './EleLogin.scss';
import Tip from '../../component/tip/tip';

export default class EleLogin extends Component {
    constructor(props){
        super(props);
        this.state={
            children:[
                {slot:'head-icon-back'},
                {slot:'head-title',title:'密码登录'}
            ],
            loginList:[
                {name:"账号",value:"",type:'input',placeholder:"账号",id:'user'},
                {name:"密码",value:"",type:'password',placeholder:"密码",maxlength:6,id:'pwd'},
                {name:"验证码",value:"",type:'code',checked:true,placeholder:"验证码",maxlength:4,id:'code'}
            ],
            isShowTip:false
        }
    }
    componentDidMount(){
        console.log('重新载入')
        this.getBaseImg();
    }
    change(e){
        let loginList=this.state.loginList;
        loginList.forEach(tmp=>{
            if(tmp.id===e.target.name){
                tmp.value=e.target.value
            }
        })
        this.setState({
            loginList:loginList
        })
    }
    formValidate(){
        let loginList=this.state.loginList;
        let user=loginList.find(tmp=>tmp.id==='user');
        let pwd=loginList.find(tmp=>tmp.id==='pwd');
        let code=loginList.find(tmp=>tmp.id==='code');

        const validCoi=new Coi();
        validCoi
        .data(user.value)
        .isRequired('账号不能为空')
        .minLength(11, '账号不能少于11位')
        .maxLength(11, '密码不能多11位')
        .data(pwd.value)
        .isRequired('密码不能为空')
        .minLength(6, '密码不能少于11位')
        .maxLength(6, '密码不能多11位')
        .data(code.value)
        .isRequired('验证码不能为空')
        .minLength(4, '验证码不能少于4位')
        .maxLength(4, '验证码不能多4位')
        if(!validCoi.pass){
            this.setState({
                isShowTip:true,
                errMsg:validCoi.errorMessage
            })
            return false;
        }
        return true;
    }
    resetPwd(){}

    login(){
        let param={};
        let loginList=this.state.loginList;
        let user=loginList.find(tmp=>tmp.id==='user');
        let pwd=loginList.find(tmp=>tmp.id==='pwd');
        let code=loginList.find(tmp=>tmp.id==='code');
        if(!this.formValidate()){
            return;
        }

        param={
            username:user.value,
            password:pwd.value,
            captcha_code:code.value,
        }
        let that=this;
        this.$service.login(param).then(res=>{
            if(res.message){
                that.setState({
                    isShowTip:true,
                    errMsg:res.message
                },function(){
                    that.getBaseImg()
                })
            }else{
                that.history.goBack();
            }
        })
    }
    
    getBaseImg(){
        let that=this;
        this.$service.getBase64().then(res=>{
            that.setState({
                codeImg:res.code
            })
        })
    }

    msgConfirm(){
        this.setState({
            isShowTip:false
        })
    }

    resetPwd(){
        this.props.history.push('/login/reset-pwd');
    }
    renderLoginItem(item){
        switch(item.type){
            case 'input':
                return (<div className="input-item input">
                    <div className="input-item-value">
                        <input value={item.value} onChange={this.change.bind(this)} ref={item.id} name={item.id}  placeholder={item.placeholder} /> 
                    </div>
                    </div>)
            case 'password':  
                return (<div className="input-item input">
                   <input type={item.type} value={item.value} name={item.id} onChange={this.change.bind(this)} ref={item.id}  placeholder={item.placeholder} maxLength={item.maxlength} /> 
                   <Switch></Switch>
            </div>)
            case 'code':
                    return (<div className="input-item input">
                    <input onChange={this.change.bind(this)} value={item.value} name={item.id}   ref={item.id}  placeholder={item.placeholder} maxLength={item.maxlength} /> 
                    <BaseImage img={this.state.codeImg}></BaseImage>
                    <div className="change-base" onClick={this.getBaseImg.bind(this)}>
                        <div className="tip">看不清</div>
                        <div className="tip2">换一张</div>
                    </div>
            </div>)
        }
    }
    render() {
        return (
            <div className="ele-login">
                <Head children={this.state.children} history={this.props.history}></Head>
                <div className="login-info-list">
                    {
                        this.state.loginList.map((item,index)=>{
                            return (
                                <div className="login-info-item" key={index}>
                                    {this.renderLoginItem(item)}
                                </div>
                            )
                        })
                    }

                </div>
                <div className="login-tip">
                    <div className="tip">温馨提示：未注册过的账号，登录时将自动注册</div>
                    <div className="tip">注册过的用户可凭账号密码登录</div>
                </div>
                <div className="login-btn" onClick={this.login.bind(this)}>登录</div>
                <div className="reset-pwd" onClick={this.resetPwd.bind(this)}>重置密码？</div>
                <Tip msg={this.state.errMsg} show={this.state.isShowTip} msgConfirm={this.msgConfirm.bind(this)}></Tip>
            </div>
        )
    }
}

class Switch extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    test(){
        
    }
    change(){

    }
    render(){
        return (
            <div className="switch-container">
               <input className='switch-component' type='checkbox' onChange={this.change.bind(this)} />
            </div>
        )
    }
}

class BaseImage extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return (
            <div className="send-code-img">
               <img  src={this.props.img}/>
            </div>
        )
    }
}

