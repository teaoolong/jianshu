import React, { Fragment } from 'react';
import Header from './common/header'
import { GlobalStyle } from './style'
import { Provider } from 'react-redux'
import store from './store'
import './assets/iconfont/iconfont.css'

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalStyle />
        <Header />
      </Fragment>
    </Provider>
  );
}

export default App;
