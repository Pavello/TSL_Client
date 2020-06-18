<template>
  <div id="home">
        <season-info-component></season-info-component>
        <newsletterComponent></newsletterComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import seasonInfoComponent from '../components/HomePage/season_info.component.vue';
import newsletterComponent from '../components/HomePage/Newsletter_section/newsletter.component.vue';

export default {
  name: 'Home',
  components: {
    seasonInfoComponent,
    newsletterComponent,
  },
};
</script>
