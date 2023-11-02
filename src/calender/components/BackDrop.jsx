
import { CircularProgress, Grid } from "@mui/material";

export const BackDrop = () => {
  return (
    <Grid
      container
      justifyContent="center" // En lugar de "flexDirection" y "justifyContent" por separado
      alignItems="center" // Para centrar verticalmente también
      sx={{ backgroundColor: "#347CF7", height: '100vh' }} // Usar '100vh' para altura total de la pantalla
    >
      <CircularProgress color="inherit" />
    </Grid>
  );
}
