import React,{Component} from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Product from '../pages/Product/Product';
import About from '../pages/About/About';

class RouterIndex extends Component{
    render(){

        return(
        <div>
            <Router>
                <div>
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/Product">Product</Link>
                        <Link to="/About">About</Link>
                    </ul>

                    <Route path="/" exact component={Home}></Route>
                    <Route path="/Product"  component={Product}></Route>
                    <Route path="/About"  component={About}></Route>
                </div>
            </Router>
        </div>
        );
    }
}
export default RouterIndex;