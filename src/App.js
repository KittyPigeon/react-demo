
import React,{Component} from 'react';
import axios from 'axios';
import {Link,Route,BrowserRouter as Router,Switch,Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import routes from './router/route';
import './config/rem'
import './App.css';
import AnimatedRouter from 'react-animated-router'; //导入我们的的AnimatedRouter组件
import 'react-animated-router/animate.css'; //导入默认的切换动画样式，如果需要其它切换样式，可以导入自己的动画样式定义文件复制代码
import NotFound from './pages/common/NotFound/NotFound'
import { TransitionGroup, CSSTransition } from "react-transition-group";

// 引入请求接口
import service from './config/userService';
import util from './util/util';
import './animate.css'
/* 封装axios到react */
React.Component.prototype.$util=util;
React.Component.prototype.$service=service;
React.Component.prototype.$axios=axios;
class App extends React.Component {
     constructor(props) {
       super(props)
       this.state={}
    }
   render() {
      let token = this.props.token
       return (

            <Router>
                <div>
                <Switch>{routes.map((item, index) => {
                            return<Route key={index} path={item.path} exact render={props =>
                              (!item.auth ? (<item.component {...props} />) : (token ? <item.component {...props} /> : <Redirect to={{
                              pathname: '/login',
                              state: { from: props.location }
                            }} />)
                            )} />
                          

                        })}

                        <Route component={NotFound} />
                      </Switch>
                      
              </div>
            </Router>


      )
  }
  }

/* 数组渲染 */ // redux拿到token并挂载到App的props上面
 const mapStateToProps = (state, ownProps) => {
   return { token: state.token }
 }
 export default connect(mapStateToProps)(App)
