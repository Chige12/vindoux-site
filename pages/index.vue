<template lang="pug">
  .index
    main
      TopVisual
      RadioSection
      Introduction
      Twitter
      MusicVideo
    footer
      p.copy &copy; Copyright Vindoux All rights reserved.
</template>

<script>
import TopVisual from '~/components/index/topVisual.vue'
import RadioSection from '~/components/index/radioSection.vue'
import Introduction from '~/components/index/introduction.vue'
import Twitter from '~/components/index/twitter.vue'
import MusicVideo from '~/components/index/musicVideo.vue'

export default {
  components: {
    TopVisual,
    RadioSection,
    Introduction,
    Twitter,
    MusicVideo
  }
}
</script>
<style lang="scss" scoped>
main {
  height: auto;
}
.copy {
  padding-bottom: 16px;
  text-align: center;
  // @include font($color: $theme-white);
}
footer {
  padding-top: 120px;
  background: $theme-light-gray;
  
}
</style>
