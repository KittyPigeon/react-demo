import React, { Component } from 'react'

import './TabBar.scss'

export default class TabBar extends Component {
    constructor(props){
        super(props);
        this.state={
            tabs:[
                {name:'外卖',id:'takeOut',path:'/msite'},
                {name:'搜索',id:'search',path:'/search'},
                {name:'订单',id:'order',path:'/order'},
                {name:'我的',id:'mine',path:'/mine'}
            ]
        }
    }

    tap(e){
        this.props.history.push(e.path);
    }
    render() {
        return (
            <div className="tab-bar">
                 {/* <Spin indicator={antIcon} /> */}
                  {
                      this.state.tabs.map((item,index)=>{
                          return (
                              <div className={index==this.props.aIndex?'tab-bar-item active':'tab-bar-item'} onClick={this.tap.bind(this,item)} key={index}>{item.name}</div>
                          )
                      })
                  }
            </div>
        )
    }
}
