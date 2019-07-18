import React,{Component} from 'react';

import loginImg from '../../resource/images/login-icon.png';

import './log.scss';

class Logo extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return (
            <div className="logo-container">
                <img className="logo-img" src={loginImg} />
            </div>
        )
    }
}
export default Logo;