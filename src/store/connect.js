import {connect} from 'react-redux'

import {bindActionCreators} from 'redux'

import action from './action.js'

 

export default connect(

 state=>state.main,

 dispatch=>bindActionCreators(action,dispatch)

)