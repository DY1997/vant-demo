<template>
  <mt-swipe :auto=duration :showIndicators=showIndicators>
    <mt-swipe-item v-for="(swiperItem, index) in swiperArr" :key="index">
      <a v-if="swiperItem.link" v-bind:href="swiperItem.link">
        <img v-bind:src="swiperItem.img" v-bind:alt="index + 1">
      </a>
      <img v-else v-bind:src="swiperItem.img" v-bind:alt="index + 1">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui'

  export default {
    name: 'swiper',
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem
    },
    data () {
      return {
        title: ''
      }
    },
    props: [
      'duration',
      'swiperArr' // 总管理平台上传的banner图数组
    ],
    created: function () {
    },
    computed: {
      // 计算banner图是否显示分页器：多于一张图片显示，只有一张则不显示
      showIndicators: function () {
        return (this.swiperArr.length > 1)
      }
    }
  }
</script>

<style>
  .mint-swipe-indicators {
    left: initial;
    right: 50%;
    transform: translate(50%, 0);
  }
  .mint-swipe-indicators .is-active {
    background-color: #fff;
  }
  .mint-swipe-indicator {
    background-color: transparent;
    border:1px solid #fff;
    opacity: 1;
  }

</style>

<style lang="scss" scoped>
  @import "../../styles/config";

  .mint-swipe {
    height: 150px;
    color: $white;
    text-align: center;
  }
  .mint-swipe-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
  }
  @media (max-width: 320px) {
    .mint-swipe {
      height: 136px;
    }
    .mint-swipe-item {
      line-height: 136px;
    }
  }

</style>
