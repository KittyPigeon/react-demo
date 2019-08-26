import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import store from '../../store/store2';
import { connect } from 'react-redux';
/* import '../../assest/font/iconfont.css' */
import './tabbar.scss';

const tabbarArr =[
    
    {
        img:'icon-home',
        text:'首页',
        path: "/home",
        code:'&#xe609;'
    },
    // {
    //     img:'icon-fenlei',
    //     text:'分类',
    //     path: "./col"
    // },
    // {
    //     img:'icon-gouwuche',
    //     text:'购物车',
    //     path:"./cart"
    // },
    {
        img:'icon-yonghu',
        text:'产品页',
        path: "/product",
        code:'&#xe609;',
        className:'iconaddress'
    },
    {
        img:'icon-yonghu',
        text:'用户',
        path: "/about",
        code:'&#xe609;'
    },
 
]

class TabBar extends Component {
    constructor(props){
        super(props);
        this.state={
            index:0
        }
        this.pathFilter=this.pathFilter.bind(this);
    }
    componentWillMount() {
        console.log(store.getState());
    }
    render(){
        return (
            // style={store.getState().routerReducer.route=='route'?{display:"block"}:{display:"none"}}
            <div className="tabbar" style={store.getState().routerReducer.route=='route'?{display:"block"}:{display:"none"}}>
                <div className="tabbar-content">
                    {
                        tabbarArr.map((item,key)=>{
                            return (<Link to={item.path} className={"tarbar-item "+(this.state.index==key?'active':'')} key={key} onClick={()=>this.itemChange(key)}>
                                <span className="iconfont iconuser"></span>
                                <div>{item.text}{this.state.index}{this.props.route}</div>
                            </Link>)
                        })
                    }
                </div>
            </div>
        );
    }

    pathFilter(path){
        console.log(path);
        if(path.indexOf('home')>-1||path.indexOf('product') ||path.indexOf('about')>-1){
            return true
        }else{
            return false;
        }
        
    }

    itemChange(key){
        tabbarArr.forEach((arr,index)=>{
            if(key==index){
                store.dispatch({
                    type:'ROUTE-TAB',
                    route:'route'
                })
            }
        }) 
        this.setState({
            index:key
        })
    }
}
const mapStateToProps = function(store) {
    return {
      route: store.routerReducer.route
    };
  }
export default connect(mapStateToProps)(TabBar);;