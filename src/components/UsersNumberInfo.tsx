import { CircularProgress, Grid, Typography } from '@mui/material';
import { useUsers } from '../store/users';

const styleItem = {
  backgroundColor: '#D9D9D9',
  padding: 1,
  textAlign: 'center',
  borderRadius: 2
}

export const UsersNumberInfo = () => {
  const { count, loadUsers } = useUsers();

  return (
    <Grid container marginTop={2}>
      <Grid item xs={12} md={6} lg={2} sx={styleItem}>
        <Typography variant='h5'>Usuarios Registrados</Typography>
        <Typography variant='h3'>{ 
          loadUsers ? <CircularProgress color="inherit" /> : count 
        }</Typography>
      </Grid>
    </Grid>
  )
}