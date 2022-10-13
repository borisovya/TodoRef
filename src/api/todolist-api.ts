import axios from 'axios'


type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

// type CreateTodolistResponseType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: {
//         item: TodolistType
//     }
// }
//
// type UpdateTodolistResponseType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: {}
// }
//
// type DeleteTodolistResponseType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: {}
// }

export type ResponseType<D={}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'c867f151-d778-4732-b771-491c0bdd4a4a',
    },
})

export const todolistAPI = {
    getTodolist() {
        return instance.get<ResponseType>(`todo-lists/`)
    },

    addTodolist(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>(`todo-lists`, {title})
    },

    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },


    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todolistId}`, {title: title})
    },
}