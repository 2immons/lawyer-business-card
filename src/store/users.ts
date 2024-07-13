
import { defineStore } from 'pinia'
import axios from 'axios'

export const usersStore = defineStore('users', {
    state: () => ({

    }),

    actions: {
        async createUser(login, password) {
            const response = await axios.post('http://localhost:3333/auth/signup', {
                login: login,
                password: password,
            });

            if (response.status !== 201) {
                throw new Error("Не удалось создать пользователя. Неправильный статус ответа от сервера: " + response.status)
            }

            // TODO: получение токена и сохранение в сессии
        },

        async loginUser(login, password) {
            const response = await axios.post('/api/auth/login', {
                login: login,
                password: password
            });

            if (response.status !== 200) {
                throw new Error("Не удалось авторизоваться пользователя. Неправильный статус ответа от сервера: " + response.status)
            }

            // TODO: получение токена
        },
    },

    getters: {

    },
})