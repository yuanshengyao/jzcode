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
      <Main />
    </Layout>
  )
}

function Main() {
  const List = []
  for(let i = 0; i < 100; i ++) {
    List.push(<li key={'li' + i}>{i}</li>)
  }
  return (
    <div className="Index-container">
      {List}
    </div>
  )
}

export default Index