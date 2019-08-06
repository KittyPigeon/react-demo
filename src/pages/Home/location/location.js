import React from 'react';

class Location extends React.Component{
    constructor(prpos){
        super(prpos);
        this.state={
            city:''
        }
    }
    componentDidMount () {
        let that=this;
        this.$service.getLocation().then(res=>{
            console.log(res)
            that.setState({
                city:res.name
            })
        })
    }
    render(){
        return(
            <div className="location">
                <div className="tip">
                    <div>当前定位城市：</div>
                    <div>定位不准时，请在城市列表中选择</div>
                </div>
                <div className="location-wrap">
                        <div className="city">{this.state.city}</div>
                        <div className="arrow">></div>
                </div>
            </div>
        )
    }
}

export default Location;