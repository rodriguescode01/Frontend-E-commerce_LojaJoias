<template>
  <div>
    <!-- Aqui o Vue Router renderiza a página atual -->
    <router-view />
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  components: {
    Home
  }
}
</script>
