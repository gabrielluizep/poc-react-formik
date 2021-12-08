import React from 'react'
import ReactDOM from 'react-dom'

import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

import { Routing } from 'navigation/index.js'

import 'styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <Routing />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
