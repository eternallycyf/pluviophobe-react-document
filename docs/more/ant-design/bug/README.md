# Bug

## 1.antd mobile-v2 Carousel Component sliding report error 
```js
1.Use react version below 17.0
2.node_modules
carousel.js  400Lines  notes: e.preventDefault()
```

## 2.antd upload 405 error
```js
As a result of Upload Component has action props,
When you add files, that will build a POST request the action path。
So it Prompt 405 error
resolvent:
1. Set an aciton interface path,
The back end sets a 200 status code interface that returns an empty object

2.
beforeUpload={(file) => {
  return false;
}}
```