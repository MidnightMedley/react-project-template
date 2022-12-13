import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import {
  Home,
  ErrorPage
} from './pages'
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  }
])

export const App = () => {
  return(
    <RouterProvider router={router} />
  )
}
