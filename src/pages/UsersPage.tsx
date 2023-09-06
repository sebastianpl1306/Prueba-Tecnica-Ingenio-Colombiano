import { useEffect, useState } from 'react';
import { Box, Grid, Typography, Button, Divider } from '@mui/material';
import { PersonAdd } from '@mui/icons-material';

import { AppLayout } from '../layouts';
import { ModalCreateUser, SearchInput, TableUsers, UsersNumberInfo } from '../components';
import { useUsers } from '../store/users';

export const UsersPage = () => {
  const { getUsers } = useUsers();
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  //Cambia el estado de la modal a abierta
  const handleAddUser = () =>{
    setIsOpenModal(true);
  }

  return (
    <AppLayout>
      <Box className="animate__animated animate__fadeIn">
        <Grid container spacing={ 0 }>
          <Grid item xs={12}>
            <Typography variant='h3'>Usuarios</Typography>
            <UsersNumberInfo/>
          </Grid>
          <Grid item xs={12} sx={{marginTop: 2, textAlign: 'right'}}>
            <Button variant='contained' startIcon={<PersonAdd/>} onClick={handleAddUser}>Agregar Usuario</Button>
            <SearchInput/>
            <Divider sx={{marginY: 2}}/>
          </Grid>
          <Grid item xs={12} marginTop={2}>
            <TableUsers/>
          </Grid>
          <ModalCreateUser open={isOpenModal} handleCloseModal={() => setIsOpenModal(false)} />
        </Grid>
      </Box>
    </AppLayout>
  )
}