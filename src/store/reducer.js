import {combineReducers} from 'redux'

import defualtState from './state'

function pageTitle (state=defualtState.pageTitle,action){
    switch(action.type){
        case 'SET_PAGE_TITLE':
            console.log(action)
            return action.data;
        default:
            return state;
    }
}
function user(state=defualtState.user,action){
    switch(action.type){
        case 'SET_USER_INFO':
            return action.data;
        default:
            return state;
    }
}
function token(state=defualtState.token,action){
    switch(action.type){
        case 'SET_TOKEN':
            return action.data;
            default:
                return state
    }
}
 export default combineReducers({
    pageTitle,
    user,
    token
})