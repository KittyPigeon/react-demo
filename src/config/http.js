/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-06-04 21:07:13
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-09 14:29:35
 */
import axios from 'axios';
import qs from 'qs';


axios.defaults.baseURL = "https://elm.cangdu.org";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


//自动切换环境
var http={};
http.post=function(url,param){
    return new Promise((resolve,reject)=>{
        //param=qs.stringify(param);
        axios.post(url,{
            params:param
        }).then((res=>{
            if(res.data){
                resolve(res.data)
            }else{
                reject('错误信息')
            }

        }))
    })
}


http.get=(url,param)=>{
    return new Promise((resolve,reject)=>{
        //param=qs.stringify(param);
        axios.get(url,{
            params:param
        }).then(res=>{
            resolve(res.data);
        })
    })
}
export default http;