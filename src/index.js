import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { App } from './components'
import { BrowserRouter } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import './index.css'

const history = createBrowserHistory()

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter history={history}>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components', () => { render(App) })
}
