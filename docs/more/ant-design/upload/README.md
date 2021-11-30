# Upload 

## 1. Component upload logic
```js
1.Make a beautiful upload button
2.Simulate click event
3.change event input type=file element files[0] props
4.Generate memory address URL.creareObjectURL(files[0])  let img.src = xxx
5.Upload pictures
  A => Binary form by multpart/form-data
  B => Convert to Base64 bit string and pass it to the server
```

## 2.Precautions for combining with form
```js
// Note that valuepropname and getvaluefromevent need to be configured for form.item
const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
};
<Form.Item
    label="choose file"
    name="uploadFile"
    rules={[
              {
                required: true,
                message: 'Please upload files in. XLS,. Xlsx format',
              },
          ]}
    valuePropName="fileList"
    getValueFromEvent={normFile}
>
    <Upload
        beforeUpload={(file) => {
            return false;
        }}
        name={'file'}
        listType={'text'}
        accept=".xls, .xlsx"
        maxCount={1}
    >
          <Button icon={<UploadOutlined />}>choose file</Button>
    </Upload>
</Form.Item>
```

## 3.upload props
```js
# upload
import { Upload } from 'antd';
<Upload
## base props
// upload address
// If it is not written, the online environment will request this address by default, and the back-end needs to return an empty string to a specified interface
  action = "htttp://xxx" 
// Set request header
  headers={{ authorization: 'xxx' }}
// Limit the number of uploads
   maxCount={1} 
// Multiple selections are supported
  multiple
// Limit file types
  accept='.xls, .xlsx'
// Turn off file information display
  showUploadList= { false }
// Upload all files in one file
  directory
// Progress bar and display style
  listType='text | picture | picture-card'
// Customize the right most interactive Icon
  showUploadList = {
    showDownloadIcon: true,
    downloadIcon: 'download ',
    showRemoveIcon: true,
    removeIcon: <customIcon onClick={e =>  />
  }
// Customize progress bar styles
  progress:{
    strokeColor: {
      '0%': '#108ee9',
      '100%': '#87d068',
    },
    strokeWidth: 3,
    format: percent => 
       `${parseFloat(percent.toFixed(2))}%`,
  }
// Default uploaded file list
  defaultFileList:[
    {
      uid:"1",
      name:"",
      status:"done",
      response:"Server Error 500",
      url:"xxx"
    }
  ]
  
## event
// Change event
- onChange={(info)=>
       info.file.status == 'uploading |done|error'}
// beforeUpload Limit the size and format of the picture or add watermark
// here return false The progress bar is not displayed
// Need to be here return false Otherwise, 405 will be reported on the public network
- beforeUpload(file){
     file.type == "images/jpeg"
     file.size / 1024 / 1024 < 2 
     return file.type === 'image/png' ? true 
         : Upload.LIST_IGNORE; }
//  Preview event
  onPreview={(file)=>{}}
//  Remove callback for file
  onRemove(file)
// Callback for dragging files into the upload area
  onDrop
// Callback for downloading files
  onDownload
/>
```

## 4.Drag upload and sor
```js
# Drag upload
const { Dragger } = Upload;
<Dragger 
  onDrop(e)=>{}
/>
# Upload list drag sort
react-dnd 
```

## 5.Cutting pictures before uploading
```js
# Cutting pictures before uploading
yarn add antd-img-crop
import 'antd/es/modal/style';
import 'antd/es/slider/style';
import ImgCrop from 'antd-img-crop';
 <ImgCrop
   // Add rotate mesh function
   rotate
   grid
   // Crop shape picture quality
   shape='rect | round'
   quality={0-1}
   // Pop up Title pop up width pop up determine text pop up cancel text
   modalTitle='Edit picture'
   modalWidth={520}
   modalOk='determine'
   modalCancel='cancel'
  //Click OK to cancel the event
   onModalOK
   onModalCancel
 >
   <Upload>+ Add image</Upload>
 </ImgCrop>

const onPreview = async file => {
  let src = file.url;
  if (!src) {
    src = await new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () =>          
           resolve(reader.result);
      });
   }
   const image = new Image();
   image.src = src;
   const imgWindow = window.open(src);
   imgWindow.document.write(image.outerHTML);
};
```

## 6.Image watermarking
```js
#Image watermarking
beforupload(file)=>{ 
 return new Promise(resolve)=>{
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload=()=>{
        const img = document.createElement('img');
        img.src = reader.result;
        img.onload=()=>{
          const canvas =   
              document.createElement('canvas');
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          ctx.fillStyle = 'red';
          ctx.textBaseline = 'middle';
          ctx.font = '33px Arial';
          ctx.fillText('Ant Design', 20, 20);
          canvas.toBlob(resolve);
        }
    }
  }
}
```
## 7.excel demo 
### component
```js
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

<Form.Item
  valuePropName="fileList"
  label="Select file"
  name="uploadFile"
  required
  getValueFromEvent={normFile}
>
  <Upload
    // name={'file'}
    listType='text'
    action="/dpm/customerProblemImport/importExcel"
    accept=".xls, .xlsx"
    maxCount={1}
    beforeUpload={(file) => {
      return true;
    }}
    showUploadList={{
      showRemoveIcon: true,
      removeIcon: (
        <CloseOutlined
          onClick={(e) => console.log(e, 'custom removeIcon event')}
        />
      ),
    }}
    progress={{
      strokeColor: {
        '0%': '#229DED',
        '100%': '#229DED',
      },
      strokeWidth: 2,
      format: (percent) =>
        `${parseFloat(percent.toFixed(0))}%`,
    }}
    onChange={(info) => {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(
          `${info.file.name} file uploaded successfully`,
        );
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    }}
  />
</Form.Item>
#
form.validateFields().then(() => {
  const formData = new FormData()

  formData.append('file', file[0].originFileObj);

  dispatch({
    type: 'total/multiSheetUpload',
    payload: formData,
  });
```
### style
```css

.ant-progress-inner {
  margin-top: 20px;
  width: 235px;
}

.ant-progress-text {
  display: none !important;
}

.ant-upload-list-item-info {
  width: 270px;

  .ant-upload-list-item-card-actions-btn.ant-btn-sm {
    height: 28px !important;
    line-height: 28px !important;
  }
}

.ant-popover-inner {
  width: 200px;
}

.ant-upload-list-item .anticon-close:hover {
  color: rgba(0, 0, 0, 0.45);
}

.ant-upload-list-item-info::before {
  background-color: #fff;
}

.ant-upload-list-item:hover .ant-upload-list-item-info {
  background: #fff;
}

.ant-btn-text:hover,
.ant-btn-text:focus {
  background-color: #fff;
}

```