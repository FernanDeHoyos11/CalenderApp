import { Button, CardMedia, Grid, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Google } from "@mui/icons-material"
import { Link } from "react-router-dom"


export const Register = () => {
    return (
       
            <AuthLayout title="Login">
                 <form>
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
                        label="Nombre"
                        variant="outlined" />
                    </Grid>

                    <Grid item >
                        <TextField 
                        id="outlined-basic"
                        label="Email"
                        variant="outlined" />
                    </Grid>

                    <Grid item >
                        <TextField 
                        id="outlined-basic"
                        label="Password"
                        variant="outlined" />
                    </Grid>

                    <Grid item xs={12}  width={{ sm:'50%'}}>
                            <Button type="submit" variant="contained" fullWidth >
                                Register
                            </Button>
                        </Grid>

                        <Grid container direction='row' justifyContent='center'>
                        <Link color="inherit" to='/auth/register'>
                            Ya tengo cuenta
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



