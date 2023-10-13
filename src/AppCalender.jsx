import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./routes/AppRouter"
import { AppTheme } from "./themes/AppTheme"


export const AppCalender = () => {
  return (
    <BrowserRouter>
        <AppTheme>
           <AppRouter/>
        </AppTheme>
    </BrowserRouter>
  )
}
