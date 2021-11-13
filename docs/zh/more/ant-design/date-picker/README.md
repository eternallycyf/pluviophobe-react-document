# DatePicker 日期选择器

## 1. 引入依赖
```js
import moment from 'moment'
// 时间选择器
import { DatePicker } from 'antd'; 
// 时间范围选择器
const { RangePicker } = DatePicker; 
// 中文语言包
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
```
## 2.基本配置
```js
<RangePicker 
# 基础配置
// 禁用组件
  disabled={[false,true]}
// 页脚内容
  renderExtraFooter={() => 'extra footer'}
// 无边框
  bordered={false}
  size={'large|miaddle|small'}
// 中文 需要引入 moment中文 和 时间选择器中文 的包
  locale={locale}

# 具体时间配置
// 点击后 限制时间类型
  picker="year|quarter|month|week|date|time"
// 点击后开启具体 时分秒选择器
  showTime={{ 
      format: "hh[时]mm[分]ss[秒]",
      defaultValue:[ 
// 设置时分秒默认值 不选择时分秒就是默认的
            moment('01:00:00', 'HH:mm:ss'),
            moment('11:59:59', 'HH:mm:ss')
          ]
     }}
// 默认一点击就显示的时间范围 不写就从最新时间开始 
  搭配 showTime 使用
  defaultPickerValue={moment("2021-05-01")}
// 不点击时显示的时间格式过滤
  format="YYYY/MM/DD HH:mm:ss"
// 自定义快捷时间按钮设置
  ranges={{
     Today: [moment(), moment()],
     '当月':[ 
         moment().startOf('month'),
         moment().endOf('month') 
        ]
     }}
// 自定义每个日期的外观
  dateRender={current => {
      const style = {};
      if (current.date() === 1) {
            style.border = '1px solid #1890ff';
            style.borderRadius = '50%';
      }
      return (   
         <div className="ant-picker-cell-inner" style={style}>
              {current.date()}
         </div>
          )
   }}
// 禁用限制 时间   具体见下面的 demo
  disabledDate={disabledDate} 

# 事件
// 时间改变的事件 参数是改变的时间
  onChange={(date:moment,dateString:string)=>}
// 待选日期变化回调 用于时间范围限制7天时间
  onCalendarChange={val => setDates((val))}
/>
```

## 3. 禁用年月日时分秒
```js
# 禁用 年月日 时分秒 => 限制时间选择范围、
// 需要开启 showTime 来限制时分秒
<RangePicker
    defaultPickerValue={moment("2021-05-01")}
    showTime={{format: "hh时mm分ss秒"}}
// 限制年月日
    disabledDate={disabledDate}
// 限制时分秒
    disabledTime={disabledTime}
/>
      
 const disabledDate = (currentDate) => {
    const start = moment("2021-05-01")
    const end = moment("2021-06-01")
// 将时间限制在 只能选择2021年 5到6月 的时间
    return currentDate && currentDate < start
           || currentDate > end
// 将时间限制在 只能选择 除了 202105-202106 之外任意时间
    return currentDate && !(currentDate < start
           || currentDate > end)
// 时间最早是8天前
   return current && current < moment().subtract(8, 'day');
  }
 
 // 工具函数 拿到范围内的数组
 function range(start, end) {const result = [];
 for (let i = start; i < end; i++) { result.push(i);
 }return result;}
const disabledTime = () => {
  return {
// 只能选择 4-24  小时
    disabledHours: () => range(0, 24).splice(4, 20),
// 只能选择 00-29 分钟
    disabledMinutes: () => range(30, 60), 
// 只能选择 除了55 56 秒的 秒数
    disabledSeconds: () => [55, 56],  
    }
  }
```

## 4. 禁用7天范围
```js
# 禁用7天范围
<RangePicker
    defaultPickerValue={moment("2021-05-01")}
    showTime={{format: "hh时mm分ss秒"}}
    disabledDate={disabledDate}
    onCalendarChange={val => setDates((val))}
/>
   const [dates, setDates] = useState([]);

   const disabledDate = (current) => {
// 限制 7天以内
    if (!dates || dates.length === 0) {return false;}
const tooLate = dates[0] && current.diff(dates[0],'days') > 7;
const tooEarly=dates[1] && dates[1].diff(current, 'days') > 7;
 return tooEarly || tooLate;
// 2021-05-01至2021-06-01 && 7天以内
     if (!dates || dates.length === 0) {return false;}
     const start = moment("2021-05-01")
     const end = moment("2021-06-01")
const tooLate=dates[0] && current.diff(dates[0], 'days') > 7;
const tooEarly=dates[1]&&(dates[1]).diff(current, 'days') > 7;
     return  current && (tooEarly || tooLate) 
             || current < start || current > end
  };
```

## 5. Demo
```js
import { useState } from 'react'
import { DatePicker } from 'antd';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import moment from 'moment'

const { RangePicker } = DatePicker;

const Test = () => {
  const [dates, setDates] = useState([]);

// 1.1 将时间限制在 只能选择2021年 5到6月 的时间
// const disabledDate = (currentDate) => {
//   const start = moment("2021-05-01")
//   const end = moment("2021-06-01")
//   return currentDate && currentDate < start
//     || currentDate > end
// }

// 1.2 将时间限制在 只能选择 除了 202105-202106 之外任意时间
// const disabledDate = (currentDate) => {
//   const start = moment("2021-05-01")
//   const end = moment("2021-06-01")
//   return currentDate && !(currentDate < start
//     || currentDate > end)
// }

// 1.3 限制7天之内
// const disabledDate = (current) => {
//   if (!dates || dates.length === 0) { return false; }
//   const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
//   const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
//   return tooEarly || tooLate;
// };

// 1.4 限制 2021-05-01至2021-06-01 && 7天以内
  const disabledDate = (current) => {
    if (!dates || dates.length === 0) { return false; }
    const start = moment("2021-05-01")
    const end = moment("2021-06-01")
    const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
    const tooEarly = dates[1] && (dates[1]).diff(current, 'days') > 7;
    return current && (tooEarly || tooLate)
      || current < start || current > end
  };

// 工具函数 拿到范围内的数组
  function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    } return result;
  }
// 2.1 限制时分秒
  const disabledTime = () => {
    return {
// 只能选择 4-24  小时
      disabledHours: () => range(0, 24).splice(4, 20),
// 只能选择 00-29 分钟
      disabledMinutes: () => range(30, 60),
// 只能选择 除了55 56 秒的 秒数
      disabledSeconds: () => [55, 56],
    }
  }
  return (
    <>
      <RangePicker
// disabled={[false, true]}
        renderExtraFooter={() => '这是页脚'}
        bordered={false}
        size={'large'}
        locale={locale}
 // picker="year|quarter|month|week|date|time"
        showTime={{
          format: "hh时mm分ss秒",
          defaultValue: [
            moment('01:00:00', 'HH:mm:ss'),
            moment('11:59:59', 'HH:mm:ss')
          ]
        }}
        defaultPickerValue={moment("2021-05-01")}
        format="YYYY/MM/DD HH:mm:ss"
        ranges={{
          Today: [moment(), moment()],
          '当月': [
            moment().startOf('month'),
            moment().endOf('month')
          ]
        }}
        dateRender={current => {
          const style = {};
          if (current.date() === 1) {
            style.border = '1px solid #1890ff';
            style.borderRadius = '50%';
           }
          return (   
         <div className="ant-picker-cell-inner" style={style}>
              {current.date()}
            </div>
           )
         }}
        disabledDate={disabledDate}
// disabledTime={disabledTime}
        onCalendarChange={val => setDates((val))}
        onChange={(date, dateString) => console.log(date, dateString)}
      />
    </>
  )
}
export default Test
```