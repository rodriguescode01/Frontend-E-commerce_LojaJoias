<template>
    <div class="pagina-cadastro">
        <div class="cartao-cadastro animacao-entrada">
        
        <div class="topo-icon">
            <i class="bi bi-gem"></i>
        </div>

        <div class="cabecalho-cadastro">
            <h1>Criar Conta</h1>
            <p>Junte-se a nós hoje</p>
        </div>

        <form class="formulario-cadastro" @submit.prevent="cadastrar">
            <div class="grupo-campo">
            <label>Nome Completo</label>
            <input type="text" v-model="nome" placeholder="Seu nome completo" required>
            </div>

            <div class="grupo-campo">
                <label>E-mail</label>
                <input 
                    type="email" 
                    v-model="email" 
                    placeholder="seu@email.com" 
                    :class="{ 'input-erro': emailInvalido }"
                    required
                >
                <span v-if="emailInvalido" class="erro-texto">Formato de e-mail inválido</span>
            </div>

            <div class="grupo-campo">
            <label>Senha</label>
            <div class="campo-senha-container">
                <input 
                :type="mostrarSenha ? 'text' : 'password'" 
                placeholder="Sua senha" 
                v-model="senha" 
                required 
                />
                <span class="icone-olho" @click="mostrarSenha = !mostrarSenha">
                <i :class="mostrarSenha ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                </span>
            </div>
            </div>

            <button type="submit" class="botao-cadastrar">
                <i class="bi bi-person-plus-fill"></i> Criar Conta
            </button>
        </form>

        <div class="rodape-cadastro">
            <p class="texto-divisor">Já tem uma conta?</p>
            
            <router-link to="/login" class="btn-outline">
                Fazer Login
            </router-link>
            
            <router-link to="/" class="btn-voltar">
                <i class="bi bi-arrow-left me-2"></i> Voltar à loja
            </router-link>
        </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Cadastro",
    data() {
        return {
            nome: "",
            email: "",
            senha: "",
            mostrarSenha: false,
            emailInvalido: false 
        };
    },
    methods: {
        
        validarEmail(email) {
            const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
            return regex.test(email);
        },
        
        cadastrar() {
            // Validamos antes de processar o cadastro
            if (!this.validarEmail(this.email)) {
                this.emailInvalido = true;
                alert("Por favor, insira um e-mail válido.");
                return;
            }
            
            this.emailInvalido = false;
            console.log("Dados prontos para envio:", {
                nome: this.nome,
                email: this.email,
                senha: this.senha
            });        
        }
    },
    watch: {
        // Remove o alerta de erro assim que o usuário começa a corrigir
        email(novoValor) {
            if (this.validarEmail(novoValor)) {
                this.emailInvalido = false;
            }
        }
    }
};
</script>

<style scoped>
/* Importando ícones do Bootstrap caso não tenha no projeto */
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css");

.pagina-cadastro {
    min-height: 100vh;
    background-color: #fdf2dc; /* Fundo amarelado do Figma */
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
    padding: 20px;
}

.cartao-cadastro {
    width: 100%;
    max-width: 400px;
    background: #ffffff;
    border-radius: 8px;
    padding: 40px 30px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    text-align: center;
}

.topo-icon {
    font-size: 32px;
    color: #b28b49;
    margin-bottom: 10px;
}

.cabecalho-cadastro {
    margin-bottom: 25px;
}

.cabecalho-cadastro h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #1a1a1a;
}

.cabecalho-cadastro p {
    font-size: 14px;
    color: #888;
}

.formulario-cadastro {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.grupo-campo {
    display: flex;
    flex-direction: column;
    gap: 6px;
    text-align: left;
}

.grupo-campo label {
    font-size: 13px;
    font-weight: 600;
    color: #333;
}

.grupo-campo input {
    width: 100%;
    padding: 12px 15px;
    border-radius: 6px;
    border: 1px solid #e0e0e0;
    background: #fff;
    font-size: 14px;
    transition: border 0.3s;
}

.grupo-campo input:focus {
    outline: none;
    border-color: #b28b49;
}

.campo-senha-container {
    position: relative;
    display: flex;
    align-items: center;
}

.icone-olho {
    position: absolute;
    right: 15px;
    cursor: pointer;
    color: #b28b49;
    font-size: 18px;
}

.botao-cadastrar {
    width: 100%;
    padding: 14px;
    background-color: #B28B49;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 10px;
    transition: opacity 0.3s;
}

.botao-cadastrar:hover {
    opacity: 0.9;
}

.rodape-cadastro {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.texto-divisor {
    font-size: 13px;
    color: #666;
    margin-bottom: 5px;
    position: relative;
}

.btn-outline, .btn-voltar {
    width: 100%;
    padding: 10px;
    background: transparent;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-outline {
    border: 1px solid #b28b49;
    color: #b28b49;
    text-decoration: none;
}

.btn-outline:hover {
    background: #fdf2dc;
}

.btn-voltar {
    border: 1px solid #e0e0e0;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    text-decoration: none;
}

.btn-voltar:hover {
    background: #f5f5f5;
    color: #333;
}

/** Tratar com erros de email */
.input-erro {
    border: 1px solid #ff4d4d !important;
    background-color: #fffafa !important;
}

.erro-texto {
    color: #ff4d4d;
    font-size: 11px;
    margin-top: 2px;
    font-weight: 500;
}

/**Trata a animaçâo da pagina */
.animacao-entrada {
    animation: aparecerSuave 0.8s ease-out forwards;
}

@keyframes aparecerSuave {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);   
    }
}

.formulario-cadastro {
    animation: carregarCampos 1.2s ease-out;
}

@keyframes carregarCampos {
    0% { opacity: 0; }
    50% { opacity: 0; }
    100% { opacity: 1; }
}

</style>