import http from './http';
function getLocation(){
    return http.get('/v1/cities?type=guess');
}

export default{
    getLocation
}