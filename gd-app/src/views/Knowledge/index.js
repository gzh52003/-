/* 疾病知识页 */

import React from 'react'
import { SearchBar, Tag, Button } from 'antd-mobile';
import { ProfileOutlined, PlaySquareOutlined } from '@ant-design/icons'
import './index.css'

class Knowledge extends React.Component {
  state = {
    grid: [
      {
        id: 1,
        grid1: [
          {
            title: '儿科学',
            imgurl: '//fe1.hdfimg.com/narticle/waparticle/images/faculty1.png'
          },
          {
            title: '妇产科学',
            imgurl: '//fe1.hdfimg.com/narticle/waparticle/images/faculty2.png'
          },
          {
            title: '男科',
            imgurl: '//fe1.hdfimg.com/narticle/waparticle/images/faculty1.png'
          },
          {
            title: '皮肤性病科',
            imgurl: '//fe1.hdfimg.com/narticle/waparticle/images/faculty4.png'
          }
        ],
      },
      {
        id: 2,
        grid1: [
          {
            title: '精神心理科',
            imgurl: '//fe1.hdfimg.com/narticle/waparticle/images/faculty5.png'
          },
          {
            title: '生殖中心',
            imgurl: '//fe1.hdfimg.com/narticle/waparticle/images/faculty1.png'
          },
          {
            title: '肿瘤科',
            imgurl: '//fe1.hdfimg.com/narticle/waparticle/images/faculty_other.png'
          },
          {
            title: '查看全部',
            imgurl: '//fe1.hdfimg.com/narticle/waparticle/images/faculty1.png'
          }
        ]
      }
    ],
    btn: ['视频', '语音', '图文'],
    lists: [
      {
        title: '灰指甲不想吃药，一般外用药物效果差，怎么办靠谱？',
        name: '郭波',
        nameTit: '主治医师',
        haspital: '桐乡市皮肤病防治院',
        speak: '4105条评价',
        look: '15.5万人已观看',
      },
      {
        title: '灰指甲不想吃药，一般外用药物效果差，怎么办靠谱？',
        name: '郭波',
        nameTit: '主治医师',
        haspital: '桐乡市皮肤病防治院',
        speak: '4105条评价',
        look: '15.5万人已观看',
        label01: '简短易懂',
        label01_num: 2,
        label02: '讲解透彻',
        label02_num: 2,
        label03: '消除了我的困惑',
        label03_num: 2,
        type: 'lis'
      },

    ]
  }

  render() {
    const { grid, btn, lists } = this.state;

    return (
      <div>
        {/* 搜索栏 */}
        <SearchBar placeholder="搜索更多疾病知识" maxLength={8} />

        {/* 宫格 */}
        <div className='grid'>
          {
            grid.map((item, index) => (
              <div className={item.id} key={index} style={{ width: '100%', height: '90px', display: 'flex', justifyContent: 'space-around' }}>
                {
                  item.grid1.map((its, ins) => (
                    <div className='gd' key={ins}>
                      <img className='gd_img' src={its.imgurl}></img>
                      <h4>{its.title}</h4>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>

        {/* 我的关注 */}
        <div className='myKnowledge'>
          <h2 style={{ width: '100%', height: '50%', textAlign: 'center', fontWeight: 'initial', margin: '17px 0 0 0' }}>我的关注</h2>
          <div style={{ width: '50%', height: '50%', }}>
            <Tag selected style={{ float: 'left', marginLeft: '10px' }}>推荐</Tag>
            <h3 style={{ margin: 0, fontWeight: 'inherit', color: 'blue' }}>+添加疾病</h3>
          </div>
        </div>
        <div className='mk_but'>
          {
            btn.map((item, index) => (
              <Button key={index} inline size="small" style={{ borderRadius: '30px', width: '100px', background: 'rgb(231, 232, 231)' }}>{item}</Button>
            ))
          }
        </div>

        {/* 列表 */}
        {
          lists.map((item, index) => (
            <div className='list' key={index}>
              <h3 className='list_tit'>{item.title}</h3>
              <div style={{ width: '100%', marginBottom: '8px' }}>
                <span className='list_sp'>{item.name}</span>
                <span className='list_sp'>{item.nameTit}</span>
                <span className='list_sp'>{item.haspital}</span>
              </div>
              <div style={{ width: '100%', textAlign: 'left', marginBottom: '8px' }}>
                <ProfileOutlined /><span style={{ marginRight: '10px' }}>{item.speak}</span>
                <PlaySquareOutlined /><span>{item.look}</span>
              </div>
              <div style={{ textAlign: 'left', paddingBottom: '15px', borderBottom: '1px solid gray' }}>
                {
                  item.label01 ? (
                    <>
                      <Tag small style={{ border: '1px solid gray', marginRight: '10px' }}>{item.label01}<span style={{ color: 'blue' }}>{item.label01_num}</span></Tag>
                      <Tag small style={{ border: '1px solid gray', marginRight: '10px' }}>{item.label02}<span style={{ color: 'blue' }}>{item.label02_num}</span></Tag>
                      {
                        item.label03 ? (
                          <Tag small style={{ border: '1px solid gray', marginRight: '10px' }}>{item.label03}<span style={{ color: 'blue' }}>{item.label03_num}</span></Tag>
                        ) : ''
                      }
                    </>
                  ) : ''
                }
              </div>
            </div>
          ))
        }

        {/* 底线 */}
        <div style={{ width: '100%', height: '50px', lineHeight: '50px', color: 'gray' }}>
          ---- 我是有底线的 ----
        </div>
      </div>
    )
  }

}

export default Knowledge;