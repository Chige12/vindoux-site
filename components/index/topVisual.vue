<template lang="pug">
  .top_visual
    .top_bar
    .logo-box
      img(src="~/assets/img/yoko.png").logo
      .logo-text ヴァン・ドゥ
    .top-background
      .top-background-img(
        ref="topBGImg"
        src="~/assets/img/background.png"
        :style="`background-position: 50% ${objPosY}%;`"
      )
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
      const rect = this.$refs.topBGImg.getBoundingClientRect();
      const height = this.$refs.topBGImg.clientHeight
      const bottomY = height + rect.top + scrollY
      this.objPosY = scrollY / bottomY * 100
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
  background: no-repeat url('~assets/img/background.png');
  background-position: 50% 50%;
  background-size: cover;
}
@media screen and (max-width: 1240px) {
  .top-background {
    height: 500px;
  }
}
@media screen and (max-width: 1024px) {
  .top-background {
    height: 400px;
  }
}
@media screen and (max-width: 860px) {
  .logo {
    width: 80%;
  }
}
</style>