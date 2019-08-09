/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-08-08 13:45:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-09 16:26:25
 */
import React, { Component } from 'react'
import './CityItem.scss'
import {connect} from 'react-redux'
import {setLocation} from '../../store/action.js'
import {withRouter} from 'react-router-dom'


const mapStateToProps=(state)=>{
    return {
        addr:state.addr
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        setLocation(data){
            dispatch(setLocation(data))
        }
    }
}

class CityItem extends Component {
    constructor(props){
        super(props);
    }
    updateLocation(item){
        this.props.setLocation(item);
        let historyCity=this.$util.getStorage('history-city');
        if(historyCity){
            historyCity=JSON.parse(historyCity);
            historyCity.unshift(item);
            console.log(historyCity);
            historyCity=JSON.stringify(historyCity);
            this.$util.setStorage('history-city',historyCity);
            this.props.history.goBack();
        }else{
            let list=[];
            list.push(item);
            list=JSON.stringify(list);

            this.$util.setStorage('history-city',list);
            this.props.history.goBack();
        }
    }
    render() {
        let item=this.props.item;
        return (
            <div className="history-city-item" key={this.props.index} onClick={this.updateLocation.bind(this,item)}>
                <div className="city-name">{this.props.item.name}</div>
                <div className="city-address">{this.props.item.address}</div>
            </div>
        )
    }
}

withRouter(CityItem)
export default connect(mapStateToProps,mapDispatchToProps)(CityItem);