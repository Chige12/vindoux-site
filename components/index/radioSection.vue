<template lang="pug">
  .radio-section
    .radio-logo
      img(src="~/assets/img/radio_logo.png").radio-logo-img
    .radio-visual
      img(src="~/assets/svg/radio.svg").radio-visual-img
      .nami-1.nami
      .nami-2.nami
    .radio-text
      p Vin doux がお届けする雑談ラヂオ番組
      p 毎週日曜日 午後9時30分
        a.youtube-link(href="") Youtubeにて配信中！
          img(src="~/assets/img/channel.png").channel-balloon
    .radio-youtube
      .radio-youtube-list
</template>
<style lang="scss" scoped>
.radio-section {
  width: 100%;
  padding: 56px 0;
  background: $theme-crimson;
}
.radio-logo {
  .radio-logo-img {
    display: block;
    width: 536px;
    height: 186px;
    margin: auto;
  }
}
.radio-visual {
  position: relative;
  padding: 24px 0;
  .radio-visual-img {
    display: block;
    width: 128px;
    margin: auto;
  }
  .nami {
    @include absolute($top: 42px, $bottom: 0, $left: 0);
    width: 100%;
    margin: auto;
    &-1 {
      height: 26px;
      background: url('~assets/img/nami1.png');
      animation: namiSlide1 9s linear infinite reverse;
    }
    &-2 {
      height: 20px;
      background: url('~assets/img/nami2.png');
      animation: namiSlide2 9s linear infinite;
    }
  }
}

@keyframes namiSlide1 {
  0% { 
    background-position: 0 0;
    transform: scaleY(0.6);
  }
  50% {
    background-position: -325px 0;
    transform: scaleY(1);
  }
  100% {
    background-position: -650px 0;
    transform: scaleY(0.6);
  }
}
@keyframes namiSlide2 {
  0% { 
    background-position: 0 0;
    transform: scaleY(1);
  }
  50% {
    background-position: -138px 0;
    transform: scaleY(0.6);
  }
  100% {
    background-position: -276px 0;
    transform: scaleY(1);
  }
}

.radio-text {
  @include font($size: 24px, $color: $theme-light-gray);
  overflow: visible;
  text-align: center;
  p {
    margin: 8px 0;
  }
  .youtube-link {
    position: relative;
    margin-left: 32px;
    @include font($size: 24px, $color: $theme-light-gray);
    border-bottom: 1px solid $theme-light-gray;
    transition: 0.2s $ease-out;
    &:hover {
      color: $theme-light-yellow;
      border-bottom: 1px solid $theme-light-yellow;
    }
    .channel-balloon {
      @include absolute($top: -110px, $right: -120px, $z: 1);
      width: 162px;
    }
  }
}
</style>