import uuid from 'uuid';

const users = [
    {
        id: uuid.v4(),
        login: 'test_login_1',
        password: 'test_password_1',
        age: 21,
        isDeleted: false
    },
    {
        id: uuid.v4(),
        login: 'test_login_2',
        password: 'test_password_2',
        age: 22,
        isDeleted: false
    },
    {
        id: uuid.v4(),
        login: 'test_login_3',
        password: 'test_password_3',
        age: 23,
        isDeleted: false
    },
    {
        id: uuid.v4(),
        login: 'test_login_4',
        password: 'test_password_4',
        age: 24,
        isDeleted: false
    },
    {
        id: uuid.v4(),
        login: 'test_login_5',
        password: 'test_password_5',
        age: 25,
        isDeleted: false
    }
];

export const getUsers = () => users;

export const getUserById = userId => getUsers().find(({ id }) => id === userId);

export const deleteUserById = userId => {
    const user = getUserById(userId);

    if (user) {
        user.isDeleted = true;
    }
};
