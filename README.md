# 一. 全局设置 css 样式

## 1. /src 下创建 style.js 文件

```js
import { createGlobalStyle } from 'styled-components'; // createGlobalStyle  'styled-components'

export const GlobalStyle = createGlobalStyle`` // 设置全局样式 reset.css 文件等
```

## 2. /src 下 app.js

```js
import { GlobalStyle } from './style' 

function App() {
  return (
      <Fragment>
        <GlobalStyle />    // 可在最前引入全局样式
        <Header />
      </Fragment>
  );
}
```

# 二. header 部分redux设置总结

## 1. /src 下创建store文件夹,包括 index.js 和 reducer.js

### (1) index.js

```js
import { createStore } from 'redux' // createStore  'redux'
import reducer from './reducer'

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  // 传入的第二个参数是为了使用 redux-devtools-extension 工具
```

(2) reducer.js

```js
import { combineReducers } from 'redux'; // 可以引入多个reducer进行整合,引自 'redux'
import { reducer as headerReducer } from '../common/header/store'

const reducer = combineReducers({
    header: headerReducer
})
export default reducer
```

## 2. /src 下 app.js

```js

```

## 3. /src/common/header  下创建 store 文件夹 

(1) index.js

```js
import reducer from './reducer'  // index.js文件作用:暴露store文件夹下的多个参数
export { reducer }
```

(2) reducer.js

```js
const defaultState = {
    focused: false   //初始化 state 值
}
export default (state = defaultState, action) => {
    return state
}
```

## 4. /src/common/header  下 index.js 文件

```js
import { connect } from 'react-redux'  //  connect  'react-redux'
import { searchFocused, searchBlur } from './store/actionCreator'

// 将 store 中的值映射至组件中的 props
const mapStateToProps = state => {
    return {
        //通过 combineReducers 组合 reducer 后 state 下的值多封装了一层
        focused: state.header.focused  
    }
}
const mapDispatchToProps = dispatch => {
    return {
        searchInputFocused() {
            dispatch(searchFocused())  // 通过 actionCreator 创建 action  直接 dispatch
        },
        searchInputBlur() {
            dispatch(searchBlur())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
```

## 5.通过 immutable 管理 state 不被修改

```js
// 引用
import { fromJS } from 'immutable';
// 定义初始值
const defaultState = fromJS({
    focused: false
})
// 派发action改变值  immutable 对象的 set 方法,会结合之前 immutable 对象的值和设置的值,返回一个全新的对象
return state.set('focused', true) 
```

## 6.通过 redux-immutable 统一引用时的数据类型

```js
// src/store/reducer.js 引用  将引自 'redux' 的 combineReducers 方法(普通 js 对象 state) 替换为引自 'redux-immutable' 后( state 变为 immutable 对象)
import { combineReducers } from 'redux-immutable';
const reducer = combineReducers({
    header: headerReducer
})
// header/index.js 中 state 引用方法相应变化  getIn 方法传入字符串后,会逐层去查找相应对象的属性值
const mapStateToProps = state => {
    return {
        focused: state.getIn(['header', 'focused'])
    }
}
```

