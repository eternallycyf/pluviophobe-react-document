# Bug

## 1.antd mobile-v2 轮播图滑动报错
```js
1.使用react 17.0以下版本
2.node_modules
carousel.js  400行  注释掉：e.preventDefault()
```

## 2.antd Upload 组件报405错误
```js
原因是因为 Upload 组件有一个默认的 action 如果不传也会发起一个 POST 请求
所以就会报405了
解决方法:
1. 设置一个对应aciton的特别接口
这个接口只返回 200的状态码 和 空对象

2. 
beforeUpload={(file) => {
  return false;
}}
```