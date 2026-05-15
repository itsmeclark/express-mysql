import {
    getAlluser, 
    getOneUser, 
    updateUser, 
    deleteUser,
    createUser
} from "../model/user.model.js";

export const getusers = (req, res) => {
    getAlluser((err, result)=>{
        if (err) console.log(err)
        res.json(result)
    })
}
export const displayOne = (req, res) => {
    getOneUser(req.params.id, (err, result)=>{
        if (err) console.log(err)
        res.json(result)
    })
}
export const update = (req, res) => {
    updateUser(req.body.id, req.body.name, (err, result)=>{
        if (err) console.log(err)
        res.json(result)
    })
}
export const deleteAcc = (req, res) => {
    deleteUser(req.params.id, (err, result)=>{
        if (err) console.log(err)
        res.json(result)
    })
}
export const createUsers = (req, res) => {
    createUser(req.body.name, (err, result)=>{
        if (err) console.log(err)
        res.json(result)
    })
}