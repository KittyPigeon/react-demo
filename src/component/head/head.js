import React, { Component } from 'react'
import './head.scss'
import backIcon from '../../assest/images/back.png'
import userIcon from '../../assest/images/user.png'
export default class Head extends Component {
    constructor(props){
        super(props);
        this.state={}
        this.renderChild = this.renderChild.bind(this)

    }
    componentDidMount(){
    }
    goMine(){
        this.props.goMine();
    }
    renderChild (child,index) { // 控制内容的分发
        switch(child.slot){
            case 'head-elem-tip':
                return <div className="head-elem-tip" key={index}>{child.title}</div>
            case 'head-icon-user':
                return <img className="head-icon-user" src={userIcon} key={index} onClick={this.goMine.bind(this)}></img>
            case 'head-icon-back':
                return <img className="head-icon-back" src={backIcon} key={index} onClick={this.goBack.bind(this)} />
            case 'head-title':
                return <div className="head-title" key={index}>{child.title}</div>
            case 'head-city-tip':
                return <div className="head-city-tip" key={index} onClick={this.goBack.bind(this)}>{child.title}</div>    
        }
    }
    goBack(e){
        //this.props.goBack(e);
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="head">
                <header id="head_top" className="head-top">
                    {this.props.children.map((child,index)=>{
                        return this.renderChild(child,index)
                    })}
                </header>
            </div>
        )
    }
}
