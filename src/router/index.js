import React,{Component} from 'react';
import {Link,Route,BrowserRouter as Router,Switch,Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import routes from './route';

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
             return     <Route key={index} path={item.path} exact render={props =>
              (!item.auth ? (<item.component {...props} />) : (token ? <item.component {...props} /> : <Redirect to={{
              pathname: '/login',
                state: { from: props.location }
              }} />)
              )} />
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