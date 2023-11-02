import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
import { clearErrorMessage, login, logout } from "../store/auth/authSlice";
import { onLogoutCalendar } from "../store/calendar/calendarSlice";


export const useAuthStore = () => {

    const {status, user, errorMessage} = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const startLogin = async({email, password}) => {

        try {

            const {data} = await calendarApi.post('/auth/login', {email, password})
            console.log(data)
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(login({name: data.name, uid: data.uid}))


            
        } catch (error) {
            dispatch(logout('Error de autenticacion'))
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10)
        }
    }

    const startRegister = async({name, email, password}) => {

        try {

            const {data} = await calendarApi.post('/auth/new', {name, email, password})
            console.log(data)
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(login({name: data.name, uid: data.uid}))


            
        } catch (error) {
            const {response} = error
            const {data} = response
            dispatch(logout(data?.msg || ''))
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10)
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token')
        if(!token) return dispatch(logout())
        try {
            const {data} = await calendarApi.get('/auth/renew')
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(login({name: data.name, uid: data.uid}))
        } catch (error) {
            localStorage.clear()
            dispatch(logout())
        }
    }

    const startLogout = () => {
        localStorage.clear()
        dispatch(onLogoutCalendar())
        dispatch(logout())
    }

  return {
    //* propiedades 
    status, 
    user,
    errorMessage,

    //* Metodos
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout
  }
}
