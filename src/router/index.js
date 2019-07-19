import React,{Component} from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom';
import routerList from './route';
import Tabbar from '../component/tabbar/tabbar'
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
            <Router>
                <Tabbar></Tabbar>
                <div>
                    {
                        routerList.map((item,key)=>{
                            return (
                                <RouteWithSubRoutes key={key} {...item}/>
                            );
                        })
                    }
                </div>
            </Router>
        </div>
        );
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