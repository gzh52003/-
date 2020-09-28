import axios from 'axios'

const baseURL = (process.env.NODE_ENV === 'development' ? 'http://localhost:3003/api' : '');

export default {
  // axios.get("http://localhost:3003/api/home").then(res => console.log("res1111", res))

  //请求全部数据
  reqAll(url) {
    return (
      axios.get(baseURL + url).then(res => { return res })
    )
  }
}