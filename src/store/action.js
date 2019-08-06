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