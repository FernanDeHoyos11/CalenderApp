import { Button, CardMedia, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Google } from "@mui/icons-material"
import { Link as RouterLink }  from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useAuthStore } from "../../hooks/useAuthStore"
import { useEffect } from "react"
import Swal from "sweetalert2"

const formLogin = {
    email: '',
    password: ''
}

export const Login = () => {
    const {startLogin, errorMessage} = useAuthStore()
    const {email, password, onInputChange} = useForm(formLogin);

    const loginSubmit = (event) => {
        event.preventDefault()
        console.log({email, password})
        startLogin({email: email, password: password})
    }

    useEffect(() => {
        if(errorMessage !== null){
            Swal.fire('Error en la autenticacion', errorMessage, 'error')
        }
    }, [errorMessage])

    return (
       
            <AuthLayout  title="Login">
             <form onSubmit={loginSubmit}>
            <Grid container
                flexDirection='row'
                flexWrap='nowrap'
                alignItems='center'
                sx={{width: {xs: '90%', sm: 800,              
                "@media (min-width: 590px) and (max-width: 899px)": {
                    width: '350px', 
                  },
                  "@media (min-width: 900px) and (max-width: 1150px)": {
                    width: '650px', 
                  }},  maxWidth: '100%',}}>

                <Grid container spacing={1}
                    flexDirection={'column'}
                    alignItems={'center'}
                   >
                    <Grid item >
                        <TextField 
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={email}
                        onChange={onInputChange} />
                    </Grid>

                    <Grid item >
                        <TextField 
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        name="password"
                        value={password}
                        onChange={onInputChange} />
                    </Grid>

                    <Grid item xs={12}  width={{ sm:'50%'}}>
                            <Button type="submit" variant="contained" fullWidth >
                                Login
                            </Button>
                        </Grid>

                        <Grid item  xs={12} width={{ sm:'50%'}}>
                            <Button  variant="contained" fullWidth>
                                <Google></Google>
                                <Typography sx={{ml: 1}} > Google </Typography>
                            </Button>
                        </Grid>

                        <Grid container direction='row' justifyContent='center'>
                        <Link component={RouterLink} color="inherit" to='/auth/register'>
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>

                <Grid container
                    flexDirection={'column'}
                    justifyContent={"center"}
                    alignItems={'center'}
                    sx={{display: {sm: 'block', xs: 'none', "@media (min-width: 590px) and (max-width: 899px)": {
                        display: 'none', 
                      },}}}
                    >

                    <CardMedia
                        component="img"
                        sx={{ width: '100%', borderRadius: 3 }}
                        image="/vista_login.jpg"
                        alt="Live from space album cover"
                    />

                </Grid>
            </Grid>
            </form>
        </AuthLayout>
       
    )
}



