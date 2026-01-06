import { defineStore } from "pinia";
import { loginUsuario } from "@/services/api";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        usuario: JSON.parse(sessionStorage.getItem("usuario")) || null,
        logado: !!sessionStorage.getItem("usuario"),
    }),

    actions: {
        async login(email, senha) {
        const response = await loginUsuario({
            email: email.toLowerCase(),
            senha
        });

        this.usuario = response.data.usuario;
        this.logado = true;

        sessionStorage.setItem("usuario", JSON.stringify(this.usuario));
        },

        logout() {
        this.usuario = null;
        this.logado = false;
        sessionStorage.clear();
        }
    }
});
