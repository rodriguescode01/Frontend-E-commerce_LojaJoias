<template>
    <div class="pagina-login">
        <div class="cartao-login animacao-entrada">
        
        <div class="topo-icon">
            <i class="bi bi-gem"></i>
        </div>

        <div class="cabecalho-login">
            <h1>Fazer Login</h1>
            <p>Bem-vindo de volta!</p>
        </div>

        <form class="formulario-login" @submit.prevent="fazerLogin">
            
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
            <div class="label-com-link">
                <label>Senha</label>

                <router-link to="/redefinir" class="link-esqueci">
                    Esqueceu a senha?
                </router-link>

            </div>
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

            <button type="submit" class="botao-entrar">
            <i class="bi bi-box-arrow-in-right"></i> Entrar
            </button>
        </form>

        <div class="rodape-login">
            <p class="texto-divisor">Não tem uma conta?</p>
            
            <router-link to="/cadastro" class="btn-outline">
                Criar Conta
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
    name: "Login",
    data() {
        return {
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
        fazerLogin() {
            if (!this.validarEmail(this.email)) {
                this.emailInvalido = true;
                return;
            }
        this.emailInvalido = false;
        console.log("Tentativa de login com:", this.email);
        // Aqui você adicionaria sua lógica de autenticação
        }
    },
    watch: {
        email(novoValor) {
            if (this.validarEmail(novoValor)) {
                this.emailInvalido = false;
            }
        }
    }
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css");

.pagina-login {
    min-height: 100vh;
    background-color: #fdf2dc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
    padding: 20px;
}

.cartao-login {
    width: 100%;
    max-width: 400px;
    background: #ffffff;
    border-radius: 8px;
    padding: 40px 30px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    text-align: center;
}

/* ANIMAÇÃO DE ENTRADA */
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

.topo-icon {
    font-size: 32px;
    color: #b28b49;
    margin-bottom: 10px;
}

.cabecalho-login h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #1a1a1a;
}

.cabecalho-login p {
    font-size: 14px;
    color: #888;
    margin-bottom: 25px;
}

.formulario-login {
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

.label-com-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.link-esqueci {
    font-size: 11px;
    color: #b28b49;
    text-decoration: none;
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
}

.grupo-campo input:focus {
    outline: none;
    border-color: #b28b49;
}

/* ERROS */
.input-erro {
    border: 1px solid #ff4d4d !important;
}

.erro-texto {
    color: #ff4d4d;
    font-size: 11px;
    margin-top: 2px;
}

/* CAMPO SENHA */
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

/* BOTÃO ENTRAR */
.botao-entrar {
    width: 100%;
    padding: 14px;
    background-color: #b28b49;
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
}

.rodape-login {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.texto-divisor {
    font-size: 13px;
    color: #666;
    margin-bottom: 5px;
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
</style>