import React,{Component} from 'react';
import { connect } from 'react-redux';
import store from '../../store/store';
import './headerTitle.scss';
import backIcon from '../../resource/images/arrow.png';
class headerTitle extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'title'
        }
    }
    render (){
        return (
            <div className="head-title">
                <img src={backIcon} alt="" className="back-icon"/>
                <div className="title">{this.props.route}</div>
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
      route: store.routerReducer.route
    };
  }
  export default connect(mapStateToProps)(headerTitle);