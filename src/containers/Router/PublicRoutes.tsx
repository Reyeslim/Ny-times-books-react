import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../../views/Auth/Login/login'
import Signup from '../../views/Auth/Signup/signup'

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/*" element={<Navigate replace to="/login" />} />
    </Routes>
  )
}
