import { configureStore } from '@reduxjs/toolkit';
import { StoreInterface } from '../interfaces';
import { UsersSlice } from './users';

//Configuración del store para poder obtener valores en cualquier parte de la aplicación
export const store = configureStore<StoreInterface>({
    reducer: {
        users: UsersSlice.reducer
    }
})