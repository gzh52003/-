const express = require('express'); //引入express框架
const app = express();              //启动服务
const router = require('./api');      //引入接口组件

app.use(express.static('./'));  //开启静态资源服务器
app.use('/api', router);

app.listen(3003, () => {            //启动监听
  console.log('启动监听3003端口')
})