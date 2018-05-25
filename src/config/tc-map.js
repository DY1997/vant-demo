/**
 * 腾讯地图异步加载 JavaScript API
 * @return {Promise}
 */
export default function (key) {
  let myKey = key || ''
  return new Promise(function (resolve, reject) {
    if (window.qq) {
      resolve(window.qq)
    } else {
      window.initTcMap = function () {
        resolve(window.qq)
      }
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'http://map.qq.com/api/js?v=2.exp&callback=initTcMap&key=' + myKey
      script.onerror = reject
      document.head.appendChild(script)
    }
  })
}
