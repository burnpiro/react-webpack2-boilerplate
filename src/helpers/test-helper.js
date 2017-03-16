import React from 'react'
import * as enzyme from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

// Helps us sender components in right context
// Because router v4 allows us to put <Route> components inside our components test will fail unless Router is present
// We're using Memory router because tests are run in terminal
// And you're able to set history easily
function renderComponent (ComponentClass, props = {}, state = {}, renderType = 'shallow') {
  // Because enzyme has couple methods of rendering components user can choose which one he wants by passing parameter
  // allowed 'shallow' | 'render' | 'mount'
  const component = enzyme[renderType](
    <MemoryRouter>
      <ComponentClass {...props} />
    </MemoryRouter>
  )

  return {
    component
  }
}

export {renderComponent}
