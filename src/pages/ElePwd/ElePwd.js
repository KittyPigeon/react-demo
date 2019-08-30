import React, { Component } from 'react'
import Head from '../../component/head/head'
import Tip from '../../component/tip/tip';
import './ElePwd.scss'


export default class ElePwd extends Component {
    constructor(props){
        super(props);
        this.state={
            children:[
                {slot:'head-icon-back'},
                {slot:'head-title',title:'密码登录'}
            ],

        }
    }

    confirm(){}
    render() {
        return (
            <div className="ele-pwd">
                   <Head children={this.state.children} history={this.props.history}></Head>
                    <PwdList></PwdList>
                    <div className="confirm" onClick={this.confirm.bind(this)}>确认修改</div>
            </div>
        )
    }
}

class PwdList extends Component{
   constructor(props){
    super(props);
    this.state={
        pwdList:[
            {id:'user',name:'账号',value:''},
            {id:'oldPwd',name:'旧密码',value:''},
            {id:'pwd1',name:'请输入新密码',value:''},
            {id:'pwd2',name:'请确认密码',value:''},
            {id:'code',name:'验证码',value:''},

        ]
    }
   }
   
   componentDidMount(e){
       this.getBaseImg();
   }


   getBaseImg(){
    let that=this;
    this.$service.getBase64().then(res=>{
        let pwdList=that.state.pwdList;
        pwdList.forEach(list=>{
            if(list.id==='code'){
                list.codeImg=res.code
            }
        })
        that.setState({
            pwdList:pwdList
        })
    })
    }

   change(e){
    let id=e.target.id;
    let value=e.target.value;
    let pwdList=this.state.pwdList;
    pwdList.forEach(list=>{
        if(list.id===id){
            list.value=value
        }
    })
    this.setState({
        pwdList:pwdList
    })
   }
   render(){
       return (
           <div className="input-list-wrapper">
                    <div className="input-list">
                        {
                            this.state.pwdList.map((item,index)=>{
                                var content='';
                                if(item.id!=='code'){
                                    content=(<div className="input-item" key={index} ><input placeholder={item.name} value={item.value} id={item.id} onChange={this.change.bind(this)} /></div>);
                                }else{
                                    content=(<div className="input-item" key={index} >
                                        <input value={item.value} placeholder={item.name} id={item.id} onChange={this.change.bind(this)} />
                                        <img className='code-img' src={item.codeImg} alt="单击图片"/>
                                        <div className="code-tip">
                                            <div className="tip">看不清</div>
                                            <div className="tip">换一张</div>
                                        </div>
                                    </div>);
                                }

                                return(
                                   content
                                )
                            })
                        }
                    </div>
               
           </div>
       );
   }
}