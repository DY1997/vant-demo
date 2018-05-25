<template>
  <section class="pay-consequences-page">
    <div v-title>{{ title }}</div>
    <!--支付结果-->
    <div class="pay-result">
      <!--status:-2申请退款,-1:已退款，0:待支付（下单），1:已支付，-3已过期-->
      <i class="success"></i>
      <h3 class="result-text">订单支付成功</h3>
      <!--<p class="result-text">提货人: 王大刚</p>-->
    </div>
    <div class="order-info">
      <div class="info">
        <p class="order-num">订单编号: LM010294646274</p>
        <p class="order-num">生成时间: 2017-02-20 19:01:01</p>
        <p class="order-amount">订单金额: 300.0</p>
      </div>

    </div>
    <div class="order-info book-info" v-if="false">
      <div class="info">
        <p class="order-num clearfix">
          <span class="fl">提货人: 王大刚</span>
          <span class="fr">15802226301</span>
        </p>
        <p class="order-num">门店地址: 广州市海珠区新港中路397号TIT创意园创意东路01号</p>
      </div>
    </div>
    <!--取消按钮: can_refund是否能退款，1能，0不能-->
    <div class="cancel-btn-wrapper">
      <router-link to="/mall-detail">
        <div class="cancel-btn order-detail">查看订单详情</div>
      </router-link>
      <router-link to="">
        <div class="cancel-btn history-order">查看过往订单</div>
      </router-link>
    </div>
  </section>
</template>
<script>
  //  import { orderDetail, payMethod, balance } from '../../service'

  import { MessageBox } from 'mint-ui'

  export default {
    data () {
      return {
        title: '支付成功',
        token: localStorage.getItem('token'),
        orderId: this.$route.params.orderId
      }
    },
    watch: {},
    methods: {
      cancelOrder () {
        MessageBox.confirm('确定取消订单吗?').then(action => {
        })
      }
    },
    created () {}
  }
</script>
<style lang="scss" scoped>
  .pay-consequences-page {
    min-height: 100vh;
    background-color: #fff;
    padding-top: 53px;
    .pay-result {
      .success {
        display: block;
        margin: 0 auto 23px;
        width: 93px;
        height: 93px;
        background: url("./images/success.png") no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
      }
      .result-text {
        text-align: center;
        font-size: 20px;
        color: #000000;
      }
      .success-tips {
        margin-top: 15px;
        text-align: center;
        font-size: 14px;
        color: #888888;
      }
      .fail-tips {
        margin-top: 15px;
        text-align: center;
        font-size: 14px;
        color: #EC4D48;
      }
    }
    .order-info {
      padding: 10px 10px 0;
      margin-top: 15px;
      .info {
        border-top: 1px solid #D8D8D8;
        border-bottom: 1px solid #D8D8D8;
        padding: 10px 15px;
        p + p {
          margin-top: 8px;
        }
        .order-amount {
          /*font-weight: 700;*/
        }
      }

    }
    .book-info {
      padding-top: 0;
      margin-top: 0;
      .info {
        padding-bottom: 10px;
        border-bottom: 1px solid #D8D8D8;
      }

    }
    /*取消按钮*/
    .cancel-btn-wrapper {
      margin-top: 50px;
      .cancel-btn {
        width: 89%;
        height: 47px;
        line-height: 47px;
        margin: 15px auto;
        text-align: center;
        border: 1px solid rgba(5,5,5,0.08);
        border-radius: 5px;
        font-size: 18px;
        color: #FFFFFF;
      }
      .order-detail {
        background: transparent;
        color: #000;
      }
      .history-order {
        background: #39B157;
      }
    }
  }
</style>
