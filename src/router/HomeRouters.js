export default [
    //Rota padrao
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
]
