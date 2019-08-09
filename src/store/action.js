/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-07-18 16:17:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-09 15:23:07
 */
export function setPageTitle(data){
    return (dispatch,getState)=>{
        dispatch({
            type:'SET_PAGE_TITLE',
            data:data
        })
    }
}
export function setToken(data){
    return (dispatch,getState)=>{
        dispatch({
            type:'SET_TOKEN',
            data:data
        })
    }
}

export function setUserInfo(data){
    return (dispatch,getState)=>{
        dispatch({
            type:'SET_USER_INFO',
            data:data
        })
    }
}

export function setLocation(data){
    return (dispatch,getState)=>{
        dispatch({
            type:'SET_LOCATION',
            data:data
        })
    }
}