import axios from 'axios';
import qs from 'qs';


axios.defaults.baseURL = "https://elm.cangdu.org";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


//自动切换环境
var http={};
http.post=function(url,param){
    return new Promise((resolve,reject)=>{
        param=qs.stringify(param);
        axios.post(url,param).then((res=>{
            resolve(res.data)
        }))
    })
}


http.get=(url,param)=>{
    return new Promise((resolve,reject)=>{
        param=qs.stringify(param);
        axios.get(url,param).then(res=>{
            resolve(res.data);
        })
    })
}
export default http;