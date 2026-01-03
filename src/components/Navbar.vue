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
                    <li class="link"><a href="#">Home</a></li>
                    <li class="link"><a href="#cate">Categorias</a></li>
                    <li class="link"><a href="#pro">Produtos</a></li>
                    <li class="link"><a href="#con">Contato</a></li>
                </ul>
            </nav>

            <!-- Login / Carrinho -->
            <div class="nav-login">
                <a href="#">Login</a>
                <span>|</span>
                <a href="#">Cadastre-se</a>

                <button class="btn-carrinho">
                    <img src="../assets/icons/iconCarrinho.png" alt="Carrinho" />
                </button>
            </div>

        </div>
    </header>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            isScrolled: false
        }
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
        }
    }
}
</script>



<style scoped>
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
    height: 110px;
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
    transform: translateY(-6px);
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
.nav-login a,
.menu-desktop .link a {
    text-decoration: none;
    color: var(--preto);
    font-weight: 600;
    font-size: 15px;
    transition: color 0.3s ease;
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
.header,
.header-logo,
.navbar {
    transition: all 0.3s ease;
}


</style>

