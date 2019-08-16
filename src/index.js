import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store2';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'
//import "lib-flexible";
import AnimatedRouter from 'react-animated-router'; //导入我们的的AnimatedRouter组件
import 'react-animated-router/animate.css'; //导入默认的切换动画样式，如果需要其它切换样式，可以导入自己的动画样式定义文件复制代码
import './animate.css'
import { TransitionGroup, CSSTransition } from "react-transition-group";
ReactDOM.render(
    <TransitionGroup>
        <CSSTransition
            in={true}
                              classNames={{
                                enter: 'animated',
                                enterActive: 'bounceIn',
                                exit: 'animated',
                                exitActive: 'bounceOut'
                              }} 
                              // 动画时间设置为800ms，和css中的需要一致。
                              timeout={800}
        >
        <Provider store={store}><App /></Provider>
        </CSSTransition>
    </TransitionGroup>,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
