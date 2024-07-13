
import { defineStore } from 'pinia'
import axios from 'axios'
import { config } from './config'
import Cookies from 'js-cookie'

export const usersStore = defineStore('users', {
    state: () => ({

    }),

    actions: {
        async createUser(login, password) {
            const response = await axios.post(config.backendURL + '/auth/signup', {
                login: login,
                password: password,
                withCredentials: true
            });

            if (response.status !== 201) {
                throw new Error("Не удалось создать пользователя. Неправильный статус ответа от сервера: " + response.status)
            }

            Cookies.set("access_token", response.data.access_token)
            Cookies.set('token_expiration', response.data.expires_in)
            console.log(Cookies.get('access_token'))
        },

        async loginUser(login, password) {
            const response = await axios.post(config.backendURL + '/auth/login', {
                login: login,
                password: password,
                withCredentials: true
            });

            if (response.status !== 200) {
                throw new Error("Не удалось авторизоваться пользователя. Неправильный статус ответа от сервера: " + response.status)
            }

            Cookies.set("access_token", response.data.access_token)
            Cookies.set('token_expiration', response.data.expires_in)
            console.log(Cookies.get('access_token'))
        },
    },

    getters: {

    },
})