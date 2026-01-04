<template>
    <div class="pagina-redefinir">
        <div class="cartao-redefinir animacao-entrada">
        
        <div class="topo-icon">
            <i class="bi bi-gem"></i>
        </div>

        <div class="cabecalho-redefinir">
            <h1>Redefinir Senha</h1>
            <p>Insira seu e-mail para receber o link de redefinição de senha</p>
        </div>

        <form class="formulario-redefinir" @submit.prevent="enviarLink">
            
            <div class="grupo-campo">
            <label>E-mail</label>
            <div class="campo-com-icone">
                <i class="bi bi-envelope icone-input"></i>
                <input 
                type="email" 
                v-model="email" 
                placeholder="seu@email.com" 
                :class="{ 'input-erro': emailInvalido }"
                required
                >
            </div>
            <span v-if="emailInvalido" class="erro-texto">Formato de e-mail inválido</span>
            </div>

            <button type="submit" class="botao-enviar">
            <i class="bi bi-send"></i> Enviar Link de Redefinição
            </button>
        </form>

        <div class="rodape-redefinir">

            <router-link to="/login" class="btn-outline">
                Voltar ao Login
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
    name: "RedefinirSenha",
    data() {
        return {
            email: "",
            emailInvalido: false
        };
    },
    methods: {
        validarEmail(email) {
            const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
            return regex.test(email);
        },
        enviarLink() {
            if (!this.validarEmail(this.email)) {
                this.emailInvalido = true;
                return;
            }
            this.emailInvalido = false;
            console.log("Enviando link para:", this.email);
            // Aqui você dispararia a lógica para o backend
            alert("Se o e-mail estiver cadastrado, um link será enviado em breve!");
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

.pagina-redefinir {
    min-height: 100vh;
    background-color: #fdf2dc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
    padding: 20px;
}

.cartao-redefinir {
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

.cabecalho-redefinir h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #1a1a1a;
}

.cabecalho-redefinir p {
    font-size: 13px;
    color: #888;
    margin-bottom: 25px;
    line-height: 1.5;
}

.formulario-redefinir {
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

.campo-com-icone {
    position: relative;
    display: flex;
    align-items: center;
}

.icone-input {
    position: absolute;
    left: 12px;
    color: #b28b49;
    opacity: 0.7;
}

.campo-com-icone input {
    width: 100%;
    padding: 12px 12px 12px 40px; 
    border-radius: 6px;
    border: 1px solid #e0e0e0;
    background: #fff;
    font-size: 14px;
}

.campo-com-icone input:focus {
    outline: none;
    border-color: #b28b49;
}

.input-erro {
    border: 1px solid #ff4d4d !important;
}

.erro-texto {
    color: #ff4d4d;
    font-size: 11px;
    margin-top: 2px;
}

.botao-enviar {
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
    gap: 10px;
    margin-top: 5px;
    transition: background 0.3s;
}

.botao-enviar:hover {
    background-color: #a07a3d;
}

.rodape-redefinir {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-top: 1px solid #eee;
    padding-top: 25px;
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