import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import SignUp from './auth/SignUp'
import Login from './auth/Login'
import Dashboard from './pages/Dashboard'
import PageNotFound from './pages/PageNotFound'
import ProtectedRoute from './routes/ProtectedRoute'
const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<SignUp/>}  />
    <Route path="/login" element={<Login/>}  />
    <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}  />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
  
  </BrowserRouter>
  )
}

export default App