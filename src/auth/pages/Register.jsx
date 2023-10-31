import { Button, CardMedia, Grid, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Google } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm"

const formRegister = {
    name: '',
    email: '',
    password: ''
}
export const Register = () => {

    const {name, email, password, onInputChange} = useForm(formRegister);

    const registerSubmit = (event) => {
        event.preventDefault()
        console.log({name, email, password})

    }
    return (
       
            <AuthLayout  title="Register">
                 <form onSubmit={registerSubmit}>
            <Grid container
            className=""
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
                <Grid container spacing={1}
                    flexDirection={'column'}
                    alignItems={'center'}
                   >
                    <Grid item >
                        <TextField 
                        id="outlined-basic"
                        label="Nombre"
                        variant="outlined"
                        name="name"
                        value={name}
                        onChange={onInputChange}/>
                    </Grid>

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
                                Register
                            </Button>
                        </Grid>

                        <Grid container direction='row' justifyContent='center'>
                        <Link color="inherit" to='/auth/login'>
                            Ya tengo cuenta
                        </Link>
                       </Grid>
                </Grid>

               
            </Grid>
            </form>
        </AuthLayout>
       
    )
}



