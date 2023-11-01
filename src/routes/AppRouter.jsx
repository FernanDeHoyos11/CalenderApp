import { Navigate, Route, Routes } from "react-router-dom"
import { CalederPage } from "../calender/pages/CalederPage"
import { AuthRouter } from "../auth/Router/AuthRouter"
import { getEnvVariables } from "../helpers/getEnvVariables"
import { useSelector } from "react-redux"


export const AppRouter = () => {

  const {status} = useSelector(state => state.auth)

  console.log(getEnvVariables())


  return (
   <Routes>
        {(status === 'no-authenticated')
         ?  <Route path="/auth/*" element={<AuthRouter/>} />
         :  <Route path="/*" element={<CalederPage/>} />}

        <Route path="/*" element={<Navigate to='/auth/login'/>} />
        
   </Routes>
  )
}
