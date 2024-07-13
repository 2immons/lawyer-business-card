
import { defineStore } from 'pinia'
import axios from 'axios'
import { config } from './config'

export const ordersStore = defineStore('orders', {
    state: () => ({
        orders: [
            {
                id: 'TECH',
            }, {
                id: 'SEX',
            }
        ],
    }),

    actions: {
        fetchOrders() {
            return this.orders
        },

        async createOrder(order) {
            const response = await axios.post(config.backendURL + '/orders/create-order', {
                order,
                withCredentials: true
            });

            if (response.status !== 201) {
                throw new Error("Не удалось создать обращение. Неправильный статус ответа от сервера: " + response.status)
            }

            this.orders.push(order)
        },
    },

    getters: {

    },
})