<template>
  <div class="mall-settle">
    <div v-title>{{ title }}</div>

    <!--自提门店-->
    <div class="field-discount">
      <!--标题-->
      <h3 class="title">自提门店</h3>
      <!--选择自提门店-->
      <div class="choose-coupon clearfix">
        <div class="coupon-part fl" style="width: 100%;box-sizing: border-box;max-width: 100%;">
          <span class="coupon-text">{{'请选择自提门店'}}</span>
          <span class="coupon-arrow fr" style="display: inline-block;margin-top: 13px;"></span>
        </div>
      </div>
    </div>

    <!--收货人信息-->
    <div class="field-discount">
      <!--标题-->
      <h3 class="title">收货人信息</h3>
      <!--选择自提门店-->
      <div class="choose-coupon clearfix">
        <input v-model="name" class="info-input" maxlength="20" placeholder="请输入收货人姓名"/>
      </div>
      <div class="choose-coupon bornone clearfix">
        <input
          type="tel"
          maxlength="11"
          @focus="focusTel"
          @blur="blurTel"
          @input="inputTel"
          v-model="phoneNum"
          class="info-input"
          placeholder="请输入收货人联系方式"/>
      </div>
    </div>

    <!--订购商品-->
    <div class="field-discount">
      <!--标题-->
      <h3 class="title">订购商品</h3>
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

    <!--优惠券-->
    <div class="field-discount">
      <!--标题-->
      <h3 class="title">优惠券</h3>
      <!--选择自提门店-->
      <div class="choose-coupon clearfix">
        <div class="coupon-part fl" style="width: 100%;box-sizing: border-box;max-width: 100%;">
          <span class="coupon-text">{{'请选择优惠券'}}</span>
          <span class="coupon-arrow fr" style="display: inline-block;margin-top: 13px;"></span>
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
  import { checkPhone } from '@/config/utils'
  import { Toast } from 'mint-ui'

  export default {
    name: 'mall-settle',
    components: {
      Toast
    },
    data () {
      return {
        title: '订单结算',
        token: localStorage.getItem('token'),
        name: '',
        phoneNum: '',
        phoneStatus: false
      }
    },
    mounted () {
    },
    created () {
    },
    methods: {
      inputTel () {
        if (!this.phoneNum) {
          this.phoneStatus = false
          return
        }

        if (this.phoneNum.length < 11) {
          this.phoneStatus = false
          return
        }

        if (this.phoneNum.length > 11) {
          this.phoneStatus = false
          return
        }

        if (!checkPhone(this.phoneNum)) {
          this.phoneStatus = false
          Toast('请输入正确的手机号码')
          return
        } else {
          this.phoneStatus = true
        }
      },
      blurTel () {
        if (!this.phoneNum) {
          this.phoneStatus = false
          return
        }

        if (this.phoneNum.length < 11) {
          this.phoneStatus = false
          return
        }

        if (this.phoneNum.length > 11) {
          this.phoneStatus = false
          return
        }

        if (!checkPhone(this.phoneNum)) {
          this.phoneStatus = false
          Toast('请输入正确的手机号码')
          return
        } else {
          this.phoneStatus = true
        }
      },
      focusTel () {
        if (!this.phoneNum) {
          this.phoneStatus = false
          return
        }

        if (this.phoneNum.length < 11) {
          this.phoneStatus = false
          return
        }

        if (this.phoneNum.length > 11) {
          this.phoneStatus = false
          return
        }

        if (!checkPhone(this.phoneNum)) {
          this.phoneStatus = false
          Toast('请输入正确的手机号码')
          return
        } else {
          this.phoneStatus = true
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scosped>
  .mall-settle {
    min-height: 100vh;
    padding-bottom: 40px;

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
