<!-- 网页空态模板，实例：
  <empty-state v-else :emptyId="3"></empty-state>
  import emptyState from '../../components/common/emptyState'
-->

<template>
  <div :class="{'empty-addr': true }">
    <!-- {{ emptyId }} -->
    <div v-for="item in emptyState" v-if="item.pageId == emptyId">

      <img class="img-page" v-if="item.pageId == 1" src="../../img/icon/empty.png" alt="">
      <!--<img class="img-page" v-if="item.pageId == 2" src="../../img/icon/loading.png" alt="">-->
      <!--<img class="img-page" v-if="item.pageId == 3" src="../../img/icon/network.png" alt="">-->
      <!--<img class="img-page" v-if="item.pageId == 4" src="../../img/icon/load_fail.png" alt="">-->

      <!--<img class="img-page" v-if="emptyId == 1" src="../../img/icon/empty.png" alt="">-->
      <!--<img class="img-page" v-if="emptyId == 2" src="../../img/icon/loading.png" alt="">-->
      <!--<img class="img-page" v-if="emptyId == 3" src="../../img/icon/network.png" alt="">-->
      <!--<img class="img-page" v-if="emptyId == 4" src="../../img/icon/load_fail.png" alt="">-->
      <!--<p>{{ item.pText }}</p>-->

      <!--<router-link v-if="item.pageId == 1" :class="{ 'empty-add-addr': true, 'service-address': item.pageId == 1}" :to="item.routerLinkUrl">{{ item.routerLinkText }}</router-link>-->

      <div v-if="item.pageId == 3" @click="reload" class="empty-add-addr">重新加载</div>
      <!--当前页面没有内容，返回按钮-->
      <div v-if="item.pageId == 1 && (showbackBtn === 0)" @click="backtolastpage" class="empty-add-addr">返回</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['emptyId', 'showbackBtn' || 0],
    data () {
      return {
        emptyIdData: '',
        emptyState: [{
          pageId: '1', // 当前没有内容
          pText: '当前页面没有内容',
          routerLinkUrl: '',
          routerLinkText: ''
        }, {
          pageId: '2', // 加载中
          pText: '正在加载中...',
          routerLinkUrl: '',
          routerLinkText: ''
        }, {
          pageId: '3', // 网络错误
          pText: '网络不稳定',
          routerLinkUrl: '',
          routerLinkText: '请点击屏幕刷新重试'
        }, {
          pageId: '4', // 加载失败
          pText: '加载失败',
          routerLinkUrl: '',
          routerLinkText: ''
        }
//        {
//          pageId: '5', // notice 页面
//          pText: '无数据',
//          routerLinkUrl: '/personal-center',
//          routerLinkText: '返回个人中心'
//        }, {
//          pageId: '6', // 爱心项目历史列表，空态
//          pText: '无数据',
//          routerLinkUrl: '',
//          routerLinkText: ''
//        }, {
//          pageId: '7', // 捐分明细，项目进展，空态
//          pText: '未更新',
//          routerLinkUrl: '',
//          routerLinkText: ''
//        }
        ]
      }
    },
    mounted () {
      // console.log('emptyId', this.emptyId)
      this.emptyIdData = this.emptyId
//      console.log(this.emptyId)
    },
    methods: {
      reload () {
        location.reload()
      },
      backtolastpage () {
        history.go(-1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .empty-addr {
    position: fixed;
    background-color: #fff;
    /*padding-bottom: 30px;*/
    /*min-height: 736px;*/
    width: 100%;
    height: 100%;
    img {
      display: block;
      width: 25%;
      margin: 0 auto;
    }
    .img-page {
      padding-top: 100px;
    }
    p {
      color: #9E9EA8;
      font-size: 16px;
      line-height: 1;
      margin: 30px auto;
      text-align: center;
    }
    .empty-add-addr {
      width: 120px;
      text-align: center;
      display: block;
      /*padding: 10px;*/
      line-height: 35px;
      height: 35px;
      color: #fff;
      margin: 0 auto;
      /*border: 1px solid #ffb717;*/
      border-radius: 4px;
      box-sizing: border-box;
      background-image: linear-gradient(45deg, #7169FF 0%, #67A3FF 100%);
    }
    .service-address {
      width: 131.22px;
    }
  }
  .empty-page {
    // height: 100vh;
  }
</style>
