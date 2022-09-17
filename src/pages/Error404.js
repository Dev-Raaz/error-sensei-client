import React from 'react'
import { Helmet } from 'react-helmet'

const Error404 = () => {
  return (
    <main>
        <Helmet>
          <title>Error 404</title>
          <meta name='description' content='Sorry ! Nothing to see here.'/>
        </Helmet>
        <h1 className="top-mar-0">Error 404</h1>
        <a href='/'>⬅ Home</a>
    </main>
  )
}

export default Error404