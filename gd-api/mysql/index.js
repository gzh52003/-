/* mySQL数据库操作 */

const mysql = require('mysql');

//创建连接池
let pool = mysql.createPool({
  host: 'localhost',   //本机地址
  user: 'root',        //用户名
  password: '123456',  //密码
  database: 'gd',     //数据库
  //port:3306,          //端口
  multipleStatements: true
})

//封装操作数据库的方法
function request(sql) {
  return new Promise((resolve, reject) => {
    pool.query(sql, (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  })
}

module.exports = request;