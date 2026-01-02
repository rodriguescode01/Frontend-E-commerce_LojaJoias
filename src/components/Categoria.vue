<template>
    <section class="categories">
        <div class="card" v-for="cat in categories" :key="cat">
            <h3>{{ cat }}</h3>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            categories: ['Anéis', 'Colares', 'Pulseiras']
        }
    }
}
</script>
