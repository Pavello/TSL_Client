<template>
      <div class="wrapper">
        <div class="container">
          <h1>{{this.postById.title}}</h1>
          <h3>{{this.postById.date}}</h3>
          <p>{{this.postById.content}}</p>
        </div>
      </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'detailedNewsComponent',
  computed: {
    ...mapGetters(['getPostById']),
    postById() {
      return this.getPostById(parseInt(this.$route.params.id, 10));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .wrapper {
    margin: auto;
    max-width: 1100px;
    .container{
    height: 100%;
    margin: 10px auto;
    background-color: rgb(240, 239, 239);
      h1, h3, p {
        margin: 20px 10px;
        padding: 10px 10px;
      }
    }
  };
</style>
