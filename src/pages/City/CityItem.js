import React, { Component } from 'react'
import './CityItem.scss'

export default class CityItem extends Component {
    render() {
        return (
            <div className="history-city-item">
                <div className="city-name">{this.props.item.name}</div>
                <div className="city-address">{this.props.item.address}</div>
            </div>
        )
    }
}
