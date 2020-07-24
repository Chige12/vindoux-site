<template lang="pug">
  section.introduction
    .introduction-wrapper
      img(src="~assets/svg/white_back.svg").back-svg
      .column-wrapper
        .column-chara
          img(src="~/assets/img/hiwa.png").chara.hiwa
        .text-wrapper.hiwa
          .column-name.hiwa 
            ruby 真朱<rp>(</rp><rt>まそほ</rt><rp>)</rp>ひわ
          .column-text.hiwa
            p Vin doux の紅色担当
            p 無茶振り好きの頼れるリーダー
            p 趣味は乙女ゲーム
    .introduction-wrapper
      img(src="~/assets/img/self_intro.png").self-intro-img
      .top-inner-shift
        img(src="~assets/svg/red_back.svg").back-svg
        .column-wrapper
          .text-wrapper.rara
            .column-text.rara
              p Vin doux の白色担当
              p 負けず嫌いな進行サポーター
              p 趣味はブロックと食べ歩き
            .column-name.rara
              ruby 清白<rp>(</rp><rt>すずは</rt><rp>)</rp>らら
          .column-chara
            img(src="~/assets/img/rara.png").chara.rara
</template>
<style lang="scss" scoped>
ruby > rt {
  font-size: 40%;
}
.introduction {
  position: relative;
  margin-top: 160px;
  &::before {
    @include absolute($top: -15px, $left: 0, $z: 1);
    width: 100%;
    height: 31px;
    background: repeat-x url('~assets/img/border.png');
    background-size: 81px 31px;
    content: '';
  }
}
.introduction-wrapper {
  position: relative;
}
.self-intro-img {
  @include absolute($top: -12%, $left: 0, $right: 0);
  width: 72px;
  margin: auto;
}
.top-inner-shift {
  margin-top: -110px;
}
.back-svg {
  display: block;
  width: 100%;
  height: 450px;
  object-fit: cover;
}
.column-wrapper {
  @include absolute($top: 0, $left: 0, $right: 0);
  @include flex($alignItems: flex-end);
  width: 100%;
  height: 100%;
}
.column-chara {
  position: relative;
  width: 40%;
  height: 100%;
  .chara {
    display: block;
    max-width: 356px;
    height: 100%;
    &.hiwa {
      @include absolute($top: 0, $right: 0)
      margin-left: auto;
    }
  }
}
.text-wrapper {
  @include flex;
  width: 60%;
  height: 100%;
}
.column-name {
  width: 33.3333333%;
  height: 100%;
  padding: 0 8px;
  text-align: center;
  &.hiwa {
    padding-top: 138px;
    @include font($size: 36px, $color: $theme-crimson);
  }
  &.rara {
    padding-top: 286px;
    @include font($size: 36px, $color: $theme-white);
  }
}
.column-text {
  width: 66.6666666%;
  height: 100%;
  p {
    margin: 8px 0;
  }
  &.hiwa {
    padding-top: 120px;
    padding-left: 8px;
    @include font($size: 18px, $color: $theme-crimson);
  }
  &.rara {
    padding-top: 250px;
    padding-right: 10px;
    text-align: right;
    @include font($size: 18px, $color: $theme-white);
    p {
      margin-left: auto;
    }
  }
}


@media screen and (max-width: 860px) {
  .introduction {
    &::before {
      top: -12px;
      height: 24px;
      background-size: 64px 24px;
    }
  }
  .column-text.hiwa, .column-text.rara {
    font-size: 16px;
  }
}
@media screen and (max-width: 640px) {
  .self-intro-img {
    top: -8%;
    width: 60px;
  }
  .column-chara {
    width: 50%;
    height: 80%;
  }
  .text-wrapper {
    display: block;
    width: 50%;
    padding-left: 0;
    &.hiwa {
      padding-top: 80px;
    }
    &.rara {
      padding-top: 200px;
    }
  }
  .column-name {
    width: 100%;
    height: auto;
    &.hiwa {
      padding: 0;
      text-align: left;
    }
    &.rara {
      margin-top: 16px;
      padding: 0;
      text-align: right;
    }
  }
  .column-text {
    width: 100%;
    height: auto;
    &.hiwa, &.rara {
      margin-top: 0;
      padding: 0;
    }
  }
}
@media screen and (max-width: 460px) {
  .column-text.hiwa, .column-text.rara {
    font-size: 14px;
  }
  .column-chara {
    width: 40%;
    height: 70%;
  }
}

</style>