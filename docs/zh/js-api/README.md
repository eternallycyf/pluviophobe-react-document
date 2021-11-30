# JS-API

## 1.全屏显示
```js
var elem = document.documentElement;

/* 全屏查看 */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
/* 关闭全屏 */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}
```

## 2.geolocatio
```js
navigator.geolocation.getCurrentPosition(success, error, option)
function success(position) { console.log(position) }
/*
* position对象表示当前位置信息
* longitude 经度  latitude 纬度
* accuracy 经纬度的精度  altitude 海拔高度
* altitudeAccuracy 海拔高度的精度 heading设备行进方向 speed 速度
*/
```
## 3.FileReader && Blob
```js
let blob = 
 new Blob(['\ufeff',字符串],{type:'application/vnd.ms-excel'})
# 方法
方法名	              参数   	描述
abort	              none	  中断读取
readAsBinaryString	file	  将文件读取为二进制码
readAsDataURL	      file	  将文件读取为 DataURL
readAsText        	file    [encoding]	将文件读取为文本
# 事件
事件	       描述
onabort	    中断时触发
onerror	    出错时触发
onload	    文件读取成功完成时触发
onloadend	  读取完成触发，无论成功或失败
onloadstart	读取开始时触发
onprogress	读取中
# 数据
var fr = new FileReader();
fr.onloadend = function(e){
  console.log(e.target.result)
}
fr.readAsDataURL(e.target.file[0]);
# 限制类型 通过 dom.files[0].type 利用正则判断
if(!/image\/\w+/.test(file.type)){
  fileReader.readAsDataURL(e.terget.file[0]);
    return false;
}
```

## 4.Notification
```js
# 查看权限
Notification.permission
"denied" "default" 'granted'
# 获取权限
Notification.requestPermission()
  .then( permission => console.log(permission) )
# 发送普通通知
new Notification('主标题',{body:"内容"} )
# 缓存的通知
self.registration.showNotification('hi')
```

## 5. 复制代码
```js
navigator.clipboard.writeText(复制内容)
IE11以下
window.clipboardData.setData("Text",复制内容)}
```

## 6. 下载 上传表格
```js
<body>
  <h1>下载表格</h1>
  <button onclick="download()">下载</button>
  <h1>上传表格</h1>
  <input type="file" id="file" onchange="upload()">

  <script>
  // 下载 base64/js格式内容转 指定格式文件
  function download() {
  let tableData = '表格数据'
  let downloadLink = document.createElement("a");
  var blob = new Blob(['\ufeff', tableData], { type: 'application/vnd.ms-excel' });
  downloadLink.href = URL.createObjectURL(blob)
  downloadLink.download = '1.xls'
  downloadLink.click()
  URL.revokeObjectURL(downloadLink.href)
    }
  // 上传 内容转base64
  function upload() {
  let fileDom = document.getElementById('file')
  let files = fileDom.files[0]
  let reader = new FileReader()
  reader.onload = function (e) {
  console.log(e.target.result);
      }
  reader.readAsText(files);
    }
  </script>
</body>
```