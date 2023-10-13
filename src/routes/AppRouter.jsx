import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../auth/pages/Login"
import { CalederPage } from "../calender/pages/CalederPage"
import { AuthRouter } from "../auth/Router/AuthRouter"


export const AppRouter = () => {
    const status = 'no-authenticated'

  return (
   <Routes>
        {(status === 'no-authenticated')
         ?  <Route path="/auth/*" element={<AuthRouter/>} />
         :  <Route path="/*" element={<CalederPage/>} />}

        <Route path="/*" element={<Navigate to='/auth/login'/>} />
        
   </Routes>
  )
}
