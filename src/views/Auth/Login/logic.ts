import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../services/firebase/auth'
import { setToken } from '../../../services/storage/token'

const useLogic = () => {
  const navigate = useNavigate()
  const handleOnSubmit = useCallback(
    async (values: { email: string; password: string }) => {
      try {
        const user = await login(values.email, values.password)
        console.log(user)
        //@ts-ignore
        if (user) {
          // @ts-ignore
          setToken(user.accessToken)
          navigate('/dashboard')
        } 
      } catch (error) {
        console.log(error)
      }
    },
    [navigate]
  )

  return {
    handleOnSubmit,
  }
}

export default useLogic
