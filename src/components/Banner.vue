<!-- Seleção onde ficara o Banner-->
<template>
    <section class="banner">
        <div class="banner-overlay"></div>

        <div class="banner-content">
            <h1 class="banner-title">
                Joias que eternizam momentos
            </h1>

            <p class="banner-subtitle">
                Elegância, brilho e significado em cada detalhe.
            </p>

            <a href="#produtos" class="banner-btn">
                Ver Coleção
            </a>
        </div>
    </section>
</template>


<script>
export default {
    name: "Banner",
};
</script>

<style scoped>
.banner {
    position: relative;
    height: 80vh;
    background-image: url("@/assets/images/banner.png");
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    padding: 0 80px;
}

/* Overlay para leitura do texto */
.banner-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.55),
        rgba(0, 0, 0, 0.15)
    );
}

/* Conteúdo */
.banner-content {
    position: relative;
    max-width: 520px;
    color: #ffffff;
    z-index: 2;
}

/* Título */
.banner-title {
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 16px;
}

/* Subtítulo */
.banner-subtitle {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 32px;
    opacity: 0.95;
}

/* Botão */
.banner-btn {
    display: inline-block;
    padding: 14px 36px;
    background-color: #ffffff;
    color: #000000;
    text-decoration: none;
    font-weight: 500;
    border-radius: 40px;
    transition: all 0.3s ease;
}

.banner-btn:hover {
    background-color: #000000;
    color: #ffffff;
    transform: translateY(-3px);
}
</style>

