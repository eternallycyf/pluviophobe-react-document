# Form
## 1.Component structure
```js
<Form>
  <Form.Item name=''>
    <Input/>
  </Form.Item>
  <span>Auxiliary information<span/>

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
# Common configuration
  // Form objects, it have many methods
  form={form}
  // Grid layout of form text on the left
  labelCol={{ span:8 }}
  // Grid layout of the form on the right
  wrapperCol={{ span:8 }}
  // Uniformly set the size of all internal forms
  size={"large"|"default"|"large"}
  /* The default value of the form. Note that if there is asynchronous re rendering 
    Please use form.setFieldsValue({Form.item.name: xxx})
  */
  initialValues={{ Form.item.name: xxx }}

# Possible configurations
  // Verification failure automatically scrolls to the first error field
  scrollToFirstError
  // Keep the field when the field value is deleted
  preserve={false}


# Rarely used configuration
  name='xxx'
  layout={"horizontal"|"vertical"|"inline"}
  // Manually control the switching between optional and required styles
  requiredMark='optional|true|false'
  /* Custom verification template
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
  
# Event
  onFinish={value=> {} }
  onFinishFailed={errorValue=> {} }
  // A form update is triggered
  onValuesChange={(changeValue,allValues)=> {} }
>
<Form>
```
### 2.2 api
```js
// Manually set the value of the form
 form.setFieldsValue({
      form.item.name : 'xxx',
 })
// Reset Form
 form.resetFields();
// To get the value of the form without writing parameters is to get all forms
 form.getFieldValue() 
 form.getFieldValue(form.item.name)
// Get instance
 form.getFieldInstance('formItemName') 
// Custom verification
 form.validateFields()
   .then(values=>{
     success
   })
   .catch(err=>console.log(err))
```

## 3.Form.Item
### 3.1 Static form
```js
<Form.Item
# 常用配置
// Text on the left side of the form, for example: username
  label={'username'}
// Data used for two-way binding , Required
  name={'username'}
// Add a required icon for the * symbol
  required
/* Special forms need to set this property and getvaluefromevent, for example:
   If is upload, valuePropName="filelist"
   If is switch, valuePropName="checked"
*/
  valuePropName="fileList"  
// upload needs this attribute, otherwise it cannot be uploaded
  getValueFromEvent={(e)=>{
     if(Array.isArray(e))  return e
     return e && e.filelist
  }}
// Verification rules
  rules={[
    {
      required: true,
      message: '',
      pattern: /^[3]{1}/,
      max: 5,
      min: 3,
      validateTrigger: "onChange",
      // Verification no longer blocks form submission
      warningOnly: true,
      // The user-defined verification needs to be returned in the form of promise
      validator: (usernameFormRules,value)=>{
        if (value.length > 5) {
        return Promise.reject(new Error('Cannot be greater than 5 characters'))
        }
        return Promise.resolve("Correct format")
      }
    }
  ]}
# Possible configurations
  // Close form grid custom layout
  noStyle
  // If the error message is not written, it will be generated automatically
  help={ReactNode}
  // Add feedback icon generated according to validatestatus
  hasFeedback
  // Verify status
  validateStatus={'success'|'warning'|'eror'|'validating'}
  // When the specified form value changes, it will be updated
  dependencies={['Form.Item.name']}

# Rarely used configuration
  // Optional prompt
  tooltip={{title:'xxx',icon:</> }}
>

<Form.Item>
```

### 3.2 Dynamic form
- -When you have such a scenario, when you click a form, a new AA form is generated dynamically
- Click B form and other forms will not change
```js
<Form.Item
/*Make a form dynamic
Clicking that form triggers the effect of dynamically generating another form*/ 
   shouldUpdate={ (prevValues,curValues)=>
   prevValues.form.name !== curValues.form.name }
>
  { ({getFieldValue}) => 
    // If the value of a form is Zhang San, the new form will be rendered dynamically
      getFieldValue('Form.Item.name') === 'zhangsan' ? (
          <Form.item .../>
        ) : null
  }
</Form.Item>
```

## 4.Form.List
- Users can manually add and delete redundant supplementary form information
```js
/*
Custom dynamic form name attribute
When define name={[field.name,'Name suffix']}
        fieldKey={[field.fieldKey,'Name suffix']}
The name of the dynamic form becomes
        name={[field.name,'Name suffix']}
        id: zs_Number_NameSuffix 
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
                         name={[field.name,'Name suffix']}
                         fieldKey={[field.fieldKey,'Name suffix']}
                        >
                          <Input />
                     </Form.Item>
                     { 
                       fields.length > 1 ? 
                       <Button onClick={() => remove(field.name)}> Delete </Button> 
                       : null
                     }
                     <Button onClick={() => move(index, index - 1)}>
                        Move up
                     </Button>
                  </Form.Item>
                ))
              }
              <Form.Item >
                <Button onClick={() => add('The value of the form',position)}>添加</Button>
              </Form.Item>
            </>
          )
        }
      </Form.List>
</Form>
```
## 5 Basic verification demo
```js
import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const Test = () => {
  const [form] = Form.useForm();
  const myValidator = (usernameFormRules, value) => {
    if (value.length > 5) {
      return Promise.reject(new Error('Cannot be greater than 5 characters'))
    }
    return Promise.resolve("Correct format")
  }
  const formRules = {
    username: [
      {
        required: true,
        message: "User name is required",
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
        message: "password"
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
    // <Form form={form} />  const [form] = Form.useForm();  The method can be called after the ref object is set
    // <Form.Item  name='username'> Automatically bind form data in both directions
    // form.resetFields() Reset Form
    // form.getFieldsValue() Get the value of all forms
    // form.setFieldsValue({ username: "" }) Manually set the value of a form
    //  trigger Verification method
    <Form form={form} wrapperCol={{ span: 5 }} onFinish={successFormSubmit} onFinishFailed={errorFormSubmit} >
      <Form.Item label='username' name='username' rules={formRules.username} >
        <Input />
      </Form.Item>
      <Form.Item label='password' name='password' rules={formRules.password}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button htmlType='submit'>Submit</Button>
        <Button htmlType="button" onClick={ResetForm}>Reset</Button>
      </Form.Item>
    </Form>
  );
}
export default Test
```

## 6.Place multiple forms on one line
### 6.1 Use display: 'inline-flex'
```js
/* be careful
1.Only one form can be placed in Form.Item. Do not place other contents
  If you want to add text, put it before or after the Form.Item component
2.InputNumber Digital automatic two-way binding cannot be triggered directly
  Need this
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
  Or
  <Form.Item>
    <Form.Item name='xxx'>
      <InputNumber/>
    </Form.Item>
  </Form.Item>
3.The main outer layer is first wrapped with a Form.Item, which is not bound with name
  Only bind label and style
*/
<Form.Item label="Name one" style={{ marginBottom: 0 }}>

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

    <Form.Item label="InputNumber form" style={{ height: 32 }}>
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
### 6.2 use row col
