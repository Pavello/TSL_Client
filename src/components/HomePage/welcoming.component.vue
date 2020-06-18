<template>
  <section id="showcase">
      <div class="container">
        <h1>Witaj na Skośnej!</h1>
        <p>Zagraj z nami w tenisa w świetnej atmosferze!</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'welcomingComponent',

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#showcase {
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  background: url('../../assets/img/tennisNet_2.jpg') no-repeat center center/cover;
  min-height: 370px;
}

.container {
  max-width: 1100px;
  min-width: 100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
}

h1{
  padding: 0;
  margin: 20px 0px 0px 10px;
  max-width: 30%;
  color: antiquewhite;
  font-size: 3em;
  animation: fadeIn 3s;
}

p{
  padding: 0;
  margin-left: 10px;
  margin-top: 10px;
  color: antiquewhite;
  font-size: 20px;
  animation: fadeIn 3s;
}

@keyframes fadeIn {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

</style>
