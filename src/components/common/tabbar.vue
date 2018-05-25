<template>
  <div class="tabbar">

    <div class="tab-home" @click="goTo('/stadium-list')">
      <div class="tab-img">
        <img v-if="portableId != 1" src="../../img/icon/tabbar-icon-1.png"/>
        <img v-if="portableId === 1" src="../../img/icon/tabbar-icon-on-1.png"/>
      </div>
      <div :class="{ 'tabName' : true , 'purple' : portableId === 1}">预订</div>
    </div>

    <div class="tab-home" @click="goTo('/my-shihao')">
      <div class="tab-img">
        <img v-if="portableId != 2" src="../../img/icon/tabbar-icon-3.png"/>
        <img v-if="portableId === 2" src="../../img/icon/tabbar-icon-on-3.png"/>
      </div>
      <div :class="{ 'tabName' : true , 'purple' : portableId === 2}">我的</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'tabbar',
    components: {
    },
    data () {
      return {
      }
    },
    props: [
      'portableId'
    ],
    computed: {
    },
    methods: {
      goTo (path) {
        this.$router.push(path)
      }
    },
    created () {
    }
  }
</script>
<style lang="scss">
  .tabbar{
    position: fixed;
    bottom: 0px;
    width: 100%;
    background: #fff;
    height: 47px;
    border-top: 0.5px solid #dedede;
    z-index: 99;

    .tab-home{
      width: 50%;
      height: 39px;
      padding: 4px 0px;
      background: #fff;
      float: left;

      .tab-img{
        display: block;
        width: 23px;
        height: 23px;
        margin: 0px auto;
        padding-bottom: 5px;

        img{
          width: 23px;
        }
      }

      .tab-big-img{
        display: block;
        width: 70px;
        height: 39px;
        margin: 0px auto;

        img{
          width: 70px;
        }
      }
      .tabName{
        width: 100%;
        height: 11px;
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #C5C5CB;
        letter-spacing: 0;
        line-height: 11px;
      }
      .purple{
        color: #39B157;
      }
    }
  }
</style>
