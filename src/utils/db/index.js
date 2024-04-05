import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase("Session.db")

export const init = () => {
    const promesa = new Promise((resolve,reject)=>{
        db.transaction(tx =>{
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS sessionUser (localId TEXT NOT NULL,email TEXT NOT NULL, idToken TEXT NOT NULL)',
                [],
                (_,result)=> resolve(result),
                (_,result)=> reject(result)
                )
        })
    })
    return promesa

}

export const insertSession = ({localId, email, idToken}) => {
    const promesa = new Promise((resolve,reject)=>{
        db.transaction(tx =>{
            tx.executeSql(
                'INSERT INTO sessionUser (localId, email, idToken) VALUES(?,?,?)',
                [localId, email, idToken],
                (_,result)=> resolve(result),
                (_,result)=> reject(result)
                )
        })
    })
    return promesa
}

export const fetchSession = () => {
    const promesa = new Promise((resolve,reject)=>{
        db.transaction(tx =>{
            tx.executeSql(
                'SELECT * FROM sessionUser',
                [],
                (_,result)=> resolve(result),
                (_,result)=> reject(result)
                )
        })
    })
    return promesa
}

export const deleteSession = () => {
    const promesa = new Promise((resolve,reject)=>{
        db.transaction(tx =>{
            tx.executeSql(
                'DELETE FROM sessionUser',
                [],
                (_,result)=> resolve(result),
                (_,result)=> reject(result)
                )
        })
    })
    return promesa
}