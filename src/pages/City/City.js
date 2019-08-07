import React, { Component } from 'react'
//引入withRouter
import {
    Link,
    withRouter
} from 'react-router-dom'
import './City.scss'
import Head from '../../component/head/head'

export default class City extends Component {
    constructor(props){
        super(props);
        this.state={
            children:[
                {slot:'head-icon-back'},
                {slot:'head-title',title:'杭州'},
                {slot:'head-city-tip',title:'切换城市'}
            ]
        }
        this.getCityInfo=this.getCityInfo.bind(this);
    }
    componentDidMount(){
        console.log(this);
        this.getCityInfo();
    }
    goBack(){
        this.props.history.goBack();
    }

    getCityInfo(){
        let that=this;
        let id=this.props.match.params.id;
        this.$service.getCity(id).then(res=>{
            let children=that.state.children;
            children.forEach(tmp=>{
                if(tmp.slot==='head-title'){
                    tmp.title=res.name
                }
            })
            that.setState({
                children,
                curCityObj:res
            })
        })
    }
    render() {
        return (
            <div className="city">
                <Head  children={this.state.children} goBack={this.goBack.bind(this)}>
                </Head>
                {/* 搜索框 */}
                <div className="search-wrapper">
                    <input type="text" placeholder="输入学校、商务楼、地址"/>
                    <div className="confirm">提交</div>
                </div>
            </div>
        )
    }
}
withRouter(City)
