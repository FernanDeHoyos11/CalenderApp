import { Navigate, Route, Routes } from "react-router-dom"
import { CalederPage } from "../calender/pages/CalederPage"
import { AuthRouter } from "../auth/Router/AuthRouter"
import { useEffect } from "react"
import { useAuthStore } from "../hooks/useAuthStore"
import { BackDrop } from "../calender/components/BackDrop"


export const AppRouter = () => {

  const {checkAuthToken, status} = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  },[])

  if(status === 'checking'){
    return <BackDrop/>
  }

  return (
   <Routes>
        {(status === 'no-authenticated')
         ? (
           <>
            <Route path="/auth/*" element={<AuthRouter/>} />
            <Route path="/*" element={<Navigate to='/auth/login'/>} />
           </>)
         : 
          <>
          <Route path="/" element={<CalederPage/>} />
          <Route path="/*" element={<Navigate to='/'/>} />
         </>
         }

        
        
   </Routes>
  )
}
