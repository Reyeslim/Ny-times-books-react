import { FC, useCallback, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'
import { getToken } from '../../services/storage/token'

const Router: FC = () => {
  const token = getToken()
  const [isAuthenticated, setIsAuthenticaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsAuthenticaded(!!token)
  }, [token])

  const recreateLogin = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return <div>Cargando...</div>
  }

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route path="/*" element={<PrivateRoutes />} />
        ) : (
          <Route path="/*" element={<PublicRoutes onLogin={recreateLogin} onSignup={recreateLogin} />} />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
