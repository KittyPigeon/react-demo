import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import IconArrow from '../../../assest/images/arrow.png'
import './Info.scss'
// 高亮的样式，表示我们在哪个导航下
const selectedStyle = {
    backgroundColor: 'white',
    color: 'slategray'
  }

export default class Info extends Component {
    constructor(props){
        super(props);
        this.state={
            infoList:[
                {name:'头像',value:''},
                {name:'头像',value:''},
                {name:'头像',value:''},
                {name:'头像',value:''},
                {name:'头像',value:''},
                {name:'头像',value:''},
                {name:'头像',value:''},
            ]
        }
    }
    render() {
        return (
            <div className="info">

            </div>
        )
    }
}

