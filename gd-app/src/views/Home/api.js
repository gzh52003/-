import request from '@/utils/request';
export default {

    //查询所有数据
    reqAll() {
        return request({
            mothod: 'get',
            url:'/home'
        })
    }
}