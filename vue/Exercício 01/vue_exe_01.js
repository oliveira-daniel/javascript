/*

   Vue
   Exercício 01

   Lista de filmes em Vue

   Prof:  Daniel de Oliveira
   Aluno: [Evan Rispoli]

 */

const app = Vue.createApp({
  data: function() {
    return {
      movies: [
        {
           name: "Harry Potter",
           city: "London"
        },
        {
           name: "Don Quixote",
           city: "Madrid"
        },
        {
           name: "Joan of Arc",
           city: "Paris"
        },
        {
           name: "Rosa Park",
           city: "Alabama"
        }
     ]
    };
  },
});

app.mount("#app");



