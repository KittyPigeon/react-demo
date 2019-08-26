// 登录组件
import React from 'react'
import {connect} from 'react-redux'
import {setPageTitle,setUserInfo,setToken} from '../../store/action.js'
import './LoginMobile.scss'

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
    componentDidMount () {
        let { setPageTitle, setUserInfo ,setToken} = this.props
         
        // 触发setPageTitle action
        //setPageTitle('登录页面')
         
        // 触发setInfoList action
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
        let mobileItem=loginArr.find(tmp=>tmp.id==='mobile');
        let pwdItem=loginArr.find(tmp=>tmp.id==='pwd');
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
            if(item.id==='mobile' &&item.id===tmp.id){               
                tmp.value='';
            }else if(item.id==='pwd' &&item.id===tmp.id){
                tmp.type='text';
            }
        });
        this.setState({
            loginArr
        })
    }
    login(){
        console.log(this.props);
        let {isLogin,loginArr}=this.state;
        if(!isLogin){
            return;
        }
        let mobileItem=loginArr.find(arr=>arr.id==='mobile');
        let pwd=loginArr.find(arr=>arr.id==='pwd');
        this.props.setPageTitle('登录页')
        this.props.setUserInfo({name:mobileItem.value})
        this.props.setToken('12341');
        this.props.history.push('/home');
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
            <div className={this.state.isLogin?'login-btn active':'login-btn'} onClick={this.login.bind(this)}>登录</div>
            <div className="login-tip" onClick={this.goPwd.bind(this)}>忘记密码</div>
            <div className="login-tip2">还没账号？快去注册</div>
        </div>
        )    
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(LoginMobile)