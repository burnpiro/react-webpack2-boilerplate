import React from 'react'
import App from './App'
// helper method allows us to render components with router and other dependencies
import { renderComponent } from '../../helpers/test-helper'

describe('App', function () {
  it('renders without crashing', () => {
    const { component } = renderComponent(App, null, null, 'mount')
  })
})