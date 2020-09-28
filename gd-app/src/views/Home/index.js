/* 首页 */


import React from 'react';
import { SearchBar, Grid, Carousel, WingBlank, Badge, Tabs, WhiteSpace, NavBar } from 'antd-mobile';
import './index.css'
import request from './api'
import axios from "axios"

const tabs = [
  { title: '综合' },
  { title: '儿科' },
  { title: '妇产科' },
  { title: '骨科' },
  { title: '口腔科' },
  { title: '五官科' },
];
class Home extends React.PureComponent {
  state = {
    render: [{
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `找专家`,
      dco: '75+医生'

    }, {
      icon: 'https://n2.hdfimg.com/g2/M04/D6/C9/yIYBAF6qw6eASGOwAAURralh7vg522_58_58_1.png?52a9',
      text: `去开药`,
      dco: '75+医生'

    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `复诊/开药`,
      dco: '75+医生'
    }],
    data: ['1', '2', '3', '4', '5', '6', '7', '8'],
    list: [
      {
        title: '网站问诊-普通号',
        tit01: '今日剩余号',
        tit02: '57',
        tit03: '在线时间：10：00-22：00',
        huibiao: '自动缴费'

      },
      {
        title: '网站问诊-急诊',
        tit01: '10分钟',
        tit02: '接诊',
        tit03: '23万医生抢单'
      }
    ],
    fast: [{
      img: 'https://n2.hdfimg.com/g2/M04/D6/C9/yIYBAF6qw6eASGOwAAURralh7vg522_58_58_1.png?52a9',
      name: "杜鹃",
      center: '副主任医师来自不喜欢就必须减少成本和'

    }, {
      img: 'https://n2.hdfimg.com/g2/M04/D6/C9/yIYBAF6qw6eASGOwAAURralh7vg522_58_58_1.png?52a9',
      name: "杜鹃",
      center: '副主任医师来自不喜欢就必须减少成本和'

    }, {
      img: 'https://n2.hdfimg.com/g2/M04/D6/C9/yIYBAF6qw6eASGOwAAURralh7vg522_58_58_1.png?52a9',
      name: "杜鹃",
      center: '副主任医师来自不喜欢就必须减少成本和'

    }, {
      img: 'https://n2.hdfimg.com/g2/M04/D6/C9/yIYBAF6qw6eASGOwAAURralh7vg522_58_58_1.png?52a9',
      name: "杜鹃",
      center: '副主任医师来自不喜欢就必须减少成本和'

    }],
    kiss: [{
      img: 'https://n2.hdfimg.com/g2/M04/D6/C9/yIYBAF6qw6eASGOwAAURralh7vg522_58_58_1.png?52a9',
      name: "杜鹃",
      center: '副主任医师来自不喜欢就必须减少成本和',
      title: '在线服务患者6465人'

    }, {
      img: 'https://n2.hdfimg.com/g2/M04/D6/C9/yIYBAF6qw6eASGOwAAURralh7vg522_58_58_1.png?52a9',
      name: "杜鹃",
      center: '副主任医师来自不喜欢就必须减少成本和',
      title: '在线服务患者6465人'


    }, {
      img: 'https://n2.hdfimg.com/g2/M04/D6/C9/yIYBAF6qw6eASGOwAAURralh7vg522_58_58_1.png?52a9',
      name: "杜鹃",
      center: '副主任医师来自不喜欢就必须减少成本和',
      title: '在线服务患者6465人'


    }, {
      img: 'https://n2.hdfimg.com/g2/M04/D6/C9/yIYBAF6qw6eASGOwAAURralh7vg522_58_58_1.png?52a9',
      name: "杜鹃",
      center: '副主任医师来自不喜欢就必须减少成本和',
      title: '在线服务患者6465人'


    }, {
      img: 'https://n2.hdfimg.com/g2/M04/D6/C9/yIYBAF6qw6eASGOwAAURralh7vg522_58_58_1.png?52a9',
      name: "杜鹃",
      center: '副主任医师来自不喜欢就必须减少成本和',
      title: '在线服务患者6465人'



    }],
    tese: [{
      title2: '专家会诊',
      title3: '大病求助',
    }, {
      title2: '专家会诊',
      title3: '大病求助',
    }, {
      title2: '专家会诊',
      title3: '大病求助',
    }],
    three: [{
      title1: '免费义诊',
      title2: '图文'
    }, {
      title1: '免费义诊',
      title2: '图文',
      huibiao: '贴心'
    }, {
      title1: '免费义诊',
      title2: '图文'
    }]
  }
  goto = () => {
    this.setState({
      current: 0,
    })
    this.props.history.push('./Mine');
  }

  async componentDidMount() {
    const p = await request.reqAll();
    axios.get("/api/home").then(res => { 
      console.log("res11111111", res)
    })
    console.log('数据为', p);
    //console.log('request==',request);
  }

  render() {
    const { list, fast, kiss, tese, three, render } = this.state;
    return (
      <div>
        <div className='div'>
          {/* <NavBar
            mode="dark"
            leftContent="Back"
            key='nav'
            rightContent={
              <span
              onClick={this.goto}
              >我的</span>
            }>

          </NavBar> */}

          {/* 搜索栏 */}
          <>
            <SearchBar placeholder='疾病,医生+城市，医院等'
              className="one"
            />
          </>

          {/* 三个宫格模块 */}
          {
            render.map((item, index) => (
              <div style={{ padding: '12px', background: 'blue', width: '26%', float: 'left' }} key={index}>
                <div style={{ border: '1px solid red', borderRadius: "10px", background: 'skyblue' }}>
                  <img src={item.icon} style={{ width: '25px', height: '25px', marginTop: 10, borderRadius: "50%", background: 'blue' }} alt="" />
                  <div style={{ color: 'black', fontSize: '20px', margin: 10 }}>
                    <span style={{ fontSize: 12 }}>{item.text}</span>
                  </div>
                  <div style={{ color: 'black', fontSize: '14px', marginTop: 10 }}>
                    <div>{item.dco}</div>
                  </div>
                </div>
              </div>
            ))}
          {/* banner图 */}
          <div >
            <img className="tu" src="https://fe1.hdfimg.com/nactivity/yizhen/images/index_banner.png" />
          </div>
          {/* 双宫格 */}
          <div className='grid2'>
            {
              list.map((item, index) => (
                <div style={{ width: '160px', height: '100%', float: 'left', borderRadius: '7px', background: 'white' }} key={index}>
                  <Badge text={item.huibiao ? item.huibiao : ''}
                    style={{
                      marginLeft: 90,
                      padding: '0 3px',
                      backgroundColor: '#fff',
                      borderRadius: 2,
                      color: '#f19736',
                      border: '1px solid #f19736',
                    }}
                  />
                  <h2 style={{ margin: 0 }}>{item.title}</h2>
                  <div style={{ width: '100%', margin: '8px 0' }}><h5 style={{ margin: 0, width: '90px', float: 'left', textAlign: 'right' }}>{item.tit01}</h5><span style={{ margin: 0, float: 'left', width: '30px', color: '#f19736' }}>{item.tit02}</span></div>
                  <h4 style={{ textAlign: 'center', width: '100%', marginTop: '4px', fontSize: '12px' }}>{item.tit03}</h4>
                </div>
              ))
            }
          </div>

          {/* 专家号 */}
          <div
            className="data3">
            <h3 style={{
              marginLeft: -200,
              paddingTop: 20
            }}>网上问诊-专家号</h3>
            <span className="rigte">查看全部(17万)</span>
            <div>
              <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}
                style={{ background: 'blue', width: 30, height: 30 }}
              >
              </Tabs>
            </div>
            {/* 医生信息 */}

            {
              fast.map((item, index) => (
                <div className='gider' key={index}>
                  <img className='imgs' src={item.img} />
                  <div className="kscksan"><h4>{item.name}</h4>{item.center}</div>
                </div>
              ))}
          </div>
          {/* 三模块 */}
          {
            three.map((item, index) => (
              <div className='hiege' key={index}>
                <div className="tuwen">
                  <p style={{ fontSize: 16 }}>{item.title1}</p>
                  <span style={{ fontSize: 10, color: '#fff' }}>{item.title2}</span>
                  <Badge text={item.huibiao ? item.huibiao : ''}
                    style={{
                      marginLeft: 12,
                      padding: '0 3px',
                      backgroundColor: '#fff',
                      borderRadius: 2,
                      color: '#f19736',
                      border: '1px solid #f19736',
                      marginTop: -80,
                      marginLeft: 60,
                    }}
                  />
                </div>
              </div>
            ))}
          {/*滚动消息栏  */}
          <div className='hook'>
            <div className="icon">
              <Badge text="健康头条"
                style={{
                  marginLeft: 12,
                  padding: '0 5px',
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  color: 'red',
                  border: '1px solid red',
                }}
              />
            </div>
            <WingBlank>
              <Carousel className="my-carousel"
                vertical
                dots={false}
                dragging={false}
                swiping={false}
                autoplay
                infinite
              >
                <div className="v-item">落霞与孤鹜齐飞，秋水共长天一色</div>
                <div className="v-item">今宵酒醒何处杨柳岸</div>
                <div className="v-item">晓风残月此去经年应是</div>
              </Carousel>
            </WingBlank>
          </div>
          {/* 特色服务 */}
          <div className='origer' >
            <p style={{ fontSize: 24 }}><span className='widhtspan'></span><span>特色服务</span ><span className='widhtspan'></span></p>
            {
              tese.map((item, index) => (
                <div className="tuwens " style={{ paddingBottom: 15 }} key={index}>
                  <p style={{ fontSize: 16, }}>{item.title2}</p>
                  <span style={{ fontSize: 10, color: '#fff' }}>{item.title3}</span>
                </div>
              ))}
          </div>
          <div className='origer'>
            <p style={{ fontSize: 24 }}><span className='widhtspan'></span><span>好大夫会员</span ><span className='widhtspan'></span></p>

            <ul className="classul">
              <li>专属会员优惠</li>
              <li>专属顾问一对一</li>
              <li>名医面诊咨询</li>
              <li>大医院住院咨询</li>
            </ul>
            <button style={{ width: '70%', height: 30, borderRadius: 30, background: ' orange', color: '#fff', border: 'none', marginBottom: 20 }}>点击了解会员详情》</button>
          </div>
          <div className='nices'>
            <button className='classbutton'>好大夫推荐医生</button>
            <button style={{ border: '1px solid #ccc', width: '15%', marginLeft: '80%', color: 'blue', backgroundColor: 'transparent' }}>全国</button>
            <div style={{}}>
              <Tabs tabs=
                {tabs} initialPage={2} animated={false} useOnPan={false}>


              </Tabs>
              {
                kiss.map((item, index) => (
                  <div className='gider' style={{ border: '1px solid #ccc' }} key={index}>
                    <img className='imgs' src={item.img} />
                    <div className="kscksan" ><h4 className='flaot'>{item.name}</h4>{item.center}</div>
                    <p>{item.title}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;
