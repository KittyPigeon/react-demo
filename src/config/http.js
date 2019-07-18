import axios from 'axios';
import qs from 'qs';


//自动切换环境
var http={};
http.post=function(api,param){
    return new Promise((resolve,reject)=>{
        param=qs.stringify(param);
        axios.post(api,param).then((res=>{
            resolve(res)
        }))
    })
}


http.get=(api,param)=>{
    return new Promise((resolve,reject)=>{
        param=qs.stringify(param);
        axios.get(api,param).then(res=>{
            resolve(res);
        })
    })
}
export default http;