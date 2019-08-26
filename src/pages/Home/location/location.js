import React from 'react';
import './location.scss'
import Head from '../../../component/head/head'
import arrowIcon from '../../../assest/images/arrow.png'
import { Link } from 'react-router-dom'

import HotCity from './HotCity'
import CityGroup from './CityGroup'
import userIcon from '../../../assest/images/user.png'
class Location extends React.Component{
    constructor(props){
        super(props);
        this.state={
            city:'',
            children:[{slot:'head-elem-tip',title:'elme-a'},{slot:'head-icon-user'}]
        }
    }
    componentDidMount () {
        let that=this;
        console.log(this);
        this.$service.getLocation().then(res=>{
            that.setState({
                city:res
            })
        })

    }
    goMine(){
        this.props.history.push('/mine')
    }
    render(){
        return(
            <div className="location">
                <Head children={this.state.children} goMine={this.goMine.bind(this)}>
                   
                </Head>
                <div className="tip">
                    <div className="tip1">当前定位城市：</div>
                    <div className="tip2">定位不准时，请在城市列表中选择</div>
                </div>
                <Link to={"/city/"+this.state.city.id}>
                    <div className="location-city">
                        <div className="location-city-name">{this.state.city.name}</div>
                        <img className="arrow" src={arrowIcon}></img>
                    </div>
                </Link>
                <HotCity />
                <CityGroup />
            </div>
        )
    }
}

export default Location;
