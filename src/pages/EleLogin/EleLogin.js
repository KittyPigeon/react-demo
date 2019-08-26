import React, { Component } from 'react'
import Head from '../../component/head/head'
import './EleLogin.scss';

export default class EleLogin extends Component {
    constructor(props){
        super(props);
        this.state={
            children:[
                {slot:'head-icon-back'},
                {slot:'head-title',title:'密码登录'}
            ],
            loginList:[
                {name:"账号",value:"",type:'input'},
                {name:"密码",value:"",type:'pwd'},
                {name:"验证码",value:"",type:'input'},
            ]
        }
    }

    renderLoginItem(item){
        console.log(item)
        switch(item.type){
            case 'input':
                return (<div className="input-item input">
                    <div className="input-item-name">{item.name}</div>
                    <div className="input-item-value">{item.value}</div>
                    </div>)
            case 'pwd':  
                return (<div className="input-item input">
                    <div className="input-item-name">{item.name}</div>
                    <div className="input-item-value">{item.value}</div>
                    <Switch></Switch>
            </div>)
            case 'code':
                    return (<div className="input-item input">
                    <div className="input-item-name">{item.name}</div>
                    <div className="input-item-value">{item.value}</div>
                    <BaseImage></BaseImage>
                    <div className="changeBase">
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

    render(){
        return (
            <div className="switch">
                <input type="checkbox"/>
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
            <div className="switch">
                <input type="checkbox"/>
            </div>
        )
    }
}