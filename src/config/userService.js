/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-06-04 21:07:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-09 14:28:13
 */
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

/**
 * 获取用户信息
 */
function getUserInfo(param){
    return http.get('/v1/user',param);
}

/**
 * 获取base64位图片
 */
function getBase64(){
    return http.get('/v1/captchas');
}
export default{
    getLocation,
    getHotCity,
    getCityGroup,
    getCity,
    getSearchCity,
    getUserInfo,
    getBase64
}