<template>
      <nav>
        <div>
            <h1>{{email}}</h1>
            <h1>{{phoneNumber}}</h1>
        </div>
        <div id="right-section">
          <div class="menu-item"><router-link to="/offer">Oferta</router-link></div>
          <div class="menu-item"><router-link to="/prices">Cennik</router-link></div>
          <div class="menu-item"><router-link to="/location">Jak nas znaleźć</router-link></div>
          <Dropdown title="Liga" :items="leagueServices" />
          <div class="menu-item"><router-link to="/about">Kontakt</router-link></div>
        </div>
      </nav>
</template>

<script>
import Dropdown from './sub-components/Dropdown.vue';

export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      leagueServices: [
        {
          title: 'Ligi aktywne',
          link: '/leagues',
        },
        {
          title: 'Ligi archiwalne',
          link: '#',
        },
        {
          title: 'Ranking generalny graczy',
          link: '#',
        },
        {
          title: 'Regulamin Ligi',
          link: '#',
        },
      ],
      email: 'korty.skosna@gmail.com',
      phoneNumber: '555666699',
    };
  },
};

</script>

<style lang="scss">
nav {
    margin: auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

      #left_side_second_row{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-content: flex-start;
      }

      h1{
        font-weight: bold;
        color: antiquewhite;
        font-size: 12px;
      }

      #right-section{
        .menu-item {
          position: relative;
          display: inline-block;
          padding: 10px 20px;
          transition: 0.4s;
          margin: 10px;
          font-weight: bold;
          color: antiquewhite;
          font-size: 12px;
            a{
              color: inherit;
              text-decoration: none;
              font-size: inherit;
            }
        }

        .menu-item.active,
        .menu-item:hover {
          background-color: #444;
        }
      }
    }
</style>
