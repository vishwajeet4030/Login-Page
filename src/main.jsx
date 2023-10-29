import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyle } from './GlobalStyle'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalStyle>
    <App />
  </GlobalStyle>,
)
