import { defineStore } from "pinia";

export const useCarrinhoStore = defineStore("carrinho", {
    state: () => ({
        itens: JSON.parse(sessionStorage.getItem("carrinho")) || []
    }),

    getters: {
        totalItens: (state) => state.itens.length
    },

    actions: {
        adicionar(produto) {
        this.itens.push(produto);
        sessionStorage.setItem(
            "carrinho",
            JSON.stringify(this.itens)
        );
        },

        remover(index) {
        this.itens.splice(index, 1);
        sessionStorage.setItem(
            "carrinho",
            JSON.stringify(this.itens)
        );
        },

        limpar() {
        this.itens = [];
        sessionStorage.removeItem("carrinho");
        }
    }
});
