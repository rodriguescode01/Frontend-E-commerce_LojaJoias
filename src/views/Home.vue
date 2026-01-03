<template>
    <div class="page-enter">
        <Navbar />
        <Banner />
        <Categoria />
        <!--<ProdutosCarrosel />
        <Beneficios />
        <Footer />-->
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Banner from '../components/Banner.vue'
import Categoria from '../components/Categoria.vue'
import ProdutosCarrosel from '../components/ProdutosCarrosel.vue'
import Beneficios from '../components/Beneficios.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Navbar,
        Banner,
        Categoria,
        ProdutosCarrosel,
        Beneficios,
        Footer
    }
}
</script>
