import { Box, Button, Modal, Typography } from '@mui/material';
import { useUsers } from '../store/users';
import { Cancel, Delete } from '@mui/icons-material';

//Estilos del modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs: '95%', md: 500},
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

type ModalConfirmDeleteUserProps = {
  userId?: number;
  open: boolean;
  handleCloseModal: () => void
}

export const ModalConfirmDeleteUser = ({ open, handleCloseModal, userId }: ModalConfirmDeleteUserProps) => {
  const { deleteUser } = useUsers();

  //LLama la función de eliminación y cierra la modal
  const handleDeleteUser = () =>{
    if(!userId) throw new Error("El userId es obligatorio");
    deleteUser(userId);
    handleCloseModal();
  }

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant='h5' textAlign='center'>¿Esta seguro que desea eliminar el usuario?</Typography>
        <Box textAlign='center' marginTop={2}>
          <Button
            sx={{marginRight: 1}}
            variant='contained'
            color='primary'
            onClick={() => handleCloseModal()}><Cancel/> Cancelar</Button>
          <Button
            variant='contained'
            color='error'
            onClick={() => handleDeleteUser()}><Delete/> Eliminar</Button>
        </Box>
      </Box>
    </Modal>
  )
}