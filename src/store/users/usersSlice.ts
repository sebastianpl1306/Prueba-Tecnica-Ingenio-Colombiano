import { createSlice } from '@reduxjs/toolkit';
import { User, UsersState } from '../../interfaces';

//Valores que serán almacenados en el store para poder ser usados en la aplicación
const initialState: UsersState = {
    users: [],
    usersFilter: [],
    count: 0,
    loadUsers: true,
}

//Definiciones de valores que recibe cada reducer
interface SetUsersAction { payload: User[] }
interface AddUserAction { payload: User }
interface RemoveUserAction { payload: { userId: number } }

//Slice que contiene el estado actual de los valores y las acciones para modificar el estado
export const UsersSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {
        //setUsers: Actualiza todos los usuarios en el estado
        setUsers: (state, { payload }: SetUsersAction ) => {
            state.users = payload;
            state.count = payload.length;
            state.loadUsers = false;
        },
        setUsersFilter: (state, { payload }: SetUsersAction ) => {
            state.usersFilter = payload;
        },
        //addUser: Crea un nuevo usuario en los usuarios
        addUser: (state, { payload }: AddUserAction) =>{
            state.users = [
                payload,
                ...state.users
            ];
            state.count = state.count + 1;
        },
        //removeUser: Remueve un usuario teniendo en cuenta el id
        removeUser: (state, { payload }: RemoveUserAction) =>{
            state.users = state.users.filter((user: User) => user.id != payload.userId);
            state.count = state.count - 1;
        },
        //loadUsers: Cambia el estado de carga a cargando
        loadUsers: (state) =>{
            state.loadUsers = true;
        }
    }
});

export const { setUsers, addUser, removeUser, loadUsers, setUsersFilter } = UsersSlice.actions;