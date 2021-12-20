import express from 'express';

import { deleteUser, getUser, searchUsers, addUser, updateUser, addFlightUser,deleteFlightUser, getFlightsUser } from '../controllers/user.js';


const router = express.Router();

router.get('/', getUser);
router.post('/add', addUser );
router.post('/update', updateUser);
router.post('/delete', deleteUser);
router.post('/search', searchUsers);
router.post('/addFlight', addFlightUser);
router.post('/deleteFlight', deleteFlightUser);
router.get('/getFlights', getFlightsUser);


export default router;