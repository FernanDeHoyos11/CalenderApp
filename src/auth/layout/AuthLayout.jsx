import { CardMedia, Grid, Typography } from "@mui/material"

export const AuthLayout = ({ children, title = '' }) => {

    return (
        <Grid
            
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}>


            <Grid item
             className="animate__animated animate__flipInY"
                boxShadow={'0px 5px 5px rgba(0, 0, 0, 0.2)'}
                xs={12}
                sx={{ background: 'white', padding: 3, borderRadius: 2, textAlign: 'center', alignItems: "center" }} >
                <CardMedia
                    component="img"
                    image="/userIcon.png"
                    alt="Live from space album cover"
                    sx={{
                        width: 100, 
                        height: 100,
                        margin: '0 auto', 
                        display: 'block', 
                    }}
                />
                <Typography variant="h6" sx={{ mb: 1 }}>
                    {title}
                </Typography>

                {children}
            </Grid>
        </Grid>
    )
}