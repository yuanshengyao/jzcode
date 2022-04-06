import React from 'react'
import './Index.less'

import Layout from '../../components/Layout/Layout'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'

function Index() {
  return (
    <Layout
      header={<Header />}
      left={<Menu />}
    >
      <div className="Index-container">Main</div>
    </Layout>
  )
}

export default Index