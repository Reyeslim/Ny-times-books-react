import { useCallback } from "react"
import { logout } from "../../services/firebase/auth"
import { useNavigate } from "react-router-dom"

const useLogic = () => {
    const navigate = useNavigate()
    const handleLogout = useCallback(async () => {
        await logout()
        navigate('/login')
    }, [navigate])

    return {
        handleLogout,
    }
}

export default useLogic