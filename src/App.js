import React,{Component} from 'react';
import RouterIndex from './router/index';
import './config/rem'
import './App.css';

function App() {
  return (
    <div className="App">
      <RouterIndex />
    </div>
  );
}


const Home=()=>(
  <div>
    <h1>首页</h1>
  </div>
);
const Product=()=>(
  <div>
    <h1>产品页</h1>
  </div>
);
const About=()=>(
  <div>
    <h1>
      About
    </h1>
  </div>
);

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:{
        msg:'hello err msg'
      },
      userInfo:['143']
    }
    this.handler=this.handler.bind(this);
  }

  handler(e){
    this.setState({
      data:{
        msg:'新的消息'
      }
    })
  }

  handlerClick=(e)=>{
    console.log(e);

  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <div >测试</div>
        <h2>{this.state.data.msg}</h2>
        <button onClick={this.handler}>单击我</button>
        <button onClick={this.handlerClick}>单击事件2</button>
      </div>
    );
  }
}

class Msg extends Component {
  render(){

    return (
      <div className='message'>
        <h1>消息</h1>
        <h2>新闻</h2>
      </div>

    );
  }
}

//函数定义和类定义组件

function Welcome1(props){
  return <h1>你好{props.name}</h1>
}

class Welcome2 extends Component{
  render(){
    return (
      <h1>你好{this.props.name}</h1>
    );
  }
}

/* class Avatar extends Component(){
  render(){
      return (
          <img 
               className="avatar"
               src={this.props.user.avatarUrl}
               alt={this.props.user.name}
          />
      );
  }
}

class Comment extends Component(){
  render(){
      return (
          <div className="comment">
              <Avatar user={this.props.author}></Avatar>
              <div></div>
          </div>
      );
  }
}
 */
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt="图片"
    />
  );
}
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
    </div>
  );
}

class Avatar2 extends Component{
  render(){
    return (
      <h1>你好{this.props.user.name}<img src={this.props.user.avatarUrl} /></h1>

    );
  }
}

/* 条件渲染 */
class Hero extends Component{
  render(){
    if(this.props.isHero){
      return (
        <h1>超级英雄</h1>
      );
    }else{
      return (
        <h1>反派英雄</h1>
      );
    }
  }
}

class Template1 extends Component{
  render(){
    return (
      <div>魔幻英雄</div>
    );
  }

}
class Template2 extends Component{
  render(){
    return (
      <div>大魔王</div>
    );
  }

}
class Hero2 extends Component {
  render(){
    let hero=<Template1/>;
    let villain=<Template2 />;
    if(this.props.isHero){
      return (
        hero
      );
    }else{
      return(
        villain
      )
    }
  }
}

class Hero3 extends Component{
  constructor(props){
    super(props);
    this.state={
      isHero:false
    }
  }
  render(){
    let isHero=this.state.isHero;
    return (
      <div>{isHero?(<Template1 />):(<Template2 />)}</div>
    );
  }
}

/* 数组渲染 */

export default App;
