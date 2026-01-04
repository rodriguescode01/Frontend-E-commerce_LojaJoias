<template>
    <transition name="slide-carrinho">
        <div v-if="carrinhoAberto" class="carrinho-lateral">

            <!-- Cabeçalho -->
            <div class="carrinho-topo d-flex justify-content-between align-items-center">
                <h5 class="carrinho-titulo">
                    <i class="fas fa-gem"></i> Carrinho de Joias
                </h5>

                <button
                    class="btn-fechar"
                    @click="fecharCarrinho"
                    title="Fechar"
                >
                    &times;
                </button>
            </div>

            <!-- Conteúdo -->
            <div class="carrinho-conteudo">
                <i class="fas fa-box-open"></i>
                <p>Seu carrinho está vazio</p>
            </div>

            <!-- Rodapé -->
            <div class="carrinho-rodape">
                <button class="btn-finalizar" disabled>
                    Finalizar Compra
                </button>
            </div>

        </div>
    </transition>
</template>


<script>
export default {
    name: "CarrinhoLateral",
    data() {
        return {
            carrinhoAberto: false,
        };
    },
    methods: {
        abrirCarrinho() {
            this.carrinhoAberto = true;
        },
        fecharCarrinho() {
            this.carrinhoAberto = false;
        },
    },
};
</script>

<style scoped>
/* ===== CONTAINER PRINCIPAL ===== */
.carrinho-lateral {
    position: fixed;
    top: 0;
    right: 0;
    width: 360px;
    height: 100vh;

    background-color: #ffffff;
    z-index: 9999;

    display: flex;
    flex-direction: column;

    box-shadow: -8px 0 30px rgba(0, 0, 0, 0.12);
    font-family: "Poppins", sans-serif;
}

/* ===== TOPO ===== */
.carrinho-topo {
    padding: 18px 20px;
    border-bottom: 1px solid #ecebe7;
}

.carrinho-titulo {
    font-size: 18px;
    font-weight: 600;
    color: #141414;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 10px;
    margin-bottom: -15px;
}

/* Botão fechar */
.btn-fechar {
    background: none;
    border: none;
    font-size: 45px;
    cursor: pointer;
    color: #141414;
    transition: color 0.2s ease, transform 0.2s ease;
    margin-left: 18rem;
    margin-top: -50px;
}

.btn-fechar:hover {
    color: #b28b49;
    transform: scale(1.1);
}

/* ===== CONTEÚDO ===== */
.carrinho-conteudo {
    flex: 1;
    padding: 40px 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #8a8a8a;
    text-align: center;
}

.carrinho-conteudo i {
    font-size: 42px;
    margin-bottom: 14px;
    color: #b28b49;
}

.carrinho-conteudo p {
    font-size: 18px;
    font-weight: 500;
}

.carrinho-rodape {
    padding: 16px 20px;
    border-top: 1px solid #ecebe7;
}

/* Botão finalizar */
.btn-finalizar {
    width: 100%;
    background-color: #b28b49;
    border: none;
    border-radius: 6px;
    padding: 12px;

    font-size: 14px;
    font-weight: 600;
    cursor: pointer;

    transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-finalizar:disabled {
    background-color: #e0e0e0;
    color: #9a9a9a;
    cursor: not-allowed;
}

.btn-finalizar:not(:disabled):hover {
    background-color: #d6ab29;
    transform: translateY(-2px);
}

/* ===== ANIMAÇÃO SLIDE ===== */
.slide-carrinho-enter-active,
.slide-carrinho-leave-active {
    transition: transform 0.35s ease;
}

.slide-carrinho-enter-from,
.slide-carrinho-leave-to {
    transform: translateX(100%);
}

.slide-carrinho-enter-to,
.slide-carrinho-leave-from {
    transform: translateX(0);
}
</style>
