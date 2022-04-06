import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Index from './pages/Index/Index'
import Welcome from './pages/Welcome/Welcome'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/index" element={<Index />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
      </Routes>
    </Router>
  )
}

export default App
