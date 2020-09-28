const { Router, urlencoded, json } = require('express');  //引入框架
const router = Router();                //启动路由
const cors = require('../tool/cors');   //引入封装的跨域组件

const home = require('./home');
const doclist = require('./doclist');
const knowledge = require('./knowledge')

router.use(urlencoded(), json());       //格式化请求数据
router.use(cors);                       //处理跨域

router.use('/home', home);              //首页
router.use('/doclist', doclist)         //医生列表
router.use('/knowledge', knowledge)     //疾病知识页

module.exports = router;                //导出路由