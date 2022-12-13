import React from 'react'
import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)

  return(
    <>
      <p>Error page</p>
      <p>{ error.statusText || error.message }</p>
    </>
  )
}
