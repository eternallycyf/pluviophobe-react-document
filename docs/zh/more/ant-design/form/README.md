## 1.组件结构
```js
<Form>
  <Form.Item name=''>
    <Input/>
  </Form.Item>
  <span>辅助信息<span/>

  <Form.Item>
    <Form.Item name=''>
      <InputNumber/>
    </Form.Item>
  </Form.Item>

  <Form.Item
    name=''
    valuePropName="fileList"  
    getValueFromEvent={(e)=>{
      if(Array.isArray(e))  return e
      return e && e.filelist
    }}
  >
      <Upload/>
  </Form.Item>

</Form>
```
## 2.Form
### 2.1 props
```js
const [form] = Form.useForm();
<Form
# 常用配置
  // form 的对象 拥有很多方法
  form={form}
  // 左侧表单文字的 栅格布局
  labelCol={{ span:8 }}
  // 右侧表单的 栅格布局
  wrapperCol={{ span:8 }}
  // 统一设置内部所有表单的 size
  size={"large"|"default"|"large"}
  /* 表单默认值 注意如果有异步重新渲染的情况 
    请使用 form.setFieldsValue({Form.item.name: xxx})
  */
  initialValues={{ Form.item.name: xxx }}

# 可能用到的配置
  // 校验失败自动滚动到第一个错误字段
  scrollToFirstError
  // 当字段值被删除时  保留字段
  preserve={false}


# 使用很少的配置
  name='xxx'
  layout={"horizontal"|"vertical"|"inline"}
  // 手动控制可选和必选样式的切换
  requiredMark='optional|true|false'
  /* 自定义校验模板
  const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
  };*/
  validateMessages={validateMessages}
  
# 事件
  onFinish={value=> {} }
  onFinishFailed={errorValue=> {} }
  // 某个表单更新就触发
  onValuesChange={(changeValue,allValues)=> {} }
>
<Form>
```
### 2.2 api
```js
// 手动设置表单的值
 form.setFieldsValue({
      form.item.name : 'xxx',
 })
// 重置表单
 form.resetFields();
// 获取表单的值 不写参数就是 获取所有的表单
 form.getFieldValue() 
 form.getFieldValue(form.item.name)
// 获取实例
 form.getFieldInstance('formItemName') 
// 自定义校验
 form.validateFields()
   .then(values=>{
     success
   })
   .catch(err=>console.log(err))
```

## 3.Form.Item
### 3.1静态的表单
```js
<Form.Item
# 常用配置
// 表单左边的文字 例如: username
  label={'username'}
// 用于双向绑定数据 必须
  name={'username'}
// 添加一个 * 符号的必选图标
  required
/* 特殊表单需要设置这个属性以及 getValueFromEvent 例如:
   如果是 upload valuePropName="filelist"
   如果是 switch valuePropName="checked"
*/
  valuePropName="fileList"  
// upload 表单需要这个属性 否则无法上传
  getValueFromEvent={(e)=>{
     if(Array.isArray(e))  return e
     return e && e.filelist
  }}
// 校验规则
  rules={[
    {
      required: true,
      message: '',
      pattern: /^[3]{1}/,
      max: 5,
      min: 3,
      validateTrigger: "onChange",
      // 校验不再阻塞表单提交
      warningOnly: true,
      // 自定义校验 需要以 promise 形式返回
      validator: (usernameFormRules,value)=>{
        if (value.length > 5) {
        return Promise.reject(new Error('不能大于5个字符'))
        }
        return Promise.resolve("格式正确")
      }
    }
  ]}
# 可能用到的配置 
  // 关闭表单栅格 自定义布局
  noStyle
  // 错误提示信息 不写会自动生成
  help={ReactNode}
  // 添加反馈图标 根据 validateStatus 生成
  hasFeedback
  // 校验状态
  validateStatus={'success'|'warning'|'eror'|'validating'}
  // 指定的表单值变化了 他就更新
  dependencies={['Form.Item.name']}

# 使用很少的配置
  // 可选提示信息
  tooltip={{title:'xxx',icon:</> }}
>

<Form.Item>
```

### 3.2 动态表单
- 当你有这样的场景 当你点击a表单 动态生成一个新的 aa 表单
- 点击b表单 其他表单不发生变化
```js
<Form.Item
/*让某个表单可能具有动态效果
点击那个表单 就触发动态 生成另一个表单效果*/ 
   shouldUpdate={ (prevValues,curValues)=>
   prevValues.表单name !== curValues.表单name }
>
  { ({getFieldValue}) => 
    // 如果某个表单值为张三 就动态渲染这个新的表单
      getFieldValue('Form.Item.name') === 'zhangsan' ? (
          <Form.item .../>
        ) : null
  }
</Form.Item>
```

## 4.Form.List
- 实现用户可以手动添加和删除 多余补充表单信息的效果
```js
/*
自定义动态表单name属性
当定义了  name={[field.name,'名字后缀']}
        fieldKey={[field.fieldKey,'名字后缀']}
动态表单的name就变成了
        name={[field.name,'名字后缀']}
        id: zs_数字_名字后缀   
*/
<Form form={form}>
      <Form.List name='zs' initialValue={[1, 2, 3]}>
        {
          (fields, { remove, add, move }) => (
            <>
              {
                fields.map((field, index) => (
                  <Form.Item key={field.key} noStyle>
                      <Form.Item 
                         {...field} 
                         name={[field.name,'名字后缀']}
                         fieldKey={[field.fieldKey,'名字后缀']}
                        >
                          <Input />
                     </Form.Item>
                     { 
                       fields.length > 1 ? 
                       <Button onClick={() => remove(field.name)}> 删除 </Button> 
                       : null
                     }
                     <Button onClick={() => move(index, index - 1)}>
                        上移 
                     </Button>
                  </Form.Item>
                ))
              }
              <Form.Item >
                <Button onClick={() => add(表单的值,位置)}>添加</Button>
              </Form.Item>
            </>
          )
        }
      </Form.List>
</Form>
```
## 5 基本校验 demo
```js
import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const Test = () => {
  const [form] = Form.useForm();
  const myValidator = (usernameFormRules, value) => {
    if (value.length > 5) {
      return Promise.reject(new Error('不能大于5个字符'))
    }
    return Promise.resolve("格式正确")
  }
  const formRules = {
    username: [
      {
        required: true,
        message: "用户名是必填项",
        pattern: /^[3]{1}/
        // max: 5,
        // min: 3,
        // validator: myValidator,
        // validateTrigger: "onChange"
      }
    ],
    password: [
      {
        required: true,
        message: "密码"
      }
    ]
  }

  function successFormSubmit (value) {
    console.log(value);
  }

  function errorFormSubmit (errorValue) {
    console.log(errorValue);
  }

  const ResetForm = () => {
    console.log(form.getFieldsValue());
    form.setFieldsValue({ username: "" })
    form.resetFields()
  }

  return (
    // <Form form={form} />  const [form] = Form.useForm();  类似ref对象 设置完可以调用方法
    // <Form.Item  name='username'> 自动双向绑定表单数据
    // form.resetFields() 重置表单
    // form.getFieldsValue() 获取所有表单的value 
    // form.setFieldsValue({ username: "" }) 手动设置某个表单的值
    //  trigger 验证方式
    <Form form={form} wrapperCol={{ span: 5 }} onFinish={successFormSubmit} onFinishFailed={errorFormSubmit} >
      <Form.Item label='username' name='username' rules={formRules.username} >
        <Input />
      </Form.Item>
      <Form.Item label='password' name='password' rules={formRules.password}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button htmlType='submit'>提交</Button>
        <Button htmlType="button" onClick={ResetForm}>重置</Button>
      </Form.Item>
    </Form>
  );
}
export default Test
```

## 6.一行放置多个表单
### 6.1 利用 display: 'inline-flex'
```js
/* 注意
1.Form.Item 内只能放置一个表单 不要放置其他内容
  如果要添加文字等 放在 Form.Item组件 的前面或者后面
2.InputNumber 不能直接触发数字自动双向绑定
  需要这样
    <Form.Item>
        <Space align="baseline" size="large">
           <Space align="baseline">
                <Form.Item name="1">
                  <InputNumber min={0}  max={100} />
                </Form.Item>
                <span>%</span>
            </Space>
         </Space>
    </Form.Item>
  或者
  <Form.Item>
    <Form.Item name='xxx'>
      <InputNumber/>
    </Form.Item>
  </Form.Item>
3.主要外层先用 一个Form.Item包裹 这个Form.Item 不绑定name
  只绑定 lable 和 style 等
*/
<Form.Item label="名称一" style={{ marginBottom: 0 }}>

    <Form.Item
        style={{ display: 'inline-flex', width: 'calc(45% - 4px)' }}
    >
        <Input  />
    </Form.Item>

    <Form.Item
        style={{display: 'inline-flex', width: 'calc(55% - 4px)', marginLeft: '8px' }}
        name="name2"
    >
       <Input  />
    </Form.Item>

    <Form.Item label="InputNumber表单" style={{ height: 32 }}>
        <Space align="baseline" size="large">
           <Space align="baseline">
                <Form.Item name='inputNumber1' >
                  <InputNumber
                    className={styles.modalInputNumber}
                    min={0}
                    max={100}
                  />
                </Form.Item>
                <span>%</span>
            </Space>
         </Space>
    </Form.Item>

</Form.Item>
```
### 6.2 使用 row col
