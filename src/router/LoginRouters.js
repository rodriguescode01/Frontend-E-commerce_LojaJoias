export default [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/LoginPage/Login.vue'),
    },
    {
        path: '/cadastro',
        name: 'Cadastro',
        component: () => import('../views/LoginPage/Cadastro.vue'),
    },
    {
        path: '/redefinir',
        name: 'Redefinir',
        component: () => import('../views/LoginPage/Redefinir.vue'),
    },
]
