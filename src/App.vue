<template>
  <div id="app">
    <header>
      <navbar />
      <Welcoming />
    </header>
    <main>
        <router-view/>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
    </div>
</template>
<script>
import Navbar from './views/Navbar.vue';
import Footer from './views/Footer.vue';
import Welcoming from './components/HomePage/welcoming.component.vue';

export default {
  components: {
    Navbar,
    Welcoming,
    Footer,
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

main {
  min-height: 500px;
  width: 100%;
  height: 100%;
}

  header {
    width: 100%;
    background-color: $dark;
  }

  footer {
    width: 100%;
    background-color: $dark;
  }

}
</style>
