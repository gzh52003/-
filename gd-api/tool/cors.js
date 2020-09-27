/* cors跨域处理 */

const whileList = ['http://localhost:8080', 'http://localhost:8090'] //设置跨域白名单

function cors(req, res, next) {

  const origin = req.get('Origin'); //获取请求者的域名
  if (whileList.includes(origin)) {
    res.set({ //设置请求头
      "Access-Control-Allow-Origin": origin,
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