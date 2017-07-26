<template>
  <div class="index">
    <video
      ref="refVideo"
      class="index-video"
      src="/static/video/indexvideo2.mp4"
      muted
      poster
      preload
      autoplay
      loop>
    </video>
    <div class="index-shade">
      <my-header></my-header>
      <self></self>
    </div>
  </div>
</template>
<script>
  import MyHeader from './Header.vue'
  import Self from './self/Self.vue'

  export default {
    components: {
      MyHeader,
      Self
    },
    beforeMount () {
    },
    mounted () {
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>
<style scoped lang="scss">
  .index {
    width: 100%;
    height: 100%;
    .index-video {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 0 0;
    }
    .index-shade {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
    }
  }
</style>
