import React from 'react'
import {
  Navigate,
  // Route, Routes,
  useRoutes,
} from 'react-router'

import { Login } from 'pages'

// New approach
const routes = [
  {
    path: '/',
    element: <Navigate replace to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]

export const Routing = () => {
  // New approach
  const element = useRoutes(routes)

  return element
}
