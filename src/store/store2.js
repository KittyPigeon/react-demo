// index.js
// applyMiddleware: redux通过该函数来使用中间件
// createStore: 用于创建store实例

import {applyMiddleware,createStore} from 'redux'

import thunk from 'redux-thunk'

import reducers from './reducer'

let store = createStore(
    reducers,
    applyMiddleware(thunk)
   )
export default store;