<template>
  <section class="user_geolocation">
    <div id="pos-area">
      <!--<p id="demo">点击下面的按钮，获得对应信息：<br /></p>-->
    </div>
    <div id="btn-area">
      <!--<button @click="geolocation.getLocation(showPosition, null, options)">获取精确定位信息</button>-->
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      geolocation: new window.qq.maps.Geolocation('FVCBZ-IV3KO-5JPWW-S5D2V-ML2B6-NPFDW', 'myapp'),
//      positionNum: 0,
      options: {timeout: 8000},
      lat: '',
      lng: '',
      locationinfo: ''
    }
  },
  methods: {
    showPosition (position) {
//      document.getElementById('demo').innerHTML = JSON.stringify(position, null, 4)
      this.locationinfo = JSON.stringify(position, null, 4)
      this.locationinfo = JSON.parse(this.locationinfo)
      this.lat = this.locationinfo.lat
      this.lng = this.locationinfo.lng
//      document.getElementById('pos-area').scrollTop = document.getElementById('pos-area').scrollHeight
      let storelocation = {'lattitude': this.lat, 'longitude': this.lng}
      sessionStorage.setItem('userLocation', JSON.stringify(storelocation))
    }
//    showErr (positionNum) {
//      positionNum + 1
//      document.getElementById('demo').innerHTML += '序号：' + positionNum
//      document.getElementById('demo').appendChild(document.createElement('p')).innerHTML = '定位失败！'
//      document.getElementById('pos-area').scrollTop = document.getElementById('pos-area').scrollHeight
//    }
  },
  created () {
    this.geolocation.getLocation(this.showPosition, null, this.options)
  }
}
</script>
<style>
  #pos-area {
    background-color: #009DDC;
    margin-bottom: 10px;
    width: 100%;
    overflow: scroll;
    text-align: left;
    color: white;
  }
  #demo {
    padding: 8px;
    font-size: small;
  }
  #btn-area {
    height: 100px;
  }
  /*button {*/
    /*margin-bottom: 10px;*/
    /*padding: 12px 8px;*/
    /*width: 42%;*/
    /*border-radius: 8px;*/
    /*background-color: #009DDC;*/
    /*color: white;*/
  /*}*/
</style>
