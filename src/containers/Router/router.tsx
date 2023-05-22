import { FC } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const isToken: boolean = false

const Router: FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        {
          isToken ? <Route path="/*" element={<PrivateRoutes />} /> : <Route path='/*' element={<PublicRoutes />}/>
        }
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
