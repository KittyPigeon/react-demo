import React, { Component } from 'react'
import './tip.scss'

export default class Tip extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        console.log(this);
    }

    confirm(){
        this.props.msgConfirm();
    }
    render() {
        return (
            <div className="tip-wrapper" style={{display: this.props.show? "block" : "none"}} >
                <section className="tip-content  bounceIn animated ">
                    <div className="tip-icon">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="tip-msg">{this.props.msg}</div>
                    <div className="confirm" onClick={this.confirm.bind(this)}>确认</div>
                </section>

            </div>
        )
    }
}
