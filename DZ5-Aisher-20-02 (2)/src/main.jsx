import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import App from './App'
import './index.css'
import { rootReducer } from './redux/reducer/reducer'


const store=createStore(rootReducer, applyMiddleware(logger, thunk))
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
