import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../auth/pages/Login"
import { CalederPage } from "../calender/pages/CalederPage"
import { AuthRouter } from "../auth/Router/AuthRouter"
import { getEnvVariables } from "../helpers/getEnvVariables"


export const AppRouter = () => {

  console.log(getEnvVariables())

    const status = 'authenticated'

  return (
   <Routes>
        {(status === 'authenticated')
         ?  <Route path="/auth/*" element={<AuthRouter/>} />
         :  <Route path="/*" element={<CalederPage/>} />}

        <Route path="/*" element={<Navigate to='/auth/login'/>} />
        
   </Routes>
  )
}
