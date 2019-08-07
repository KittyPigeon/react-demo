import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './HotCity.scss';

export default class HotCity extends Component {
    constructor(props){
        super(props);
        this.state={
            hotCityList:[]
        }

    }
    componentDidMount(){
        this.getHotList();
    }

    getHotList(){
        let that=this;
        this.$service.getHotCity().then(res=>{
            that.setState({
                hotCityList:res
            })
        })
    }
    render() {
        let hotCityList=this.state.hotCityList;
        return (
            <div className="hot-city">
                <div className="hot-city-tip">热门城市</div>
                <div className="hot-city-list clear">
                    {
                        hotCityList.map((item,index)=>{
                            return(
                                <Link to={'/city/'+item.id} key={index}><div className="hot-city-item">{item.name}</div></Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
