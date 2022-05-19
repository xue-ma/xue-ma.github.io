import React from 'react'
import { Helmet } from 'react-helmet'

import About from '../partials/About'
import Layout from '../partials/Layout'
import Reseach from '../partials/Research'
import Ethnography from '../partials/Ethnography'
import Teaching from '../partials/Teaching'
const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Xue Ma</title>
        <meta name='description' content="Xue Ma's personal website" />
      </Helmet>
      <About />
      <Reseach />
      <Ethnography />
      <Teaching />
    </Layout>
  )
}

export default IndexPage
