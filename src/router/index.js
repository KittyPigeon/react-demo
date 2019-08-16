import React,{Component} from 'react';
import {Link,Route,BrowserRouter as Router,Switch,Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import routes from './route';

import AnimatedRouter from 'react-animated-router'; //导入我们的的AnimatedRouter组件
import 'react-animated-router/animate.css'; //导入默认的切换动画样式，如果需要其它切换样式，可以导入自己的动画样式定义文件复制代码

class RouterIndex extends Component{
    constructor(props){
        super(props);
        this.state={
            active:0
        }
    }

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
         console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
          console.log('Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
          return true;
    }
    componentWillUpdate(nextProps, nextState) {
          console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
          console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
           console.log('Component WILL UNMOUNT!')
    }
    
    render(){
        return(
        <div>

          <Switch>
           {routes.map((item, index) => {
             return <AnimatedRouter timeout={300}>
             <Route key={index} path={item.path} exact render={props =>
                 (!item.auth ? (<item.component {...props} />) : (token ? <item.component {...props} /> : <Redirect to={{
                 pathname: '/login',
                   state: { from: props.location }
                 }} />)
                 )} />
            </AnimatedRouter>

             })}
            <Route component={NotFound} />
           </Switch>
        </div>
        );
    }

}

  class NotFound extends React.Component{
      constructor(props){
          super(props);
          this.state={
              
          }
      }
  }  
  function RouteWithSubRoutes(route) {
    return (
      
      <Route
        path={route.path}
        exact ={route.exact}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );

}
export default RouterIndex;