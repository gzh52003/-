/* 我的医生页 */

import React from 'react'
import { NavBar } from 'antd-mobile';
import './index.css'

class Mydoctor extends React.PureComponent {
  state = {
    buttil: [{
      ico: 'https://fe1.hdfimg.com/nusercenter/ssi/wapusercenter/prd/image/family-icon.png',
      txte: '家庭医生',
      name: '限时免费开通',
      jiant: '>'
    }],
    imgs: [{
      img: 'https://fe1.hdfimg.com/nusercenter/ssi/wapusercenter/prd/image/ndf_empty.png',
      name1: '当前没有服务医生',
      name2:'去申请医生',
    }]
  }
  
  goto = ()=>{
    this.setState({
      current: 0,
    })
    this.props.history.push('./Home');
  }
  gotos = ()=>{
    this.setState({
      current: 0,
    })
    this.props.history.push('./Mine');
}
  render() {
    const { buttil,imgs } = this.state;
    return (
      //头部
      <div>
        <div >
          {/* <NavBar
            leftContent="Back"
            rightContent={[
              <span key='12' style={{ marginRight: 30 }} onClick={this.goto}>首页</span>,
              <span key='11'onClick={this.gotos} >我的</span>
            ]}>
          </NavBar> */}
          {/* 我的医生 */}
          <div className="left"><span className='leftright'>我的医生</span>
            <button className='right'>我的订单</button></div>
        </div>
   
        {
          buttil.map((item, index) => (
            < div key={index} >
              <div className='buttons'>
                <img src={item.ico} className='imgs'/>
                <div className='fames'>
                  <h2 className='famile'>{item.txte}</h2>
                  <span className='familes'>{item.name}</span>
                </div>
                <span className='jiant'>{item.jiant}</span>
              </div>
            </div>
          ))}
        {imgs.map((item, index) => (
          <div key={index} className='divimgs'>
            <img src={item.img} className='imgss' />
            <h2>{item.name1}</h2>
            <h3 className='blue'>{item.name2}</h3>
          </div>
    ))
  }
      </div >
    )
  }
}

export default Mydoctor;