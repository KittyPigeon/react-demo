import React,{Component} from 'react';

import Logo from '../../component/log/log.js';
import './Login.scss';


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return (<div className="login">
            <Logo></Logo>
            <div className="title bold-title">嗨选商城</div>
            <div className="hx-btn">登录</div>
        </div>
        )    
}
}

export default Login;