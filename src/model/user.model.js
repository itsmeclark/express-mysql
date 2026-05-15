import db from "../config/db.js";

export const getAlluser = (callback) => {
    const sql = "SELECT * FROM users"

    db.query(sql, callback)
}
export const getOneUser = (id, callback) => {
    const sql = "SELECT * FROM users where id = ?"
    db.query(sql, [id], callback)
}
export const updateUser = (id,name, callback) => {
    const sql = "UPDATE users SET name = ? where id = ?"
    db.query(sql, [name, id], callback)
}
export const deleteUser = (id, callback) => {
    const sql = "DELETE FROM users where id = ?"
    db.query(sql, [id], callback)
}
export const createUser = (name, callback) => {
    const sql = "INSERT INTO users(name) VALUES (?)"
    db.query(sql, [name], callback)
}