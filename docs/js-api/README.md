# JS-API

## 1.Full screen display
```js
var elem = document.documentElement;

/* Full screen view */
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
/* Close full screen */
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
* position: Object represents the current location information
* longitude: longitude  latitude: latitude
* accuracy: Accuracy of longitude and latitude  altitude: Altitude
* altitudeAccuracy: Accuracy of altitude heading: Equipment travel direction speed: speed
*/
```
## 3.FileReader && Blob
```js
let blob = 
 new Blob(['\ufeff',character string],{type:'application/vnd.ms-excel'})
# method
Method name	        parameter   	describe
abort	              none	        Interrupt read
readAsBinaryString	file	        Read file as binary code
readAsDataURL	      file	        Read file as DataURL
readAsText        	file          [encoding]	Read file as text
# event
event	       describe
onabort	    Trigger on interrupt
onerror	    Triggered on error
onload	    Triggered when the file read completes successfully
onloadend	  Read completion trigger, whether successful or failed
onloadstart	Triggered when reading starts
onprogress	Reading
# data
var fr = new FileReader();
fr.onloadend = function(e){
  console.log(e.target.result)
}
fr.readAsDataURL(e.target.file[0]);
# Restriction type adopt dom.files[0].type Using regular judgment
if(!/image\/\w+/.test(file.type)){
  fileReader.readAsDataURL(e.terget.file[0]);
    return false;
}
```

## 4.Notification
```js
# View permissions
Notification.permission
"denied" "default" 'granted'
# Get permission
Notification.requestPermission()
  .then( permission => console.log(permission) )
# Send general notification
new Notification('Main title',{body:"content"} )
# Cached notifications
self.registration.showNotification('hi')
```

## 5. Copy code
```js
navigator.clipboard.writeText(Copy content)
IE11following
window.clipboardData.setData("Text",Copy content)}
```

## 6. Download upload form
```js
<body>
  <h1>Download form</h1>
  <button onclick="download()">下载</button>
  <h1>Upload form</h1>
  <input type="file" id="file" onchange="upload()">

  <script>
  // Download Base64 / JS format content and transfer it to the specified format file
  function download() {
  let tableData = 'Tabular data'
  let downloadLink = document.createElement("a");
  var blob = new Blob(['\ufeff', tableData], { type: 'application/vnd.ms-excel' });
  downloadLink.href = URL.createObjectURL(blob)
  downloadLink.download = '1.xls'
  downloadLink.click()
  URL.revokeObjectURL(downloadLink.href)
    }
  // Upload content to Base64
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