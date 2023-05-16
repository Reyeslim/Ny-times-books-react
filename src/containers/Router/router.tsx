import { FC } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '../../views/Dashboard'
import Books from '../../views/Books/books'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/dashboard/:listName" element={<Books />}/>
        <Route path="/*" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  )
}


export default Router