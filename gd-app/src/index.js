import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom' //引入路由
import App from './App';

//上线自动改为Hash路由
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

ReactDOM.render(
  
    <Router>
      <App />,
    </Router>,
  document.getElementById('root')
);
