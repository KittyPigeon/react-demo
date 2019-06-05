import http from './http';
export default  function loginByMobile(param){
    http.post('merge/manage/user/saveVerCode',param);
}

