import React from 'react'
import propTypes from 'prop-types'
import './Layout.less'

function Layout(props: any) {
  return (
    <div className="container">
      <div className="header">{props.header}</div>
      <div className="content">
        <div className="left">{props.left}</div>
        <div className="main">{props.children}</div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  header: propTypes.element.isRequired,
  left: propTypes.element.isRequired,
  children: propTypes.element.isRequired
}

export default Layout