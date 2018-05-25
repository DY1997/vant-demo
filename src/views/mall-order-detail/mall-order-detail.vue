<template>
  <div class="mall-detail">
    <div v-title>{{ title }}</div>

    <div class="order-detail">
      <h3 class="status-text">待支付</h3>
      <p class="status-subtitle">提交时间：</p>
    </div>

    <div class="order-info">
      <ul class="order-info-list">
        <li class="info-item info-second-li">
          <div class="info-wrapper clearfix">
            <span class="info-name fl">订单编号</span>
            <span class="info-des fr">LMH51515616515161</span>
          </div>
        </li>
        <li class="info-item info-second-li">
          <div class="info-wrapper clearfix">
            <span class="info-name fl">生成时间</span>
            <span class="info-des fr">2017-16-16 00:00:00</span>
          </div>
        </li>
        <li class="info-item info-second-li">
          <div class="info-wrapper clearfix">
            <span class="info-name fl">提货时间</span>
            <span class="info-des fr">2017-16-16 00:00:00</span>
          </div>
        </li>
        <li class="info-item info-second-li">
          <div class="info-wrapper clearfix">
            <span class="info-name fl">提货人</span>
            <span class="info-des fr">张三</span>
          </div>
        </li>
        <li class="info-item info-second-li">
          <div class="info-wrapper clearfix">
            <span class="info-name fl">提货人联系电话</span>
            <span class="info-des fr">15631516156</span>
          </div>
        </li>
        <li class="info-item info-second-li">
          <div class="info-wrapper clearfix">
            <span class="info-name fl">门店地址</span>
            <span class="info-des fr">广东省广州市天河区万菱汇B区2105</span>
          </div>
        </li>
      </ul>
    </div>

    <!--订购商品-->
    <div class="field-discount">
      <!--标题-->
      <!--<h3 class="title">订购商品</h3>-->
      <!--选择自提门店-->
      <div class="choose-coupon clearfix" style="height: auto;">
        <div class="mall-commodity">
          <img class="mall-img" src="./images/gym-img.png" >
          <div class="mall-name">求的叫你奥迪那谁都</div>
          <div class="mall-price">
            <span class="price">￥199</span>
            <span class="quantity">x2</span>
          </div>
        </div>
      </div>
    </div>

    <!--价格显示-->
    <div class="price-box">
      <div class="price-bar">
        <div class="price-site">商品总额：<span class="theme-black">398.00</span></div>
        <div class="price-site">优惠金额：<span class="theme-black">-9898.00</span></div>
        <div class="price-site">支付金额：<span class="theme-black">310.00</span></div>
      </div>
    </div>

    <div class="submit-order">提交订单</div>

  </div>
</template>
<script>
  import { Toast } from 'mint-ui'

  export default {
    name: 'mall-detail',
    components: {
      Toast
    },
    data () {
      return {
        title: '订单详情',
        token: localStorage.getItem('token')
      }
    },
    mounted () {
    },
    created () {
    },
    methods: {
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scosped>
  .mall-detail {
    min-height: 100vh;
    padding-bottom: 45px;

    .order-detail {
      width: 100%;
      height: 86px;
      padding: 15px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      color: #FFFFFF;
      background: #39B157;
      .status-text {
        font-family: PingFangSC-Medium;
        font-size: 18px;
      }
      .status-subtitle {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        margin-top: 8px;
      }
    }

    .order-info {
      background: #FFFFFF;
      box-shadow: 0 0 0 0 #D8D8D8, 0 0 0 0 #D8D8D8;
      border-top: .5px solid #D8D8D8;
      border-bottom: .5px solid #D8D8D8;
      .order-info-list {
        padding: 5px 0px;
        .info-item {
          background-color: #fff;
          padding: 0px 15px;
          /*height: 60px;*/
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          .info-wrapper {
            /*height: 60px;*/
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            padding: 8px 0px;
            border-bottom: .5px solid #D8D8D8;
          }
          .info-name {
            font-family: PingFangSC-Regular;
            font-size: 15px;
            /*line-height: 30px;*/
            color: #888888;
          }
          .info-des {
            max-width: 70%;
            font-family: PingFangSC-Regular;
            font-size: 24px;
            color: #000000;
            text-align: right;
            .field-type {
              display: inline-block;
              width: 50px;
              height: 20px;
              text-align: center;
              line-height: 20px;
              border: 1px solid #EC4D48;
              border-radius: 2px;
              font-size: 13px;
              color: #EC4D48;
              margin-right: 10px;
            }
          }
        }
        .first-li-name {
          line-height: 30px;
        }
        .info-second-li {
          .info-wrapper {
            border-bottom: none;
            .info-name {
              /*line-height: 30px;*/
            }
            .info-des {
              /*line-height: 30px;*/
              font-family: PingFangSC-Regular;
              font-size: 15px;
              color: #888888;
            }
          }

        }
      }
    }

    .field-discount {
      margin-top: 10px;
      >.title {
        width: 100%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 14px;
        color: #999999;
        margin-bottom: 10px;
        padding-left: 15px;
        padding-right: 15px;
      }
      .choose-coupon {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding-left: 15px;
        padding-right: 15px;
        width: 100%;
        height: 44px;
        border-top: .5px solid #D8D8D8;
        border-bottom: .5px solid #D8D8D8;
        line-height: 42px;
        background-color: #fff;
        .coupon-part {
          max-width: 80%;

          .coupon-text {
            font-size: 17px;
            color: #888888;
          }
          .coupon-arrow {
            display: inline-block;
            font-size: 0px;
            width: 8px;
            height: 13px;
            background: url("./images/coupon-arrow.png") no-repeat;
            -webkit-background-size: cover;
            background-size: cover;
            margin-left: 15px;
            margin-top: 5px;
          }
        }

        .info-input{
          width: 100%;
          padding: 0px;
          font-size: 17px;
          color: #888888;
        }

        .mall-commodity{
          width: 100%;
          height: 80px;
          padding: 10px 0px 0px 0px;

          .mall-img{
            display: inline-block;
            width: 80px;
            height: 80px;
            float: left;
            margin-right: 5px;
          }
          .mall-name{
            width: 50%;
            height: 40px;
            color: #333;
            font-size: 14px;
            line-height: 20px;
            display: -webkit-box;
            -webkit-line-clamp: 2;   // 显示的行数
            -webkit-box-orient: vertical;
            overflow: hidden;
            float: left;
            margin-right: 5px;
          }
          .mall-price{
            display: inline-block;
            width: 18%;
            height: 60px;
            float: right;
            text-align: right;
            .price{
              display: block;
              width: 100%;
              height: 20px;
              color: #ef5153;
              font-size: 14px;
              line-height: 20px;
            }
            .quantity{
              display: inline-block;
              width: 100%;
              color: #333;
              font-size: 14px;
              line-height: 20px;
            }
          }
        }
        .mall-commodity:last-child{
          padding-bottom: 10px;
        }

      }
      .bornone{
        border-top: none;
      }
    }

    .price-box{
      width: 100%;
      height: 80px;
      font-size: 14px;
      color: #7c7c7c;
      padding: 10px 0px;
      background: #fff;
      margin-top: 10px;

      .price-bar{
        width: 140px;
        height: 80px;
        margin-right: 20px;
        float: right;

        .price-site{
          margin-bottom: 10px;
        }

        .theme-black{
          color: #333;
        }
      }
    }

    .submit-order{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: #39B157;
    }

  }
</style>
