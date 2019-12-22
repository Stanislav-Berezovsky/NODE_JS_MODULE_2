import { Router } from 'express';
import validate from '../services/userValidator';
import { getUsers, getUserById, deleteUserById, addUser, updateUser, getAutosuggestedUsers } from '../services/userService';

console.log(validate);
const router = Router();

router.get('/autoSuggest', (req, res) => {
    const { loginSubstring, limit } = req.query || {};

    res.json(getAutosuggestedUsers({
        loginSubstring,
        limit
    }));
});

router.get('/', (_req, res) => res.json(getUsers()));

router.get('/:id', (req, res) => {
    const user = getUserById(req.params.id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'user not found' });
    }
});

// validate should be used there
router.post('/', validate, (req, res) => {
    console.log('req.body', req.body);
    const { login, password, age } = JSON.parse(JSON.stringify(req.body)) || {};
    addUser({ login, password, age });
    res.json({ message: 'user was successfully added' });
});

// validate should be used there
router.put('/:id', validate, (req, res) => {
    const id = req.params.id;
    const { login, password, age } = req.body || {};
    const user = updateUser({ id, login, password, age });
    if (user) {
        res.json({ message: 'user was successfully updated' });
    } else {
        res.status(404).json({ message: 'user not found' });
    }
});

router.delete('/:id', (req, res) => {
    deleteUserById(req.params.id);
    res.json({ message: 'user was successfully deleted' });
});

export default router;
