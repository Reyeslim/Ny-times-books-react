import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '../../views/Dashboard'
import Books from '../../views/Books/books'

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:listName" element={<Books />} />
      <Route path="/*" element={<Navigate replace to="/dashboard" />} />
    </Routes>
  )
}
