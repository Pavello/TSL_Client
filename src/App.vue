<template>
  <div id="app">
    <header>
      <navbar />
    </header>
    <main>
        <Welcoming />
        <router-view/>
    </main>
    <footer>
      FOOTER
    </footer>
    </div>
</template>
<script>
import Navbar from './views/Navbar.vue';
import Welcoming from './components/HomePage/welcoming.component.vue';

export default {
  components: {
    Navbar,
    Welcoming,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat');
$dark: #2c3e50;

html, body {
  margin: 0px !important;
  padding: 0px !important;
  font-family: 'Montserrat', sans-serif ;
  background-color: white;
  box-sizing: border-box;
}

#app {
  font-family: 'Montserrat', sans-serif ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  margin: auto;

header{
  width: 100%;
  background-color: $dark;
  }
}
</style>
