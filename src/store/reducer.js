/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-07-18 16:22:04
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-09 15:49:17
 */
import {combineReducers} from 'redux'

import defualtState from './state'

function pageTitle (state=defualtState.pageTitle,action){
    switch(action.type){
        case 'SET_PAGE_TITLE':
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
function location(state=defualtState.location,action){
    switch(action.type){
        case 'SET_LOCATION':
            return action.data;
            default:
                return state;
    }
}
 export default combineReducers({
    pageTitle,
    user,
    token,
    location
})