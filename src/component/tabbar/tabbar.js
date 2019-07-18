import React,{Component} from 'react';
import {Link} from 'react-router-dom';
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
    }
    render(){
        return (
            <div className="tabbar">
                <div className="tabbar-content">
                    {
                        tabbarArr.map((item,key)=>{
                            return (<Link to={item.path} className={"tarbar-item "+(this.state.index==key?'active':'')} key={key} onClick={()=>this.itemChange(key)}>
                                <span className="iconfont iconuser"></span>
                                <div>{item.text}</div>
                            </Link>)
                        })
                    }
                </div>
            </div>
        );
    }
    itemChange(key){
        this.setState({
            index:key
        })
    }
}
export default TabBar;