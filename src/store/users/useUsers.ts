import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { StoreInterface, UsersState } from '../../interfaces/StoreInterfaces';
import { addUser, loadUsers, removeUser, setUsers, setUsersFilter } from '.';
import { User } from '../../interfaces';

interface useUsers extends UsersState{
  getUsers: () => void,
  deleteUser: ( userId: number ) => void,
  newUser: ( user: User ) => void,
  addFilterUsers: ( usersFilter: User[] ) => void
}

//Hook personalizado para poder utilizar el store y realizar peticiones al api
export const useUsers = () => {
  const usersState = useSelector((state: StoreInterface) => state.users);
  const dispatch = useDispatch();

  //Realiza una petición al api para obtener los usuarios y agrega los usuarios al store
  const getUsers = async() =>{
    try {
      dispatch(loadUsers());

      const url = 'https://api.fake-rest.refine.dev/users';
      const { data } = await axios.get<User[]>(url);

      if(!data) throw new Error("No se pudo obtener los usuarios");

      //Filtrar los usuarios que tengan status true
      const usersFilter = data.filter( (user: User) => user.status == true);
      dispatch(setUsers(usersFilter));
    } catch (error) {
      throw new Error("No se pudo obtener los usuarios");
    }
  }

  //Realiza el llamado del store para realizar la eliminación
  const deleteUser = (userId: number) =>{
    try {
      if (!userId) throw new Error("No se pudo remover el usuario, el userId es obligatorio");
      dispatch(removeUser({ userId }));
    } catch (error) {
      throw new Error("No se pudo obtener los usuarios");
    }
  }

  //Realiza el llamado del store para agregar al usuario
  const newUser = (user: User) =>{
    try {
      if (!user) throw new Error("El usuario es obligatorio");
      dispatch(addUser(user));
    } catch (error) {
      throw new Error("No se pudo agregar el usuario");
    }
  }

  //Agregar usuarios a filtrar
  const addFilterUsers = (usersFilter: User[]) =>{
    try {
      if (!usersFilter.length) return;
      dispatch(setUsersFilter(usersFilter));
    } catch (error) {
      throw new Error("No se pudo filtrar los usuarios");
    }
  }

  return {
    ...usersState,
    getUsers,
    deleteUser,
    newUser,
    addFilterUsers
  }
}