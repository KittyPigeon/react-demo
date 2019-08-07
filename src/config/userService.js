import http from './http';
function getLocation(){
    return http.get('/v1/cities?type=guess');
}

function getHotCity(){
    return http.get('/v1/cities?type=hot');
}
function getCityGroup(){
    return http.get('/v1/cities?type=group');
}
function getCity(id){
    
    return http.get('/v1/cities/'+id);
}
export default{
    getLocation,
    getHotCity,
    getCityGroup,
    getCity
}