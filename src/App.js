import React,{Component} from 'react';
import axios from 'axios';
import {Link,Route,BrowserRouter as Router,Switch,Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import routes from './router/route';
import './config/rem'
import './App.css';
import NotFound from './pages/common/NotFound/NotFound'

// 引入请求接口
import service from './config/userService';

console.log(typeof service);
/* 封装axios到react */
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
             <Switch>
           {routes.map((item, index) => {
                return <Route key={index} path={item.path} exact render={props =>
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
   console.log(state);
   return { token: state.token }
 }
 export default connect(mapStateToProps)(App)
