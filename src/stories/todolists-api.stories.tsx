import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'

}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'c867f151-d778-4732-b771-491c0bdd4a4a'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolist()
            .then((response)=> {setState(response.data)})

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.addTodolist('!!!!!NEWTODOLIST!!!!!')
            .then((response)=> {setState(response.data)})
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'eb1c820e-7725-4f2e-b8fb-b6c7422021c7'
        todolistAPI.deleteTodolist(todolistId)
            .then((response)=> {setState(response.data)})
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'a53541e6-081b-4908-b536-f54c50c9b29c'
        todolistAPI.updateTodolist(todolistId, 'SOME NEW TITLE')
            .then((response) => {
            setState(response.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}