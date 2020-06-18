<template>
  <section id="seasonInfo">
    <div class="container">
        <h1>SEZON LATO 2020</h1>
        <p>Zaczynamy rozgrywki w nowym sezonie letnim 2020! W tym sezonie
            zawodnicy będą mierzyli się w 3 klasach rozgrywek.
            Na zakoczenie sezonu rozgrywamy turniej mistrzów składający
            się z 8 najlepszych zawodników w każdej z klas.
            Zapraszamy do udziału!</p>
        <div id="leagueButtons">
            <button v-on:click="getFromServer" type="button">Liga 1</button>
            <button type="button">Liga 2</button>
            <button type="button">Liga 3</button>
        </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'seasonInfoComponent',
  methods: {
    getFromServer() {
      axios.get('/api/league').then((res) => console.log(res));
    },
  },
};
</script>

<style scoped lang="scss">

#seasonInfo{
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(240, 239, 239);

    .container{
      margin: auto;
      text-align: center;
      max-width: 1100px;
    #leagueButtons{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
            button {
                background-color: #008CBA;
                border: 0;
                font-family: 'Montserrat', sans-serif;
                font-size: 30px;
                border-radius: 10px;
                margin: 8px 12px 5px 12px;
            }
    }

    h1 {
    margin-top: 5px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 35px;
    }

    p{
    text-align: left;
    margin-top: 5px;
    margin-bottom: 5px;
    }
  }
}


</style>
