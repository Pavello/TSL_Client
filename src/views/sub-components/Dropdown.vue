<template>
    <div class="menu-item" @click="isOpen = !isOpen">
      {{title}}
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="sub-menu-item">
          <router-link :to="item.link">{{item.title}}</router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: ['title', 'items'],
  data() {
    return {
      isOpen: false,
    };
  },
  destroyed() {
    this.isOpen = false;
  },
};
</script>

<style lang="scss">
    .sub-menu{
      position: absolute;
      background-color: #2c3e50;
      width: max-content;
      top: calc(100% + 7px);
      left: 50%;
      transform: translateX(-50%);

        .sub-menu-item{
          padding: 10px;
          transition: 0.4s;
        }
        .sub-menu-item.active,
        .sub-menu-item:hover {
          background-color: #444;
        }
    }
  .fade-enter-active, .fade-leave-active {
    transition: all .5s ease-out;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
    }
</style>
