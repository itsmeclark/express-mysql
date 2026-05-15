import express from "express";
import { 
    getusers, 
    displayOne, 
    update, 
    deleteAcc,
    createUsers
} from "../controllers/user.controller.js";

const routes = express.Router();


routes.get('/', getusers)
routes.get('/:id', displayOne)
routes.put('/', update)
routes.post('/', createUsers)
routes.delete('/:id', deleteAcc)

export default routes;