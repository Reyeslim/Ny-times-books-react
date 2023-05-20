import { useCallback } from 'react'
import { signup } from '../../../services/firebase/auth'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../../../services/storage/token'

const useLogic = () => {
  const navigate = useNavigate()
  const handleOnSubmit = useCallback(
    async (values: { email: string; password: string }) => {
      try {
        const user = await signup(values.email, values.password)
        console.log(user)
        // @ts-ignore
        if (user) {
        // @ts-ignore
          setToken(user.accessToken)
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
