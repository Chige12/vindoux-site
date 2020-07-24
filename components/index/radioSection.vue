<template lang="pug">
  section.radio-section
    .radio-logo
      img(src="~/assets/img/radio_logo.png").radio-logo-img
    .radio-visual
      .nami-1.nami
      .nami-2.nami
      img(src="~/assets/svg/radio.svg").radio-visual-img
    .radio-text
      p Vin doux がお届けする雑談ラヂオ番組
      p 
        span.time 毎週日曜日 午後9時30分
        a.youtube-link(href="https://www.youtube.com/channel/UC8lDjomPUeC-LV_nIAJxZnQ") Youtubeにて配信中！
          img(src="~/assets/img/channel.png").channel-balloon
    .radio-youtube(v-if="videos.length !== 0")
      .radio-youtube-container
        .radio-youtube-list
          .video(v-for="video in videos")
            a(:href="`https://www.youtube.com/watch?v=${video.id.videoId}`").video-link
              img(:src="video.snippet.thumbnails.medium.url").video-img
            .video-text-wrapfix
              .video-text {{publishedAt(video.snippet.publishedAt)}}<br>{{ video.snippet.title }}
</template>
<script>
export default {
  data() {
    return {
      results: [],
      apikey: process.env.APIKEY
    }
  },
  computed: {
    videos() {
      return this.results.slice(0, 3)
    }
  },
  mounted() {
    const baseUrl = 'https://www.googleapis.com/youtube/v3/search'
    const params = {
      key: this.apikey,
      part: 'snippet',
      channelId: 'UC8lDjomPUeC-LV_nIAJxZnQ',
      maxResults: 30,
      type: 'video',
      order: 'date'
    }
    this.$axios.$get(baseUrl, { params })
      .then((res) => {
        this.results = res.items
      })
      .catch((error) => {
        console.log('ERROR!', error)
      });
  },
  methods: {
    publishedAt(at) {
      return at.split('T')[0].replace(/-/g, '/')
    }
  }
}
</script>
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
  z-index: 1;
  padding: 24px 0;
  .radio-visual-img {
    display: block;
    width: 128px;
    margin: auto;
  }
  .nami {
    @include absolute($top: 42px, $bottom: 0, $left: 0, $z: -1);
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
      .channel-balloon {
        transform: rotate(4deg);
      }
    }
    .channel-balloon {
      @include absolute($top: -104px, $right: -118px, $z: 1);
      width: 162px;
      transform-origin: 30% 100%;
      transition: 0.4s $ease-out;
    }
  }
}

.radio-youtube {
  position: relative;
  width: 100%;
  height: 88px;
  margin-top: 64px;
}
.radio-youtube-container {
  @include absolute($top: 0, $left: 0, $right: 0);
  width: 1024px;
  margin: 0 auto;
}
.radio-youtube-list {
  @include flex();
  margin: 0 -16px;
  .video {
    position: relative;
    width: 320px;
    height: 180px;
    margin: 0 16px;
    margin-bottom: 32px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba($theme-red-shadow, 0.6);
    transition: 0.3s $ease-out;
    &:hover {
      transform: scale(1.04);
      .video-img {
        transform: scale(1.04);
      }
      .video-text-wrapfix {
        opacity: 1;
      }
    }
  }
  .video-link {
    display: block;
  }
  .video-img {
    display: block;
    width: 100%;
    transition: 0.3s $ease-out;
  }
  .video-text-wrapfix {
    @include absolute($top: 0, $bottom: 0, $left: 0);
    width: 100%;
    height: 100%;
    background: rgba($theme-crimson, 0.8);
    opacity: 0;
    transition: 0.5s $ease-out;
    pointer-events: none;
  }
  .video-text {
    @include absolute($top: 0, $bottom: 0, $left: 0);
    display: inline-block;
    width: 100%;
    height: min-content;
    margin: auto;
    padding: 8px 16px;
    @include font($color: $theme-light-gray);
  }
}

@media screen and (max-width: 1240px) {
  .radio-youtube {
    height: auto;
    margin-bottom: -120px;
  }
  .radio-youtube-container {
    position: initial;
    width: 100%;
  }
  .radio-youtube-list {
    flex-wrap: wrap;
    width: 100%;
    margin: 0;
  }
}
@media screen and (max-width: 1024px) {
  .radio-youtube {
    height: auto;
    min-height: 48px;
    margin-bottom: -120px;
  }
  .radio-youtube-container {
    position: initial;
    width: 100%;
  }
  .radio-youtube-list {
    flex-wrap: wrap;
    width: 100%;
  }
}
@media screen and (max-width: 860px) {
  .radio-text {
    .time {
      display: block;
      margin-bottom: 20px;
    }
    .youtube-link {
      margin: 0;
      .channel-balloon {
        top: -60px;
        right: -180px;
      }
    }
  }
}
@media screen and (max-width: 620px) {
  .radio-text {
    font-size: 18px;
    .time {
      margin-bottom: 120px;
      font-size: 24px;
    }
    .youtube-link {
      margin: 0;
      &:hover {
        .channel-balloon {
          transform: rotate(0deg);
        }
      }
      .channel-balloon {
        top: -104px;
        right: 0;
        left: 20px;
        width: 164px;
        margin: auto;
        transform: rotate(-6deg);
      }
    }
  }
  .radio-logo {
    .radio-logo-img {
      width: 100%;
      height: auto;
      padding: 0 20px;
    }
  }
  .radio-youtube-list {
    .video {
      width: 100%;
      height: auto;
    }
    .video-text-wrapfix {
      @include absolute($top: unset, $bottom: 0, $left: 0);
      background-color: transparent;
      opacity: 1;
    }
    .video-text {
      @include absolute($top: unset, $bottom: 0, $left: 0);
      font-size: 13px;
      background: rgba(darken($theme-crimson, 20%), 0.8);
    }
  }
}
</style>