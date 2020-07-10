<template lang="pug">
  .index
    TopVisual
    RadioSection
</template>

<script>
import TopVisual from '~/components/index/topVisual.vue'
import RadioSection from '~/components/index/radioSection.vue'
export default {
  components: {
    TopVisual,
    RadioSection
  }
}
</script>
<style lang="scss" scoped>
.index {
  height: 10000px;
}
</style>
