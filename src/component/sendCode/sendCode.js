import React,{Component} from 'react';

class SendCode extends React.Component{
    constructor(props){
        super(props);
        this.state={
            timer:null,
            isCode:false,//是否发送验证码
            count:60
        }
    }

    // 发送验证码
    sendCode=(e)=>{
        let count=this.state.count;
        count--;
        let that=this;
        this.props.send(e);
        this.setState({
            count,
            isCode:true
        },function(){
            let timer=setInterval(function(){
                if(count<=0){
                    clearInterval(timer);
                    that.setState({
                        isCode:false,
                        count:60
                    })
                }else{
                    count--;
                    that.setState({
                        count,
                        timer
                    })
                }
            },1000)
        })
    }

    // 清空定时器

    clear=()=>{
        console.log('清空定时器');
        let timer=this.state.timer;
        clearInterval(timer);
    }
    render(){
        let codeContent=!this.state.isCode?(<div className="code" onClick={this.sendCode.bind(this)}>获取验证码</div>):(<div className="coding">已发送({this.state.count})</div>);

        return (
            <div className="send-code">
                {codeContent}
            </div>
        )
    }
}

export default SendCode;