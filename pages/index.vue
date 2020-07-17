<template lang="pug">
  .index
    main
      TopVisual
      RadioSection
      Introduction
    footer
      p.copy &copy; Copyright Vindoux All rights reserved.
</template>

<script>
import TopVisual from '~/components/index/topVisual.vue'
import RadioSection from '~/components/index/radioSection.vue'
import Introduction from '~/components/index/introduction.vue'

export default {
  components: {
    TopVisual,
    RadioSection,
    Introduction
  }
}
</script>
<style lang="scss" scoped>
main {
  height: auto;
  margin-bottom: 120px;
}
.copy {
  margin-bottom: 16px;
  text-align: center;
}
</style>
