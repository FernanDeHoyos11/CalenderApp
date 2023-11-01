import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
import { clearErrorMessage, login, logout } from "../store/auth/authSlice";


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

  return {
    //* propiedades 
    status, 
    user,
    errorMessage,

    //* Metodos
    startLogin,
    startRegister
  }
}
