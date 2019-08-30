import React, { Component } from 'react'
import Head from '../../../component/head/head'
import './UserName.scss'


export default class UserName extends Component {
    constructor(props){
        super(props);
        this.state={
            children:[
                {slot:'head-icon-back'},
                {slot:'head-title',title:'修改用户名'}
            ],
            username:'',
            isChange:false,
            isValid:false
        }
    }
    focus(){}

    blur(){}

    change(e){
        let value=e.target.value;
        let isValid=this.state.isValid;
        if(value.length>=5){
            isValid=true;
        }else {
            isValid=false;
        }
        this.setState({
            username:e.target.value,
            isChange:true,
            isValid:isValid
        })
    }
    confirm(){
        let isValid=this.state.isValid;
        if(!isValid){
            return;
        }
    }

    render() {
        return (
            <div className="user-name">
                <Head children={this.state.children} history={this.props.history}></Head>
                <input type="text" value={this.state.username} className="user-name-input" placeholder="请输入用户名" onFocus={this.focus} onBlur={this.focus} onChange={this.change.bind(this)} />
                <div className={this.state.isChange?(this.state.isValid?'user-name-tip':'user-name-tip error'):'user-name-tip'}>用户名长度在5到24位之间</div>
                <div className={this.state.isValid?'user-name-confirm enabled':'user-name-confirm'} onClick={this.confirm.bind(this)}>确认提交</div>
            </div>
        )
    }
}
