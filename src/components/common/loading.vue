<!-- 使用方法
  <loading v-show="showLoading" loadingText="预约中..."></loading>

  步骤：
  1、showLoading = true
  2、数据请求回来之后，设置showLoading = false
  3、数据请求失败，也要隐藏加载状态，显示网络错误
-->

<template>
  <div class="loading-box">
    <div class="loading_container">
      <img class="load_img" src="../../img/icon/loading.png" />
      <svg class="load_ellipse" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <ellipse cx="13" cy="3" rx="13" ry="3" style="fill: #E1E3E5;stroke:none;"></ellipse>
      </svg>
      <p>{{ showLoadingText }}</p>
    </div>
  </div>
</template>

<!-- html样式用默认的方式 -->
<style>
  html {
    font-size: initial;
  }
</style>

<script>
  export default {
    props: ['loadingText'],
    data () {
      return {
        showLoadingText: this.loadingText || '正在加载中...',
        lastTime: true
      }
    },
    created () {
      // 最迟3秒隐藏加载状态，避免出现一直加载的情况
      // 1、这样统一处理了一些交互的接口失败返回情况
//      setTimeout(() => {
//        this.lastTime = false
//      }, 1000)
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../styles/public.scss';

  .loading-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 10;
    .loading_container {
      position: fixed;
      top: 50%;
      margin-top: -37.5px;
      left: 50%;
      transform: translate(-50%, -50%);

      .load_img {
        width: 90px;
        animation: load 2s linear infinite;
        position: relative;
        z-index: 11;
      }
      .load_ellipse {
        display: block;
        width: 33px;
        height: 6px;
        padding-left: 7.5px;
        margin: 0 auto 15px;
        animation: ellipse .6s infinite ease-in-out;
      }
      p {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #7C7C7C;
        text-align: center;
      }
      @keyframes load {

        from {-webkit-transform: rotate(0deg);}
        to {-webkit-transform: rotate(360deg);}
      }
      @keyframes ellipse {
        /*transform: scale(0.3);*/
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(0.3);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
</style>
