import { useState, useEffect } from 'react';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Box, Typography, LinearProgress } from '@mui/material';
import { Delete } from '@mui/icons-material';

import { ModalConfirmDeleteUser } from '.';
import { useUsers } from '../store/users';
import { User } from '../interfaces';

export const TableUsers = () => {
  const { usersFilter, users, loadUsers } = useUsers();
  const [usersLoad, setUsersLoad] = useState<User[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [userIdSelected, setUserIdSelected] = useState<number | undefined>();

  //Revisa si usersFilter cambia y selecciona los usuarios a mostrar
  useEffect(() => {
    if(usersFilter.length > 0){
      setUsersLoad(usersFilter);
    }else{
      setUsersLoad(users);
    }
  }, [usersFilter, users]);

  //Revisa si users cambio para mostrar los nuevos cambios
  useEffect(() => {
    setUsersLoad(users);
  }, [users])

  //Selecciona el usuario y abre la modal de confirmación
  const handleDeleteUser = (userId: number) =>{
    setUserIdSelected(userId);
    setIsOpenModal(true);
  }

  if(loadUsers){
    return(
      <Box textAlign='center'>
        <LinearProgress/>
        <Typography marginY={2}>Cargando Usuarios...</Typography>
      </Box>
    )
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Correo</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            usersLoad.map(({ firstName, lastName, email, id}) => (
              <TableRow key={id}>
                <TableCell>{ firstName }</TableCell>
                <TableCell>{ lastName }</TableCell>
                <TableCell>{ email }</TableCell>
                <TableCell>
                  <Button variant="outlined" startIcon={<Delete/>} color="error" onClick={() => handleDeleteUser(id)}>
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      <ModalConfirmDeleteUser userId={userIdSelected} open={isOpenModal} handleCloseModal={() => setIsOpenModal(false)}/>
    </TableContainer>
  )
}