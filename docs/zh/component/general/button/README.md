# Button
按钮用于开始一个即时操作。

## 什么时候用
标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
在 pluviophobe-react 中我们提供了五种按钮。
- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：一般用于链接，即导航至某位置。
  以及四种状态属性与上面配合使用.
- `danger`: 删除/移动/修改权限等危险操作，一般需要二次确认.
- `ghost`: 用于背景色比较复杂的地方，常用在首页/产品页等展示场景.
- `disabled`: 行动点不可用的时候，一般需要文案解释.
- `loading` : 用于异步操作等待反馈的时候，也可以避免多次提交.

##

<RcCard
  content={
    <>
      <h2>type</h2>
      <Button type="primary" disabled={false}>
         primary 按钮 
      </Button>
      <Button type="default" disabled={false}>
         default 按钮 
      </Button>
      <Button type="danger" disabled={false}>
         danger 按钮 
      </Button>
       <Button type="link" disabled={false}>
         link 按钮 
      </Button>
      <h2>size</h2>
      <Button type="primary" size='lg'>
         lg 按钮 
      </Button>
       <Button type="primary" size='small'>
         small 按钮 
      </Button>
    </>
  }
  
  code={`
      import { Button } from 'pluviophobe-react';
      <h2>type</h2>
      <Button type="primary" disabled={false}>
         default 按钮 
      </Button>
      <Button type="default" disabled={false}>
         default 按钮 
      </Button>
      <Button type="danger" disabled={false}>
         default 按钮 
      </Button>
      <Button type="link" disabled={false}>
         default 按钮 
      </Button>
      <h2>size</h2>
      <Button type="primary" size='lg'>
         lg 按钮 
      </Button>
       <Button type="primary" size='small'>
         small 按钮 
      </Button>
  `}
  descriptionTitle={'按钮 Type'}
  description ={
       <div>
         按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
        </div>
  }
/>



