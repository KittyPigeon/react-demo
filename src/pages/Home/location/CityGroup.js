import React, { Component } from 'react'
import './CityGroup.scss';
import {Link} from 'react-router-dom'

export default class CityGroup extends Component {
    constructor(props){
        super(props);
        this.state={
            cityGroupList:[]
        }

    }

    componentDidMount(){
        this.getGroupList();
    }

    getGroupList(){
        let that=this;
        this.$service.getCityGroup().then(res=>{
            console.log(res);
            let cityGroupList=[];
            Object.keys(res).forEach(key=>{
                let obj={
                    name:key
                }
                Object.assign(obj,{data:res[key]});
                cityGroupList.push(obj);
            })

            cityGroupList.sort(function(a, b) {
                return (a.name + '').localeCompare(b.name + '')
            })
            that.setState({
                cityGroupList:cityGroupList
            })
        })
    }
    render() {
        let cityGroupList=this.state.cityGroupList;
        return (
            <div className="city-group">
                {
                    cityGroupList.map((item,index)=>{
                        return (
                            <div className="city-group-item" key={index}>
                                <div className="city-first-name">{item.name}<span className="city-first-tip">{index===0?'（按字母排序）':''}</span></div>
                                <div className="city-children-list">
                                    {
                                        item.data.map((tmp,index2)=>{
                                            return (
                                                <Link to={'/city/'+tmp.id} key={index2} className="city-children-item">
                                                    <div  key={index2} className="ellipsis">
                                                        {tmp.name}
                                                    </div>
                                                </Link>

                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
