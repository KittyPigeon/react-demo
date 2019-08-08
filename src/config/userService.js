import http from './http';
function getLocation(){
    return http.get('/v1/cities?type=guess');
}

//查询热门城市
function getHotCity(){
    return http.get('/v1/cities?type=hot');
}

/**
 * 获取首页所有城市
 */
function getCityGroup(){
    return http.get('/v1/cities?type=group');
}
//引入城市id 获取城市信息
function getCity(id){
    
    return http.get('/v1/cities/'+id);
}


/**
 * 获取搜索地址
 */
function getSearchCity(param){
    return http.get('/v1/pois',param);
}

export default{
    getLocation,
    getHotCity,
    getCityGroup,
    getCity,
    getSearchCity
}