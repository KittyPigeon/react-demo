import React,{Component} from 'react';
import store from '../../store/store';

class Order extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'Order'
        };
    }
    componentWillMount() {
        console.log('Component WILL MOUNT!');
        console.log(store.getState());
    }
    componentDidMount() {
         console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
          console.log('Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
          return true;
    }
    componentWillUpdate(nextProps, nextState) {
          console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
          console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
           console.log('Component WILL UNMOUNT!')
    }

    render(){
        return (
            <div>Order{store.getState().routerReducer.route}</div>
        );
    }
}
export default Order;