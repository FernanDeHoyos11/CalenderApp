import { BrowserRouter, HashRouter } from "react-router-dom"
import { AppRouter } from "./routes/AppRouter"
import { AppTheme } from "./themes/AppTheme"
import { Provider } from "react-redux"
import { store } from "./store/store"


export const AppCalender = () => {
  return (
    <Provider store={store}>
{/*       <BrowserRouter> */}
<HashRouter>
        <AppTheme>
           <AppRouter/>
        </AppTheme>
        </HashRouter>
   {/*  </BrowserRouter> */}
    </Provider>
  )
}
