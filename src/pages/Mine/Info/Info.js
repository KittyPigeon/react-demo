import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import './Info.scss'
// 高亮的样式，表示我们在哪个导航下
const selectedStyle = {
    backgroundColor: 'white',
    color: 'slategray'
  }

export default class Info extends Component {
    render() {
        return (
            <div>
                子路由
            </div>
        )
    }
}

