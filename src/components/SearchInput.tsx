import { useState, ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import { useUsers } from '../store/users';
import { User } from '../interfaces';

export const SearchInput = () => {
  const [value, setValue] = useState('');
  const { users, addFilterUsers } = useUsers();

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) =>{
    setValue(target.value);
    setFilter(target.value);
  }

  const setFilter = (value: string) => {
    const usersFilter = users.filter((user: User) => user.email.toLowerCase().includes(value) || user.lastName.toLowerCase().includes(value) || user.firstName.toLowerCase().includes(value));
    addFilterUsers(usersFilter);
  }

  return (
    <TextField fullWidth 
        sx={{margin: '10px 0px'}} 
        label="Nombre"
        name="firstName"
        value={value}
        onChange={onInputChange}
        />
  )
}