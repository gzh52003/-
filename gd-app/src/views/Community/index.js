/* 社区页 */

import React from 'react'
import { NavBar } from 'antd-mobile';
import './index.css'
class Community extends React.PureComponent {
  state = {
    grens: [{
      fanhui: '<',
      name:'医患社区'
    }],
    imgs: [{
      img: 'https://fe1.hdfimg.com/nusercenter/ssi/wapusercenter/prd/image/ndf_empty.png',
      name1: '您还没有关注任何社区',
      name2:'https://fe1.hdfimg.com/nforum/community/images/message.png',
    }]
  }
  goto = ()=>{
    this.setState({
      current: 0,
    })
    this.props.history.push('./Home'); 
}
  render() {
    const { grens,imgs } = this.state
    return (
      <div>
         <NavBar

          leftContent="<"
          onClick={this.goto}
            rightContent={[
          ]}>
          <span>医患社区</span>
          </NavBar>
  
          {imgs.map((item, index) => (
          <div key={index} className='divimges'>
            <img src={item.img} className='imgess' />
            <h2>{item.name1}</h2>
              <img className='bluee' src={item.name2}></img>
          </div>
    ))
  }
      </div>
    
    )
  }
}

export default Community;