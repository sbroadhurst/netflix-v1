import '../styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import mediaSlice from '../slices/mediaSlice'
import reportWebVitals from '../reportWebVitals'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

// ---Redux DevTools
// let composeEnhancers
// if (typeof window !== 'undefined') {
//   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// }

// // const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// // let composeEnhancers = composeWithDevToolsExtension

const store = configureStore({ reducer: mediaSlice })

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps}></Component>{' '}
    </Provider>
  )
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

export default App
