<template lang="pug">
  .top_visual
    .top_bar
    .logo-box
      img(src="~/assets/img/yoko.png").logo
      .logo-text ヴァン・ドゥ
    .top-background
      img(
        ref="topBGImg"
        src="~/assets/img/background.png"
        :style="`object-position: 50% ${objPosY}%;`"
      ).top-background-img
</template>
<script>
export default {
  data() {
    return {
      objPosY: 0
    }
  },
  mounted(){
    this.listen(document.body, 'scroll', this.calculateScrollY)
  },
  methods: {
    calculateScrollY() {
      const scrollY = document.body.scrollTop;
      const ch = this.$refs.topBGImg.clientHeight
      const rect = this.$refs.topBGImg.getBoundingClientRect();
      const y = rect.top + scrollY
      const bottom = ch + y
      this.objPosY = scrollY / bottom * 100
    }
  }
}
</script>
<style lang="scss" scoped>
.top_bar {
  width: 100%;
  height: 24px;
  background: $theme-crimson;
}
.logo-box {
  margin: 64px 0 72px;
}
.logo {
  display: block;
  width: 452px;
  margin: auto;
}
.logo-text {
  margin-top: 16px;
  letter-spacing: 0.5em;
  text-align: center;
  @include font($size: 20px);
}
.top-background {
  position: relative;
  width: 100%;
  height: 700px;
  &::before {
    @include absolute($top: -15px, $left: 0, $z: 1);
    width: 100%;
    height: 31px;
    background: repeat-x url('~assets/img/border.png');
    background-size: 81px 31px;
    content: '';
  }
}
.top-background-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 0%;
  overflow: hidden;
}
</style>