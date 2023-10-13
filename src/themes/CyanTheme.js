import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const CyanTheme = createTheme ({
     palette:{
        primary:{
           main: '#00BCD4'
        },
        secondary:{
           main: '#543884'
        },
        error:{
           main: red.A400
        }
     }
})