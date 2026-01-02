<template>
    <section class="products">
        <div class="product" v-for="p in products" :key="p.id">
            <h4>{{ p.name }}</h4>
            <p>R$ {{ p.price }}</p>
            <button>Ver detalhes</button>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            products: [
                { id: 1, name: 'Anel Ouro', price: 499 },
                { id: 2, name: 'Colar Diamante', price: 899 },
                { id: 3, name: 'Pulseira Lux', price: 299 }
            ]
        }
    }
}
</script>
