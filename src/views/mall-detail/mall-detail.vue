<template>
  <div class="mall-list">
    <div v-title>{{ title }}</div>

    <!--商品banner-->
    <img class="mall-banner" src="http://a0.att.hudong.com/40/48/20300542914691142069489291014_s.jpg"/>

    <div class="mall-info">
      <div class="mall-name">矿泉水</div>
      <div class="mall-subname">优质矿泉水，还是要依云</div>
      <div class="mall-price">￥<span class="mall-price-big">200</span></div>
    </div>

    <div class="mall-info-detail">
      <div class="mall-subname">类目：矿泉水</div>
      <div class="mall-subname">规格：瓶</div>
      <div class="mall-subname">重量：0.25kg</div>
    </div>

    <router-link :to="{path: '/mall-settle'}">
      <div class="submit">去门店购买</div>
    </router-link>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui'
  export default {
    components: {
      Toast
    },
    data () {
      return {
        title: '商品详情',
        token: localStorage.getItem('token')
      }
    },
    watch: {},
    methods: {
    },
    created () {}
  }
</script>
<style lang="scss" scoped>
  .mall-list {
    min-height: calc(100vh - 15px);

    .mall-banner{
      width: 100%;
      display: inline-block;
      border-bottom: 0.5px solid #dedede;
    }
    .mall-info{
      padding: 15px 15px;
      background: #fff;
      margin-bottom: 15px;

      .mall-name{
        font-size: 16px;
        color: #333;
        margin-bottom: 8px;
      }
      .mall-subname{
        font-size: 12px;
        color: #333;
        margin-bottom: 8px;
      }
      .mall-price{
        color: red;
        font-size: 12px;

        .mall-price-big{
          font-size: 16px;
        }
      }
    }
    .mall-info-detail{
      padding: 15px 15px;
      background: #fff;
      margin-bottom: 15px;

      .mall-subname{
        font-size: 14px;
        color: #333;
        margin-bottom: 8px;
      }
    }
    .submit{
      position: fixed;
      bottom: 15px;
      left: 5%;
      width: 90%;
      height: 40px;
      background: #39B157;
      border-radius: 4px;
      text-align: center;
      line-height: 40px;
      color: #fff;
    }
  }
</style>
