import { createStore, combineReducers } from 'redux';
 
const initialUserState = {
  users: {
    name:'大军'
  }
 }
 const userReducer = function(state = initialUserState, action) {
   switch(action.type) {
   case 'USER_LIST_SUCCESS':
     return Object.assign({}, state, { users: action.users });
   }
   return state;
 }
 
// The Widget Reducer
const widgetReducer = function(state = {}, action) {
  return state;
}
 // The router Reducer
const routerReducer = function(state = { route:'route'}, action) {
  switch(action.type){
    case 'ROUTE-TAB':
    return Object.assign({},state,{route:action.route});

    case 'ROUTE-PAGE':
      return Object.assign({},state,{route:action.route})
  }
  return state;
}
// 合并 Reducers
const reducers = combineReducers({
  userState: userReducer,
  widgetState: widgetReducer,
  routerReducer:routerReducer
});
 
const store = createStore(reducers);
store.subscribe(()=>{
  console.log(store.getState());
})
export default store;