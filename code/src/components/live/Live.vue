<template>
  <div>
    生活内容
    <el-button @click="handleBack">回首页</el-button>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods: {
      handleBack () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>
