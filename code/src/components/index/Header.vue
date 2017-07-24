<template>
  <div class="clear-float">
    <!-- 大屏 -->
    <header class="header header-layout col-sm-6 hidden-xs">
      <h4 class="header-title">时光荏苒，初心依旧</h4>
      <ul class="header-menu">
        <li v-for="(item, index) in menu.list"
            @click="handleRouter(item, index)"
            :class="{'li-active': index === menu.active}">
          {{item.text}}
        </li>
      </ul>
    </header>

    <!-- 手持 -->
    <header class="header col-sm-12 visible-xs">
      <ul class="header-menu header-menu-2">
        <li v-for="(item, index) in menu.list"
            @click="handleRouter(item, index)"
            :class="{'li-active': index === menu.active}">
          {{item.text}}
        </li>
      </ul>
    </header>
  </div>
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

  .clear-float {
    overflow: hidden;
  }

  .header {
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, .8);
  }

  .header-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-title {
    color: #fff;
    font-size: 25px;
  }

  ul.header-menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin: 0;
    padding: 0;

    list-style: none;
    color: #fff;
    li {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 60px;
      height: 60px;
      margin-left: 10px;

      border-radius: 100%;
      text-align: center;
      border: 1px solid #fff;
      cursor: pointer;
      overflow: hidden;
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

  ul.header-menu-2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      margin: 0;
    }
  }
</style>
