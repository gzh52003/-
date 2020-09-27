/* 我的页 */

import React from 'react'
import { NavBar } from 'antd-mobile';
import './index.css'
import Item from 'antd-mobile/lib/popover/Item';
class Mine extends React.PureComponent {
  state = {
    rong: [{
      left: '用户名:',
      spans: '设置',
      spand: '消息',
      bang: '已绑定手机:',
      ps: '请下载好大夫App,  第一时间接收',
      pss: '医生回复、获知订单状态。',
      ffe: '立即下载>',
      kkie: '问题反馈',
      img: '//i2.hdfimg.com/ssi/image/niudefu/ndf_mp.png?20200208'
    }],
    good: [
      {
        text: '我的订单',
        text1: '待支付',
        text2: '进行中',
        text3: '已完成',
        text4: '已取消',
        text5: '全部',
        img1: 'https://i2.hdfimg.com/ssi/usercenter/image/order_unpay.png',
        img2: 'https://i2.hdfimg.com/ssi/usercenter/image/order_doing.png',
        img3: 'https://i2.hdfimg.com/ssi/usercenter/image/order_done.png',
        img4: 'https://i2.hdfimg.com/ssi/usercenter/image/order_cancel.png',
        img5: 'https://i2.hdfimg.com/ssi/usercenter/image/order_all.png',
      }
    ],
    fiegood: [{
      name: '我的账户',
      shuzi: '0.00元',
      text: '0个',
      text1: '0张',
      name1: '余额',
      name2: '好豆',
      name3: '优惠券'

    }],
    feel: [{
      name: '工具与服务',
      img1: 'https://i2.hdfimg.com/ssi/usercenter/image/tool_patientinfo.png',
      img2: 'https://i2.hdfimg.com/ssi/usercenter/image/tool_prescription.png',
      img3: 'https://i2.hdfimg.com/ssi/usercenter/image/tool_mydoc.png',
      img4: 'https://i2.hdfimg.com/ssi/usercenter/image/tool_comment.png',
      img5: 'https://i2.hdfimg.com/ssi/usercenter/image/tool_privatedoc.png',
      img6: 'https://fe1.hdfimg.com/nusercenter/ssi/wapusercenter/prd/image/userindex/order_medicine.png',
      text1: '患者管理',
      text2: '我的处方',
      text3: '我的医生',
      text4: '诊后评价',
      text5: '私人医生订单',
      text6: '已经预约药单'

    }]
  }
  goto = ()=>{
    this.setState({
      current: 0,
    })
    this.props.history.push('./Home');
}
  render() {
    const { rong, good, fiegood, feel } = this.state;
    return (
      <div>
        <NavBar
          leftContent="<"
          onClick={this.goto}
          rightContent={[
            <span key='55' className='kisde'>问诊/挂号</span>,
          ]}
        >
          <p>个人中心</p>
        </NavBar>

        {
          rong.map((item, index) => (
            <div className="bule" key={index}>
              <div className='nice'>
                <span className='lefts'>{item.left}</span>
                <div className='boot'>
                  <span className='spans'>{item.spans}</span>
                  <span className='spans'>{item.spand}</span>
                </div>
              </div>
              <div className='heek'>
                <span>{item.bang}</span>
              </div>
              <div className='nide'>
                <p>{item.ps}</p>
                <p>
                  {item.pss}<span className='coloe'>{item.ffe}</span></p>
                <span className='button'><img src={item.img} />{item.kkie}</span>
              </div>
            </div>
          ))}

        <div className='haodaifu'>
          <p>
            <span>好大夫会员</span>
            <span>享全程就医指导等权益</span>
            <span>开通服务</span>
          </p>
        </div>

        <div className='background'>
          {
            good.map((item, index) => (
              <div className='good' key={index}>
                <p className='ps'>{item.text}</p>
                <ul className='ulli'>
                  <li><img src={item.img1} /><p>{item.text1}</p></li>
                  <li><img src={item.img2} /><p>{item.text2}</p></li>
                  <li><img src={item.img3} /><p>{item.text3}</p></li>
                  <li><img src={item.img4} /><p>{item.text4}</p></li>
                  <li><img src={item.img5} /><p>{item.text5}</p></li>
                </ul>
              </div>
            ))}

          {
            fiegood.map((item, index) => (
              <div className='fiegood' key={index}>
                <p className='ips'>{item.name}</p>
                <ul className='fulli'>
                  <li><span>{item.shuzi}</span><p>{item.name1}</p></li>
                  <li><span>{item.text}</span><p>{item.name2}</p></li>
                  <li><span>{item.text1}</span><p>{item.name3}</p></li>
                </ul>
              </div>
            ))}


          {
            feel.map((item, index) => (
              <div className='good goods' key={index}>
                <p className='ps'>{item.name}</p>
                <ul className='ulli'>
                  <li><img src={item.img1} /><p>{item.text1}</p></li>
                  <li><img src={item.img2} /><p>{item.text2}</p></li>
                  <li><img src={item.img3} /><p>{item.text3}</p></li>
                  <li><img src={item.img4} /><p>{item.text4}</p></li>
                  <li><img src={item.img5} /><p>{item.text5}</p></li>
                  <li><img src={item.img6} /><p>{item.text6}</p></li>
                </ul>
              </div>
            ))}
        </div>
        <div className='hear'>我要问诊</div>
      </div>
    )
  }
}

export default Mine;