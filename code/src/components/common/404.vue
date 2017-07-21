<template>
  <div>
    <p>404</p>
    <el-button @click="handleBack">回首页</el-button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      handleBack () {
        this.$router.push('/')
      }
    }
  }
</script>
