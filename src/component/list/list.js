import React,{Component} from 'react';
import { connect } from 'react-redux';
import store from '../../store/store';
import './list.scss';
class list extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'Product'
        };
    }
    componentDidMount() {
        this.$axios.get('https://elm.cangdu.org/v1/cities?type=guess').then(response => {
            let data={
                name:response.data.name
            }
            console.log(data);
            console.log(this.props)
          store.dispatch({
            type: 'USER_LIST_SUCCESS',
            users: data
          });
        });
      }
      render() {
        return (
            <div className="user">{this.props.users.name}<button className="btn" onClick={this.componentDidMount.bind(this)}>单击我</button><span className="value"></span></div>
        );
      }
} 
const mapStateToProps = function(store) {
  return {
    users: store.userState.users
  };
}
 
export default connect(mapStateToProps)(list);