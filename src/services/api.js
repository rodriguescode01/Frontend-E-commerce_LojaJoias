import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.0.9:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
})

/* USUÁRIOS */

export const cadastrarUsuario = (dados) => {
    return api.post('/cadastro', dados)
}

export const loginUsuario = (dados) => {
    return api.post('/login', dados)
}

export default api
