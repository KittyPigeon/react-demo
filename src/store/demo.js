const redux = require('redux')
const createStore = redux.createStore

const types = {
  UPDATE_NAME: 'UPDATE_NAME'
}

const defaultStore = {
  user: 'tom'
}

/**
 * reducer 纯函数 接收一个state,返回一个新的state
 * @param {Object} state
 * @param {Object} action [type] 必选参数
 * @return newState
 * */
function getUser(state = defaultStore, action) {
  const { type, payload } = action
  let res = Object.assign({}, defaultStore)
  switch (type) {
    case types.UPDATE_NAME:
      res.user = payload.name
      break
    default:
      return res
  }
  return res
}

const store = createStore(getUser)

/**
 * listener
 * */
store.subscribe(() => {
  console.log(store.getState())
})


/**
 * dispatch(action) action
 * */
store.dispatch({
  type: types.UPDATE_NAME,
  payload: {
    name: '大帅哥'
  }
})


//@log { name: '大帅哥' }
// 复制代码
// 用户发出 action 【 store.dispatch(action) 】
// Store 自动调用 Reducer , 返回新的 state 【 let nextState = getUser(previousState, action) 】
// State 一旦有变化， Store 就会调用监听函数 【 store.subscribe(listener) 】