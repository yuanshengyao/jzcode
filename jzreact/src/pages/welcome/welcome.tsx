import React from 'react'
import './welcome.less'

import Layout from '../../components/Layout/Layout'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'

function Welcome() {
  return (
    <Layout
      header={<Header />}
      left={<Menu />}
    >
      <div className="welcome-container">Welcome</div>
    </Layout>
  )
}

export default Welcome
