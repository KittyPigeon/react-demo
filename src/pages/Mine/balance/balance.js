import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from '../../../component/head/head'
import './balance.scss'


const mapStateToProps=(state)=>{
    return {
        pageTitle:state.pageTitle,
        user:state.user,
        token:state.token
    }
    }

class Balance extends Component {
    constructor(props){
        super(props);
        this.state={
            children:[
                {slot:'head-icon-back'},
                {slot:'head-title',title:'我的余额'}
            ],
            balance:''
        }
    }
    componentWillMount(){
        console.log(this.props);
        let user=this.props.user;
        if(user){
            let balance=user.balance.toFixed(2);
            
            this.setState({
                balance:balance
            })
        }
    }
    goDetail(){
        this.props.history.push('/mine/balance/balanceDetail')
    }
    render() {
        return (
            <div className="mine-balance">
                <Head history={this.props.history} children={this.state.children}></Head>
                
                <div className="balance-content">
                    <div className="content">
                        <div className="balance-header">
                            <div className="tip">当前余额</div>
                            <div className="rule" onClick={this.goDetail.bind(this)}>余额说明</div>
                        </div>
                        <div className="balance-account">
                            <span>{this.state.balance}</span><span>元</span>
                        </div>
                        <div className="balance-confirm">提现   </div>
                    </div>
                </div>
                <div className="balance-pay-content">
                        <div className="balance-pay-tip">交易明细</div>
                        <div className="balance-pay-list">暂无交易明细</div>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps)(Balance);