<template>
      <div class="container">
          <h1>{{news.title}}</h1>
          <h3>{{news.date}}</h3>
          <p>{{news.content}}</p>
          <button><router-link :to="`/news/${news.id}`">Czytaj więcej</router-link></button>
      </div>
</template>

<script>
export default {
  name: 'NewsComponent',
  props: ['news'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container {
    margin: 10px 10px;
    background-color: rgb(240, 239, 239);
      h1, h3, p {
        margin-left: 10px;
        margin-right: 10px;
      }
      button {
                background-color: #008CBA;
                border: 0;
                font-family: 'Montserrat', sans-serif;
                font-size: 20px;
                border-radius: 10px;
                margin: 8px 12px 8px 12px;
                padding: 5px 5px;
                a {
                  color: inherit;
                  text-decoration: none;
                  font-size: inherit;
                }
            }
  };
</style>
