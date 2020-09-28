/* 首页 */

import React from 'react'
import axios from "axios"


class Home extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:3003/api/home").then(res => console.log("res1111", res))
  }
  render() {
    return (
      <div><h2>首页</h2></div>
    )
  }

}

export default Home;