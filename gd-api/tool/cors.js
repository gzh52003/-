/* cors跨域处理 */

<<<<<<< HEAD
// const whileList = ['http://localhost:3000', 'http://localhost:3003', 'http://10.3.138.128/'] //设置跨域白名单
const whileList = ['http://localhost:3003', 'http://localhost:3000','http://10.3.138.128/'] //设置跨域白名单
=======
const whileList = ['http://localhost:3000', 'http://localhost:3003'] //设置跨域白名单
>>>>>>> gr

function cors(req, res, next) {


  const origin = req.get('Origin'); //获取请求者的域名
  if (1) {
    res.set({ //设置请求头
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type,Content-Length, Authorization, Accept,X-Requested-With",
      "Access-Control-Allow-Methods": "PUT,POST,GET,PATCH,DELETE,OPTIONS"
    })
    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
      res.sendStatus(200);  /*让options请求快速返回*/
    } else {
      next();
    }

  } else {
    next();
  }

}

module.exports = cors;