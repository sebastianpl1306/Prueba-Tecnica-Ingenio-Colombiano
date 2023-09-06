import { FormEvent, useState } from 'react';
import { Box, Button, Divider, Modal, TextField, Typography } from "@mui/material";
import { useForm } from "../hooks";
import { useUsers } from '../store/users';

//Estilos del modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs: '95%', md: 1000},
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

type ModalCreateUserProps = {
  open: boolean;
  handleCloseModal: () => void;
}

export const ModalCreateUser = ({ open, handleCloseModal }: ModalCreateUserProps) => {
  const { firstName, email, lastName, onInputChange, onResetForm } = useForm({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [isValid, setIsValid] = useState(true);
  const [errorForm, setErrorForm] = useState('');
  const { newUser } = useUsers();

  //Evalúa el formulario y llama la función para agregar el usuario
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    if(validateForm()){
      newUser({
        id: new Date().getTime(),
        firstName,
        email,
        lastName,
        status: true
      });
      onResetForm();
      handleCloseModal();
    }
    setIsValid(validateForm());
  }

  //Permite realizar las validaciones de los campos del formulario
  const validateForm = (): boolean =>{
    let formValid = true;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(firstName.trim().length <= 5){
      setErrorForm('El nombre es obligatorio');
      formValid = false;
    }
    if(lastName.trim().length <= 5){
      setErrorForm('El apellido es obligatorio');
      formValid = false;
    }
    if(!re.test(email)){
      setErrorForm('El email es obligatorio');
      formValid = false;
    }
    return formValid;
  }

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">Agregar Usuario</Typography>
        <Divider sx={{margin: '10px 0px'}}/>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth 
            sx={{margin: '10px 0px'}} 
            label="Nombre"
            name="firstName"
            value={firstName}
            onChange={onInputChange}
          />
          <TextField fullWidth 
            sx={{margin: '10px 0px'}} 
            label="Apellidos"
            name="lastName"
            value={lastName}
            onChange={onInputChange}
          />
          <TextField fullWidth 
            sx={{margin: '10px 0px'}} 
            label="Email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
          <Typography variant='body2' color='error' sx={{display: isValid ? 'none' : ''}}>Error: { errorForm }</Typography>
          <Box textAlign='center'>
            <Button type="submit" variant="contained" size="large">Guardar</Button>
          </Box>
        </form>
      </Box>
    </Modal>
  )
}