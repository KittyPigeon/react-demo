import React, { Component } from 'react'
import { version, Button } from "antd";
import "antd/dist/antd.css";

import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import IconArrow from '../../../assest/images/arrow.png'
import './Info.scss'
import Head from '../../../component/head/head'
import {setPageTitle,setUserInfo,setToken} from '../../../store/action.js'
// 高亮的样式，表示我们在哪个导航下
const selectedStyle = {
    backgroundColor: 'white',
    color: 'slategray'
  }
  const mapStateToProps=(state)=>{
    return {
        pageTitle:state.pageTitle,
        user:state.user
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

        }
    }
 class Info extends Component {
    constructor(props){
        super(props);
        this.state={
            children:[
                {slot:'head-icon-back'},
                {slot:'head-title',title:'账户信息'}
            ],
            infoList:[
                {name:'头像',value:'https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png',id:'headImg'},
                {name:'用户名',value:'',id:'username',path:'/mine/info/username'},
                {name:'收货地址',value:'',id:'address',path:'/mine/info/address'},
                {name:'登录密码',value:'修改',id:'password',path:'/login/reset-pwd'},
            ]
        }
    }

    //   showToast = (msg) => {
    //     Toast.info(msg);
    //   }
    //   handleImageChange = (e) => {//处理图片
    //     const saveUrl = this.props.saveUrl;
    //     const file = e.target.files[0];
    //     const windowURL = window.URL || window.webkitURL;//实现预览
    //     const dataURl = windowURL.createObjectURL(file);//硬盘或sd卡指向文件路径
    //     this.setState({
    //       imgUrl:dataURl
    //     });
    //     let param = new FormData(); //创建form对象
    //     param.append('file',file);
    //     this.props.dispatch({
    //       type:this.props.url,
    //       payload:{
    //         params:param,
    //         callback: (rsp) => {
    //           saveUrl(rsp.data);
    //           this.showToast("上传成功！");
    //         },
    //         errorCallBack: (rsp) => {
    //           this.showToast(rsp.msg);
    //         }
    //       }
    //     });
    //   }

      handleImageChange(e){
          const file=e.target.files[0];
          const windowURL = window.URL || window.webkitURL;//实现预览
          console.log(windowURL);
         const dataURl = windowURL.createObjectURL(file);//硬盘或sd卡指向文件路径
         console.log(dataURl);
         let param=new FormData();
         param.append('file',file);//param就是上传的图片对象
         console.log(param);
        this.setState({
            uploadImg:dataURl
        })

      }
    componentWillMount(){
        let infoList=this.state.infoList;
        infoList.forEach(list=>{
            if(list.id==='username' &&this.props.user &&this.props.user.username){
                list.value=this.props.user.username;
            }
        })
        this.setState({
            infoList:infoList
        })
        console.log(this.props);
    }

    tapInfo(e){
        console.log(e);
        if(e.path){
            this.props.history.push(e.path);
        }
    }

    render() {
        return (
            <div className="info">
                <Head history={this.props.history} children={this.state.children} ></Head>
                 {/* <Button type="primary">Example button</Button> */}
                 <div className="info-list">
                     {
                         this.state.infoList.map((item,index)=>{
                             return (
                                 <div className="info-list-item" key={index} onClick={this.tapInfo.bind(this,item)}>
                                     <div className="info-item-name">{item.name}</div>
                                     <div className="info-item-value">
                                         {item.id==='headImg'?<img src={item.value}/> :(<div>{item.value}</div>)}
                                     </div>
                                     <img src={IconArrow} alt="" className="icon"/>
                                 </div>
                             )
                         })
                     }
                 </div>
                 <div className="login-out">退出登录</div>
                 {/* <div className="input-test">
                     <input type="file" ref={(el)=>{this.input=el}} accept="image/*" onChange={this.handleImageChange.bind(this)}></input>
                     <img src={this.state.uploadImg}></img>
                 </div> */}
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Info)