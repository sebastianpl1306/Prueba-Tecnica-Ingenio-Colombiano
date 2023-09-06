import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { render, screen } from '@testing-library/react';
import { TableUsers } from '../../src/components/TableUsers';
import { UsersSlice } from '../../src/store/users';
import { userInitialState } from '../fixtures/usersFixtures';

const store = configureStore({
    reducer: {
        users: UsersSlice.reducer,
    },
    preloadedState: {
        users: userInitialState
    }
});

React.Component;
describe('Pruebas en TableUsers', () => {
    test('Debe mostrar el componente cuando este cargando', () => {
        render(
            <Provider store={ store }>
                <TableUsers/>
            </Provider>
        )

        expect(screen.getByText('Cargando Usuarios...')).toBeTruthy();
    })
})