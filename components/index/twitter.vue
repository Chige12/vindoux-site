<template lang="pug">
  section.section-twitter
    .twitter-wrapper
      p.follow-text(:class="{'hover':isLinkHovering}")
        span(
          v-for="(t,tid) in 'Twitterをフォロー !'"
          :key="tid"
        ) {{t}}
      .twitter-logo
        a.twitter-link(
          href="https://twitter.com/iburigackoTOAK"
          @mouseover="isLinkHovering = true"
          @mouseleave="isLinkHovering = false"
        )
          TwitterDial.logo.dial(:class="{'hover':isLinkHovering}")
          TwitterScale.logo.scale(:class="{'hover':isLinkHovering}")
      p.twitter-id: a(
        href="https://twitter.com/iburigackoTOAK"
        @mouseover="isLinkHovering = true"
        @mouseleave="isLinkHovering = false"
        ) @iburigackoTOAK
</template>
<script>
import TwitterDial from '~/assets/svg/twitter_dial.svg?inline'
import TwitterScale from '~/assets/svg/twitter_scale.svg?inline'

export default {
  components: {
    TwitterDial,
    TwitterScale
  },
  data() {
    return {
      isLinkHovering: false
    }
  }
}
</script>
<style lang="scss" scoped>
.section-twitter {
  padding: 6px 0;
  background: $theme-light-gray;
}
.twitter-wrapper {
  padding: 64px 0;
  text-align: center;
  border-top: 2px solid $theme-crimson;
  border-bottom: 2px solid $theme-crimson;
}
.follow-text {
  @include font($size: 20px);
  span {
    display: inline-block;
  }
  &.hover {
    @for $i from 0 through 20 {
      span:nth-child(#{$i + 1}){
        animation: bound-anim 1s $i * 0.05s $ease-out;
      }
    }
  }
}
.twitter-logo {
  position: relative;
  width: 120px;
  height: 120px;
  margin: auto;
  margin-top: 16px;
  .logo {
    @include absolute($top: 0, $left: 0);
    display: block;
    width: 100%;
    height: 100%;
  }
  .dial {
    animation: dial-anim-2 1s 0s normal both;
    &.hover {
      animation: dial-anim 1s 0s normal both;
    }
  }
  .scale {
    transition: 0.2s 0s $ease-out;
    &.hover {
      transform: scale(1.05);
    }
  }
}
.twitter-id a {
  @include font($size: 17px);
}

@keyframes bound-anim {
  0%,100% {transform: translateY(0) scale(1);}
  10% {transform: translateY(0) scale(1.2,0.8);}
	40% {transform: translateY(-10px)}
  60% {transform: scale(1.2,0.8);}
  90% {transform: translateY(0);}
}
@keyframes dial-anim {
  0%  {transform: rotate(0deg);}
  30% {transform: rotate(200deg);}
	45% {transform: rotate(170deg);}
  60% {transform: rotate(185deg);}
  70% {transform: rotate(177deg);}
  80% {transform: rotate(181deg);}
  90% {transform: rotate(180deg);}
  100% {transform: rotate(180deg);}
}
@keyframes dial-anim-2 {
  0%  {transform: rotate(0deg + 180deg);}
  30% {transform: rotate(200deg + 180deg);}
	45% {transform: rotate(170deg + 180deg);}
  60% {transform: rotate(185deg + 180deg);}
  70% {transform: rotate(177deg + 180deg);}
  80% {transform: rotate(181deg + 180deg);}
  90% {transform: rotate(180deg + 180deg);}
  100% {transform: rotate(180deg + 180deg);}
}
</style>