<template>
    <section class="categoria" id="cate">
        <div class="categoria-header">
            <h2>Nossas Categorias</h2>
            <p>Encontre aqui anéis, colares e pulseiras</p>
        </div>

        <div class="categoria-cards">
        <!-- Card 1 -->
        <div class="card">
            <img
            src="@/assets/images/categoriaAneis.png"
            alt="Anéis"
            />
            <button class="card-btn">Anéis</button>
        </div>

        <!-- Card 2 -->
        <div class="card">
            <img
            src="@/assets/images/categoriaColar.png"
            alt="Colares"
            />
            <button class="card-btn">Colares</button>
        </div>

        <!-- Card 3 -->
        <div class="card">
            <img
            src="@/assets/images/categoriaPulseira.png"
            alt="Pulseiras"
            />
            <button class="card-btn">Pulseiras</button>
        </div>
        </div>
    </section>
</template>


<script>
export default {
    name: "Categoria",
};
</script>

<style scoped>
/* Seção */
.categoria {
    padding: 80px 64px;
    background-color: #ffffff;
    text-align: center;
}

/* Cabeçalho */
.categoria-header h2 {
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 10px;
}

.categoria-header p {
    font-size: 1rem;
    color: #777;
    margin-bottom: 50px;
}

/* Cards */
.categoria-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

/* Card individual */
.card {
    position: relative;
    overflow: hidden;
    height: 420px;
    cursor: pointer;
    border-radius: 4px;
    transition: transform 0.4s ease;
}

/* Imagem */
.card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

/* Hover efeito */
.card:hover img {
    transform: scale(1.08);
}

/* Botão */
.card-btn {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    padding: 12px 36px;
    background-color: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 30px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

/* Hover botão */
.card:hover .card-btn {
    background-color: #000;
    color: #fff;
}
</style>
