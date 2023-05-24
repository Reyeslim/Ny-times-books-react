import { useCallback } from 'react'
import { logout } from '../../services/firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Props } from './types'

const useLogic = (onLogout: Props['onLogout']) => {
  const navigate = useNavigate()
  const handleLogout = useCallback(async () => {
    await logout()
    window.localStorage.removeItem('userToken')
    onLogout()
    navigate('/login')
  }, [navigate, onLogout])

  return {
    handleLogout,
  }
}

export default useLogic
