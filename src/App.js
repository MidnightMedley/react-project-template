import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import {
  Home,
  ErrorPage
} from './pages'
 
export const App = () => {

  return(
    <RouterProvider router={
      createBrowserRouter([
        {
          path: '/',
          element: <Home />,
          errorElement: <ErrorPage />
        }
      ])
    } />
  )
}
