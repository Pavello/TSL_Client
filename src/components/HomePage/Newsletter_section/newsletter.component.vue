<template>
  <section id="newsletter">
      <div id="newsSection">
        <NewsComponent v-for="post in allPosts"
        :key="post.id"
        :news="post"
        />
      </div>
      <div id="paginationSection">
      </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import NewsComponent from './news.component.vue';


export default {
  name: 'welcomingComponent',
  components: {
    NewsComponent,
  },
  computed: mapGetters(['allPosts']),
  data() {
    return {
      currentPage: 1,
      totalPages: 10,
    };
  },
};
</script>
<style scoped lang="scss">
#newsletter {
  margin: auto;
  max-width: 1100px;
    #newsSection{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

  @media (max-width: 800px)  {
    #newsSection {
      grid-template-columns: repeat(2, 1fr);
    }
  }
   @media (max-width: 500px)  {
    #newsSection {
      grid-template-columns: 1fr;
    }
  }
}
</style>
