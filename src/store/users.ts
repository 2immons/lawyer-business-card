
import { defineStore } from 'pinia'
import axios from 'axios'
import { config } from './config'
import Cookies from 'js-cookie'

export const usersStore = defineStore('users', {
    state: () => ({
        displayName: Cookies.get('display_name'),
    }),

    actions: {
        setCookies(responseData) {
            Cookies.set("access_token", responseData.access_token)
            Cookies.set('token_expiration', responseData.expires_in)
            Cookies.set('display_name', responseData.display_name)
            this.displayName = responseData.display_name;
        },
        clearCookies() {
            Cookies.remove("access_token")
            Cookies.remove('token_expiration')
            Cookies.remove('display_name')
            this.displayName = '';
        },

        async logout() {
            this.clearCookies()
        },

        async createUser(regData) {
            const response = await axios.post(config.backendURL + '/auth/signup', {
                login: regData.login,
                password: regData.password,
                name: regData.name
            })

            if (response.status !== 201) {
                throw new Error("Не удалось создать пользователя. Неправильный статус ответа от сервера: " + response.status)
            }

            this.setCookies(response.data)
        },

        async loginUser(loginData) {
            const response = await axios.get(config.backendURL + '/auth/login', {
                params: {
                    login: loginData.login,
                    password: loginData.password
                }
            });


            if (response.status !== 200) {
                throw new Error("Не удалось авторизоваться пользователя. Неправильный статус ответа от сервера: " + response.status)
            }

            this.setCookies(response.data)
        },
    },

    getters: {

    },
})