import React, { Component } from 'react'
//引入withRouter
import {
    Link,
    withRouter
} from 'react-router-dom'
import './City.scss'
import Head from '../../component/head/head'
import util from '../../util/util'


export default class City extends Component {
    constructor(props){
        super(props);
        this.state={
            children:[
                {slot:'head-icon-back'},
                {slot:'head-title',title:'杭州'},
                {slot:'head-city-tip',title:'切换城市'}
            ],
            searchCity:'',
            isSearch:false,
            searchCityList:[],//搜索城市列表
            historyCityList:[]//历史城市列表
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
    // 城市搜索input变化
    search(e){
        this.setState({
            searchCity:e.target.value
        })
    }

    // 提交城市搜索
    confirm(){
        let searchCity=this.state.searchCity;
        if(!searchCity){
            return;
        }
        let id=this.state.curCityObj.id;
        let param={
            type:'search',
            city_id:id,
            keyword:searchCity
        }
        let that=this;
        this.$service.getSearchCity(param).then(res=>{
            that.setState({
                isSearch:true,
                searchCityList:res
            })
        })
    }

    getHistoryList(){
        let historyCityList=util.getStorage('historycity');
        if(historyCityList){
            historyCityList=JSON.parse(historyCityList)
        }
        this.setState({
            historyCityList
        })
    }
    render() {
        return (
            <div className="city">
                <Head  children={this.state.children} goBack={this.goBack.bind(this)}>
                </Head>
                {/* 搜索框 */}
                <div className="search-wrapper">
                    <input type="text" placeholder="输入学校、商务楼、地址" value={this.state.searchCity} onChange={this.search.bind(this) }/>
                    <div className="confirm" onClick={this.confirm.bind(this)}>提交</div>
                </div>
                
            </div>
        )
    }
}
withRouter(City)
