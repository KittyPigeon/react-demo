import React,{Component} from 'react';
import Link from 'react-router-dom';
import store from '../../store/store2'
import Location from './location/location'

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'Product'
        };
    }
    componentDidMount () {
        }

    render(){
        return (
            <div>
                <Location />
            </div>
        );
    }
}


export default Home;