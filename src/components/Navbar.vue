<template>
    <header class="header" :class="{ scrolled: isScrolled }">

        <!-- LOGO -->
        <div class="header-logo">
            <img src="@/assets/images/logo_natalia.jpeg" alt="Logo" class="logo" />
        </div>

        <!-- NAVBAR -->
        <div class="navbar">

        <!-- Busca -->
        <div class="nav-search">
            <select class="search-select">
            <option disabled selected>Pesquisar</option>
            <option>Anéis</option>
            <option>Colares</option>
            <option>Pulseiras</option>
            </select>
        </div>

        <!-- Menu -->
        <nav class="nav-menu">
            <ul class="menu-desktop">
            <li class="link"><a href="#">Início</a></li>
            <li class="link"><a href="#cate">Categorias</a></li>
            <li class="link"><a href="#pro">Produtos</a></li>
            <li class="link"><a href="#con">Contato</a></li>
            </ul>
        </nav>

        <!-- Login / Usuário -->
        <div class="nav-login">

            <!-- NÃO LOGADO -->
            <template v-if="!auth.logado">
                <button class="btn-login" @click="abrirLogin">Entrar</button>
            <span>|</span>
                <button class="btn-cadastro" @click="abrirCadastro">Cadastre-se</button>
            </template>

            <!-- LOGADO -->
            <template v-else>
                <div class="usuario-menu">

                    <span class="minhas-compras">
                        Minhas Comprar
                    </span>
                    <span>|</span>
                    <span class="usuario-nome" @click="toggleMenu">
                    Olá, {{ auth.usuario.nome }}
                    </span>

                    <div v-if="menuAberto" class="dropdown">
                        <button @click="irPerfil">Meu Perfil</button>
                        <button @click="sair">Sair</button>
                    </div>
                </div>
            </template>

            <!-- MENU HAMBÚRGUER (MOBILE) -->
            <button class="btn-hamburger" @click="menuMobileAberto = !menuMobileAberto">
                <img src="../assets/icons/iconMenu.png" alt="Menu" />
            </button>

            <!-- Carrinho -->
            <button class="btn-carrinho" @click="abrirCarrinho">
            <img src="../assets/icons/iconCarrinho.png" alt="Carrinho" />
            </button>

            <CarrinhoLateral ref="carrinhoRef" />
        </div>

        </div>
    </header>

        <!-- MENU MOBILE -->
        <div class="menu-mobile" :class="{ ativo: menuMobileAberto }">

            <ul class="menu-mobile-links">
                <li><a href="#" @click="menuMobileAberto = false">Início</a></li>
                <li><a href="#cate" @click="menuMobileAberto = false">Categorias</a></li>
                <li><a href="#pro" @click="menuMobileAberto = false">Produtos</a></li>
                <li><a href="#con" @click="menuMobileAberto = false">Contato</a></li>
            </ul>

            <div class="menu-mobile-auth">

                <!-- NÃO LOGADO -->
                <template v-if="!auth.logado">
                <button @click="abrirLogin">Entrar</button>
                <button @click="abrirCadastro">Cadastre-se</button>
                </template>

                <!-- LOGADO -->
                <template v-else>
                <span class="mobile-user">Olá, {{ auth.usuario.nome }}</span>
                <button @click="irPerfil">Meu Perfil</button>
                <button @click="sair">Sair</button>
                </template>
            </div>
        </div>

</template>

<script>
import CarrinhoLateral from "@/components/CarrinhoLateral.vue";
import { useAuthStore } from "@/stores/auth";

export default {
    name: "Navbar",
    components: {
        CarrinhoLateral
    },

    setup() {
        const auth = useAuthStore();
        return { auth };
    },

    data() {
        return {
        isScrolled: false,
        menuAberto: false,
        menuMobileAberto: false
        };
    },

    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },

    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },

    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 80;
        },

        toggleMenu() {
            this.menuAberto = !this.menuAberto;
        },

        sair() {
            this.auth.logout();
            this.menuAberto = false;
            this.$router.push("/");
        },

        irPerfil() {
            this.menuAberto = false;
            this.$router.push("/perfil");
        },

        abrirCarrinho() {
            this.$refs.carrinhoRef.abrirCarrinho();
        },

        abrirLogin() {
            this.$router.push("/login");
        },

        abrirCadastro() {
            this.$router.push("/cadastro");
        }
    }
};
</script>

<style>

html {
    scroll-behavior: smooth;
}

.header {
    background: #ffffff;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    position: sticky;
    top: 0;
    z-index: 100;
    transition: all 0.4s ease;
}

.header-logo {
    display: flex;
    justify-content: center;
    padding: 20px 0 10px;

    max-height: 140px;
    overflow: hidden;

    transition: 
        opacity 0.3s ease,
        transform 0.3s ease,
        max-height 0.3s ease;
}

.logo {
    height: 130px;
    transition: all 0.4s ease;
}

.logo:hover {
    transform: scale(1.06);
}
    
.navbar {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: 12px 64px 20px;
    transition: padding 0.3s ease;
}


/**CSS do Scroll */
header.scrolled .header-logo {
    opacity: 0;
    transform: scale(0.9);
    pointer-events: none;
}

.header.scrolled .logo {
    height: 0;
}

.header.scrolled .navbar {
    margin-top: -6px;
}

.nav-menu {
    display: flex;
    justify-content: center;
}

/**Campo Buscar */
.nav-search {
    display: flex;
    align-items: center;
}

.search-select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    background-color: #f3f3f3;
    border: none;
    border-radius: 20px;

    padding: 10px 40px 10px 18px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath fill='%23000' d='M0 0l5 6 5-6z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
}

.search-select:focus {
    outline: none;
}

/* Menu */
.menu-desktop {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    padding: 0;
    margin-left: 80px;
}


/* Cada item do menu */
.menu-desktop .link {
    display: flex;
    align-items: center;
    position: relative;
}

/* Separador entre os itens */
.menu-desktop li:not(:last-child)::after {
    content: "|";
    margin-left: 25px;
    color: var(--banco-cinza);
    font-weight: 300;
}

/* Links */
.menu-desktop .link a {
    text-decoration: none;
    color: var(--preto);
    font-weight: 600;
    font-size: 15px;
    transition: color 0.3s ease;
}
/**TODO - ADICIONAR CSS DO LOGIN */
.btn-login,
.btn-cadastro{
    border: none;
    background: none;
    text-decoration: none;
    color: var(--preto);
    font-weight: 600;
    font-size: 15px;
    transition: color 0.3s ease;
    cursor: pointer;
}

.btn-login:hover,
.btn-cadastro:hover{
    color: rgb(214,171,41);
}

/* Hover nos links */
.menu-desktop .link a:hover {
    color: rgb(214,171,41);
}

/* Ações */
.nav-login {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    font-size: 14px;
}


.nav-login a:hover {
    color: rgb(214,171,41);
}


/**Carinho */
.btn-carrinho {
    background: none;
    border: none;
    padding: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease, opacity 0.2s ease;
    margin-left: 20px;
}

.btn-carrinho img {
    width: 26px;
    height: 26px;
    transition: transform 0.3s ease;
    filter: brightness(0) saturate(100%) invert(15%) sepia(7%) saturate(700%) hue-rotate(180deg) brightness(90%) contrast(90%);
}

.btn-carrinho:hover img {
    transform: scale(1.15);
    filter: brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(1000%) hue-rotate(200deg);
}

.btn-carrinho:active {
    transform: scale(0.9);
}

/* Quando scrollar */
header.scrolled {
    background-color: #ffffffcc;
    backdrop-filter: blur(6px);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

header .header-logo {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Ajusta espaçamento quando a logo some */
.header.scrolled .navbar {
    padding-top: 12px;
    padding-bottom: 12px;
}

/* Animação suave */
.header {
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.header-logo {
    transition: opacity 0.3s ease, max-height 0.3s ease;
}

.navbar {
    transition: padding 0.3s ease;
}

/* ESCONDIDO NO DESKTOP */
.btn-hamburger {
    display: none;
    background: none;
    border: none;
    font-size: 26px;
    cursor: pointer;
}

</style>

