import React from 'react';
import { withRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { HomeOutlined, UsergroupAddOutlined, ReadOutlined, MedicineBoxOutlined, UserOutlined } from '@ant-design/icons'
import './App.css'
import { Flex } from 'antd-mobile';

import Home from '~/Home'             //首页
import Mydoctor from '~/Mydoctor'     //我的医生
import Knowledge from '~/Knowledge'   //疾病知识
import Community from '~/Community'   //社区
import Mine from '~/Mine'             //我的

//ES7装饰器（只能用于类组件）
@withRouter

class App extends React.Component {
  state = {
    menu: [
      {
        id: 1,
        title: '首页',
        path: '/home',
        icon: <HomeOutlined style={{ fontSize: "22px" }} />
      },
      {
        id: 2,
        title: '我的医生',
        path: '/mydoctor',
        icon: <UsergroupAddOutlined style={{ fontSize: "22px" }} />
      },
      {
        id: 3,
        title: '疾病知识',
        path: '/knowledge',
        icon: <ReadOutlined style={{ fontSize: "22px" }} />
      },
      {
        id: 4,
        title: '社区',
        path: '/community',
        icon: <MedicineBoxOutlined style={{ fontSize: "22px" }} />
      },
      {
        id: 5,
        title: '我',
        path: '/mine',
        icon: <UserOutlined style={{ fontSize: "22px" }} />
      },
    ],
    sign: 1
  }

  setSign = (id) => {
    // console.log('点击了',id);
    this.setState({
      sign: id
    })
  }

  render() {
    const { menu, sign } = this.state;
    return (
      <div className="App">
        {/* 路由 */}
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/mydoctor' component={Mydoctor} />
          <Route path='/knowledge' component={Knowledge} />
          <Route path='/community' component={Community} />
          <Route path='/mine' component={Mine} />
          <Route path='/nopage' render={() => <div><h1>页面跑丢了！404</h1></div>} />
          {/* 
            Redirect 路由重定向
            exact 精确匹配
          */}
          <Redirect from='/' to='/home' exact />
          <Redirect to='/nopage' />
        </Switch>

        {/* 底部导航栏 */}
        <div className='tabbar'>
          <Flex style={{ textAlign: 'center' }}>
            {
              menu.map(item => (
                <Flex.Item key={item.id}>
                  <NavLink to={item.path}>
                    <div className='flexItem' style={item.id === sign ? { color: 'blue' } : {}} onClick={this.setSign.bind(null, item.id)}>
                      {item.icon}
                      <p style={{ margin: '4px 0' }}>{item.title}</p>
                    </div>
                  </NavLink>
                </Flex.Item>
              ))
            }

          </Flex>
        </div>
      </div>
    );
  }

}

export default App;
