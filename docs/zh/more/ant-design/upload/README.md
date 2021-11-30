# Upload 上传

## 1. 组件上传逻辑
```js
1.做一个漂亮的 上传 按钮
2.模拟点击事件
3.change 事件 input type=file 元素的 files[0] 属性
4.生成内存地址 URL.creareObjectURL(files[0])  让img.src = xxx
5.上传图片
  A => 二进制形式 以multpart/form-data
  B => 转换成 Base64位字符串 传给服务器
```

## 2.与Form结合 注意事项
```js
// 注意需要给 Form.Item 配置 valuePropName 和 getValueFromEvent
const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
};
<Form.Item
    label="选择文件"
    name="uploadFile"
    rules={[
              {
                required: true,
                message: '请上传 .xls, .xlsx 格式的文件',
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
          <Button icon={<UploadOutlined />}>选择文件</Button>
    </Upload>
</Form.Item>
```

## 3.upload props
```js
# upload
import { Upload } from 'antd';
<Upload
## 基础属性
// 上传的地址 
// 如果不写的话 线上环境会默认请求这个地址 需要后端对一个指定的 接口 返回一个空字符串
  action = "htttp://xxx" 
// 设置请求头
  headers={{ authorization: 'xxx' }}
// 限制上传数量
   maxCount={1} 
// 支持多选
  multiple
// 限制文件类型
  accept='.xls, .xlsx'
// 关闭文件信息显示
  showUploadList= { false }
// 上传一个文件内所有文件
  directory
// 进度条 和 显示风格
  listType='text | picture | picture-card'
// 自定义 最右侧交互图标
  showUploadList = {
    showDownloadIcon: true,
    downloadIcon: 'download ',
    showRemoveIcon: true,
    removeIcon: <自定义Icon onClick={e =>  />
  }
// 自定义进度条样式 
  progress:{
    strokeColor: {
      '0%': '#108ee9',
      '100%': '#87d068',
    },
    strokeWidth: 3,
    format: percent => 
       `${parseFloat(percent.toFixed(2))}%`,
  }
// 默认已经上传的文件列表
  defaultFileList:[
    {
      uid:"1",
      name:"",
      status:"done",
      response:"Server Error 500",
      url:"xxx"
    }
  ]
  
## 事件
// 改变事件
- onChange={(info)=>
       info.file.status == 'uploading |done|error'}
// beforeUpload 限制图片大小和格式 或者 加水印
// 这里 return false 就不显示进度条
// 需要在这里 return false 不然公网上会报405
- beforeUpload(file){
     file.type == "images/jpeg"
     file.size / 1024 / 1024 < 2 
     return file.type === 'image/png' ? true 
         : Upload.LIST_IGNORE; }
//  预览事件
  onPreview={(file)=>{}}
//  移除文件的回调
  onRemove(file)
// 文件拖拽进上传区域的回调
  onDrop
// 下载文件的回调
  onDownload
/>
```

## 4.拖拽上传与排序
```js
# 拖拽上传
const { Dragger } = Upload;
<Dragger 
  onDrop(e)=>{}
/>
# 上传列表拖拽排序
react-dnd 
```

## 5.上传前裁切图片
```js
# 上传前裁切图片
yarn add antd-img-crop
import 'antd/es/modal/style';
import 'antd/es/slider/style';
import ImgCrop from 'antd-img-crop';
 <ImgCrop
   // 添加 旋转 网格 功能 
   rotate
   grid
   // 裁切形状 图片质量
   shape='rect | round'
   quality={0-1}
   // 弹窗标题 弹窗宽度 弹窗确定文字 弹窗取消文字
   modalTitle='编辑图片'
   modalWidth={520}
   modalOk='确定'
   modalCancel='取消'
   // 点击确定 取消的 事件
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

## 6.图片加水印
```js
# 图片加水印
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
  label="选择文件"
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