import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, Link,NavLink } from "react-router-dom";
import { CSSTransition,TransitionGroup} from 'react-transition-group';
import Head from '../../component/head/head'
import TabBar from '../../component/TabBar/TabBar'

/* 引入图片 */
import mineUser from '../../assest/images/mine-user.png'
import mineMobile from '../../assest/images/contact.png'
import arrow from '../../assest/images/arrow.png'
import IconOrder from '../../assest/images/mine-order.png'
import IconVip from '../../assest/images/mine-vip.png'
import IconService from '../../assest/images/mine-service.png'
import IconStore from '../../assest/images/mine-store.png'
import IconElme from '../../assest/images/mine-elem.png'
import './Mine.scss'
import {Button, DatePicker } from 'antd';
import store from '../../store/store2';
import {setPageTitle,setUserInfo,setToken} from '../../store/action.js'
const selectedStyle = {
    backgroundColor: 'white',
    color: 'slategray',

  }
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
 class Mine extends Component {
    constructor(props){
        super(props);
        this.state={
            show:false,
            children:[
                {slot:'head-title',title:'我的'},
            ],
            user:{},
            mineTabList:[
                {name:'我的订单',path:'/order',icon:IconOrder},
                {name:'积分商城',path:'/gift',icon:IconStore},
                {name:'饿了么会员卡',path:'/vipcard',icon:IconVip},
                {name:'服务中心',path:'/service',icon:IconService},
                {name:'下载饿了么',path:'/download',icon:IconElme},
            ],

        }
    }
    componentWillMount(){
        this.getUserInfo();
    }
    componentDidMount(){
        
    }
    getUserInfo(){
        let that=this;
        this.$service.getUserInfo().then(res=>{
            that.props.setUserInfo(res);
            console.log(res);
            that.setState({
                user:res
            })
        })
    }
    tap(){
        this.setState({
            show:true
        })
    }

    render() {
        return (
            <div className="mine">
                <Head children={this.state.children}></Head>
                <MineHeader history={this.props.history} user={this.state.user}></MineHeader>
                {/* <CSSTransition
                      in={this.state.show} // 如果this.state.show从false变为true，则动画入场，反之out出场
                      timeout={5000} //动画执行1秒
                      classNames={{
                        enter: 'animated',
                        enterActive: 'fadeIn',
                        exit: 'animated',
                        exitActive: 'fadeOut'
                      }} //自定义的class名
                         //可选，当动画出场后在页面上移除包裹的dom节点
                      onEntered={(el) => {
                            el.style.color='blue'   //可选，动画入场之后的回调，el指被包裹的dom，让div内的字体颜色等于蓝色
                      }}
                      onExited={() => {
                              //同理，动画出场之后的回调，也可以在这里来个setState啥的操作
                      }}
                      
                >
                    <div className="box">hello</div>
                    
                </CSSTransition> */}
                <MineInfo user={this.state.user}></MineInfo>
                <div className="mine-tab-list">
                {this.state.mineTabList.map((item,index)=>{
                    return (
                        <MineTabItem key={index} item={item}></MineTabItem>
                    )
                })}
                    <TabBar aIndex="3" history={this.props.history}></TabBar>
                </div>
            </div>

        )
    }
}
 class MineHeader extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:true//是否登录判断
        }
    }
    componentWillMount() {
        console.log(store.getState());
        if(!this.props.user.username){

        }else{
            this.setState({
                isLogin:false
            })
        }
    }
    goInfo(){
        this.props.history.push('/mine/info')
    }
    goLogin(){
        this.props.history.push('/login')
    }
    render(){
        return (
            <div className="mine-header">
                <img src={mineUser} alt="" className="header-user-img"/>                
                <div className="header-content">
                    {this.props.user?(<div className="mobile" onClick={this.goInfo.bind(this)}>{this.props.user.username}</div>):(<div className="mobile no-login" onClick={this.goLogin.bind(this)}>登录/注册</div>)}
                    <div className="head-tip">
                        <img src={mineMobile} alt="" className="mobile-icon"/>
                        <div className="tip">暂无绑定手机号</div>
                    </div>
                </div>
                <img src={arrow} alt="" className="arrow"/>
            </div>
        )
    }
}

/* 我的页面信息 */
export class MineInfo extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return (
            <div className="mine-info">
            
            <div className="mine-info-item">
                <Link to="/mine/balance">
                    <div className="content"><span className="value balance">{this.props.user.balance}</span><span className="unit">元</span></div>
                    <div className="tip">我的余额</div>
                </Link>

            </div>
            <div className="mine-info-item">
                <div className="content"><span className="value gift">{this.props.user.gift_amount}</span><span className="unit">个</span></div>
                <div className="tip">我的优惠</div>
            </div>
            <div className="mine-info-item">
                <div className="content"><span className="value point">{this.props.user.point}</span><span className="unit">分</span></div>
                <div className="tip">我的积分</div>
            </div>
        </div>
        )

    }
}

/* 我的页面 选项卡 */
export class MineTabItem extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className="mine-tab-item">
                <img src={this.props.item.icon} alt="" className="tab-icon"/>
                <div className="tab-name">
                    <Link to={this.props.item.path}><div className="name">{this.props.item.name}</div></Link>
                    <img src={arrow} alt="" className="arrow" />
                </div>

            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Mine);