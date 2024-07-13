
import { defineStore } from 'pinia'
import axios from 'axios'

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
            const response = await axios.post('/api/create-order', {
                order
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