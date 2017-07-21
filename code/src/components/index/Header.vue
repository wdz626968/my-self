<template>
  <header class="header">
    <h4 class="header-title">时光荏苒，初心依旧</h4>
    <ul class="header-menu">
      <li v-for="(item, index) in menu.list"
          @click="handleRouter(item, index)"
          :class="{'li-active': index === menu.active}">
        {{item.text}}
      </li>
    </ul>
  </header>
</template>
<script>
  import * as names from 'src/router/names'

  export default {
    data () {
      return {
        menu: {
          active: 0,
          list: [
            {text: '首页', path: names.INDEX},
            {text: '简历', path: ''},
            {text: '生活', path: names.LIVE},
            {text: '续', path: ''}
          ]
        }
      }
    },
    methods: {
      handleRouter (item, index) {
        this.menu.active = index
        this.$router.push({name: item.path})
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../../assets/css/animation.css';

  a {
    color: #fff;
    text-decoration: none;
  }

  .header {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, .5);

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .header-title {
    color: #fff;
    font-size: 25px;
  }

  .header-menu {
    list-style: none;
    color: #fff;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    li {
      width: 60px;
      height: 60px;
      border-radius: 100%;
      text-align: center;
      border: 1px solid #fff;
      margin-left: 10px;
      cursor: pointer;
      overflow: hidden;

      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        border-color: #3c8dbc;
        background-color: #3c8dbc;
        animation: animation1 .5s forwards;
      }
    }
    .li-active {
      border-color: #3c8dbc;
      background-color: #3c8dbc;
    }
  }
</style>
