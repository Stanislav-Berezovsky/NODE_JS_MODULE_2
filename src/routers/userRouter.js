import { Router } from 'express';
import { getUsers, getUserById, deleteUserById } from '../services/userService';

const router = Router();

router.get('/', (_req, res) => res.json(getUsers()));

router.get('/:id', (_req, res) => {
    const user = getUserById(_req.params.id);

    if (user) {
        res.json(user);
    } else {
        res.send(404, 'not found');
    }
});


router.delete('/:id', (_req, res) => {
    deleteUserById(_req.params.id);
    res.json({ message: 'user was successfully deleted' });
});

export default router;
