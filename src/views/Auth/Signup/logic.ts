import { useCallback } from 'react'
import { signup } from '../../../services/firebase/auth'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../../../services/storage/token'
import { Props } from './types'

const useLogic = (onSignup: Props['onSignup']) => {
  const navigate = useNavigate()
  const handleOnSubmit = useCallback(
    async (values: { email: string; password: string }) => {
      try {
        const user = await signup(values.email, values.password)
        console.log(user)
        
        if (user) {
          const token = await user.getIdToken()
          setToken(token)
          onSignup()
          navigate('/dashboard')
        }
      } catch (e) {
        console.log(e)
      }
    },
    [navigate]
  )

  return {
    handleOnSubmit,
  }
}

export default useLogic
