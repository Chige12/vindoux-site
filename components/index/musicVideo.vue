<template lang="pug">
  .music-video
    .background
    div(@click="isVideoPlayerOpened = true")
      img(src="~/assets/img/now_on_air.png").mv-thumbnail
      PlaySvg.play-btn
      p.pv-title: span 【MV】   Now On Air!
    transition(name="fade")
      .play-video(v-show="isVideoPlayerOpened")
        .youtube
          youtube(
            ref="youtube"
            video-id="_DoFF3EadJ0"
            resize="true"
            fitParent="true"
            style="width: 100%; height: 100%;"
            :player-vars="playerVars"
          )
        .close-btn
          button(@click="videoPlayerClose()") ✕ CLOSE
</template>
<script>
import PlaySvg from '~/assets/svg/play.svg?inline'
export default {
  components: {
    PlaySvg
  },
  data() {
    return {
      isVideoPlayerOpened: false,
      playerVars: {
        'origin': location.protocol + '//' + location.hostname + "/"
      }
    }
  },
  methods: {
    videoPlayerClose() {
      this.isVideoPlayerOpened = false
      this.$refs.youtube.player.stopVideo()
    }
  }
}
</script>
<style lang="scss" scoped>
.music-video {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  background: $theme-dark-red;
  cursor: pointer;
  .background {
    @include absolute(0,0,0,0);
    width: 100%;
    height: 100%;
  }
  &:hover {
    .mv-thumbnail {
      transform: scale(1.04);
    }
  }
}
.mv-thumbnail {
  display: block;
  width: 100%;
  max-width: 924px;
  margin: auto;
  transition: 0.3s $ease-out;
}
.play-btn {
  display: block;
  width: 30px;
  margin: auto;
  filter: drop-shadow(0 2px 6px rgba(#000, 0.8));
  @include absolute(0,0,0,0);
}
.pv-title {
  @include absolute($bottom: 40px, $left: 0, $right: 0);
  display: inline-block;
  width: 100%;
  text-align: center;
  span {
    padding: 4px 24px;
    letter-spacing: 0.4em;
    background: $theme-white;
  }
}
.play-video {
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  z-index: 20;
  width: 100%;
  height: 100%;
  background: rgba($theme-dark-red, 0.7);
  .close-btn {
    z-index: 2;
    display: block;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    button {
      padding: 6px 24px;
      letter-spacing: 0.4em;
      background: $theme-white;
    }
  }
  .youtube {
    width: 90%;
    height: 90%;
    margin: auto;
    // width="560" height="315"
    @include absolute(0,0,0,0,$z:-1);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media screen and (max-width: 860px) {
  .play-video {
    .close-btn {
      margin-top: 32px;
      button {
        padding: 8px 32px;
      }
    }
    .youtube {
      width: 96%;
      height: 500px;
    }
  }
}

@media screen and (max-width: 820px) {
  .pv-title {
    bottom: 20px;
  }
}
@media screen and (max-width: 640px) {
  .mv-thumbnail {
    height: 260px;
    object-fit: cover;
  }
  .pv-title span {
    letter-spacing: 0.2em;
  }
  .play-video {
    .youtube {
      width: 98%;
      height: 360px;
    }
  }
}
</style>