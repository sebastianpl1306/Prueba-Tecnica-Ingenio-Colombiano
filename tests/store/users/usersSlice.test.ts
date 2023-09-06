import { UsersSlice, addUser, loadUsers, removeUser, setUsers, setUsersFilter } from '../../../src/store/users/usersSlice';
import { newUser, userInitialState, userLoadState, usersDemo } from '../../fixtures/usersFixtures';

describe('Pruebas en usersSlice', () => {
    test('Debe cargar el estado inicial', () => {
        const store = UsersSlice.reducer(userInitialState, {
            type: undefined
        });
        expect(store).toBe(userInitialState);
    })

    test('Debe añadir los usuarios correctamente al ejecutar setUsers', () => {
        const store = UsersSlice.reducer(userInitialState, setUsers(usersDemo));
        expect(store.users).toBe(usersDemo);
        expect(store.count).toBe(usersDemo.length);
        expect(store.loadUsers).toBeFalsy();
    })

    test('Debe añadir el filtro correctamente al ejecutar setUsersFilter', () => {
        const store = UsersSlice.reducer(userInitialState, setUsersFilter(usersDemo));
        expect(store.users).toStrictEqual([]);
        expect(store.count).toBe(0);
        expect(store.loadUsers).toBeTruthy();
        expect(store.usersFilter).toBe(usersDemo);
    })

    test('Debe añadir un usuario al ejecutar addUser', () =>{
        const store = UsersSlice.reducer(userLoadState, addUser(newUser));
        expect(store.users).toContain(newUser);
    })

    test('Debe remover un usuario al ejecutar removeUser', () =>{
        const store = UsersSlice.reducer(userLoadState, removeUser({ userId: userLoadState.users[0].id }));
        expect(store.users).not.toContain(userLoadState.users[0]);
    })

    test('Debe mostrar el loadUsers en true al ejecutar loadUsers', () =>{
        const store = UsersSlice.reducer(userInitialState, loadUsers());
        expect(store.loadUsers).toBeTruthy();
    })
})