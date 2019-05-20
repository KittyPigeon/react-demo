import React,{Component} from 'react';
import style from './style/common.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>首页</h1>
      <Clock></Clock>
      <Msg></Msg>
      <Arr></Arr>
      <Welcome1 name="star"></Welcome1>
      <Welcome2 name="superStar"></Welcome2>
      <Comment author={{"avatarUrl":"http://test.xcbwl.cn/xcb_bid/friendHelp/headImage/mrtx_20190416162827.png","name":"王菲",}}></Comment>
      <Avatar2 user={{"avatarUrl":"http://test.xcbwl.cn/xcb_bid/friendHelp/headImage/mrtx_20190416162827.png","name":"王菲",}}></Avatar2>
    </div>
  );
}
 
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
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

class Arr extends Component{
  render(){
    var arrs=['Adc后裔','上单亚瑟'];
    return (
      <ul>
        {arrs.map((item,index)=><li>{index}-{item}</li>)}
      </ul>
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
      alt={props.user.name}
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


export default App;
