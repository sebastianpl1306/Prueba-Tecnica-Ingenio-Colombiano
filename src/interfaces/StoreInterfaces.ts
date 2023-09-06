import { User } from '.';

export interface StoreInterface {
    users: UsersState
}

export interface UsersState {
    users: User[];
    usersFilter: User[];
    count: number;
    loadUsers: boolean;
}