import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.less'

import Index from './pages/Index/Index'
import Welcome from './pages/Welcome/Welcome'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/index" element={<Index />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  )
}

export default App
