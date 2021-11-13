# DatePicker 

## 1.Introduce dependency
```js
import moment from 'moment'
// Time selector
import { DatePicker } from 'antd'; 
// Time range selector
const { RangePicker } = DatePicker; 
// Chinese language pack
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
```
## 2.Basic configuration
```js
<RangePicker 
# Basic configuration
// Disable components
  disabled={[false,true]}
// Footer content
  renderExtraFooter={() => 'extra footer'}
// no border
  bordered={false}
  size={'large|miaddle|small'}
// Chinese needs to introduce the package of moment Chinese and time selector Chinese
  locale={locale}

# Specific time configuration
// Limit time type after clicking
  picker="year|quarter|month|week|date|time"
// Click to open the specific hour, minute and second selector
  showTime={{ 
      format: "hh[时]mm[分]ss[秒]",
      defaultValue:[ 
// Set the default value of hour, minute and second. If you do not select hour, minute and second, it is the default value
            moment('01:00:00', 'HH:mm:ss'),
            moment('11:59:59', 'HH:mm:ss')
          ]
     }}
// By default, the time range displayed upon clicking starts from the latest time without writing
  搭配 showTime 使用
  defaultPickerValue={moment("2021-05-01")}
// Time format filter when not clicked
  format="YYYY/MM/DD HH:mm:ss"
// Customize shortcut button settings
  ranges={{
     Today: [moment(), moment()],
     'this month':[ 
         moment().startOf('month'),
         moment().endOf('month') 
        ]
     }}
// Customize the appearance of each date
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
// Disable the time limit. See the following demo for details
  disabledDate={disabledDate} 

# event
// The event parameter of time change is the time of change
  onChange={(date:moment,dateString:string)=>}
// The date change callback to be selected is used to limit the time range to 7 days
  onCalendarChange={val => setDates((val))}
/>
```

## 3. Disable month, day, hour, minute and second
```js
# Disable month, day, hour, minute and second = > limit the time selection range
// You need to turn on Showtime to limit hours, minutes and seconds
<RangePicker
    defaultPickerValue={moment("2021-05-01")}
    showTime={{format: "hh:mm:ss"}}
// Restricted date
    disabledDate={disabledDate}
// Limit hours, minutes and seconds
    disabledTime={disabledTime}
/>
      
 const disabledDate = (currentDate) => {
    const start = moment("2021-05-01")
    const end = moment("2021-06-01")
// Limit the time to May to June 2021
    return currentDate && currentDate < start
           || currentDate > end
// Limit the time to any time except 202105-202106
    return currentDate && !(currentDate < start
           || currentDate > end)
// The earliest time is 8 days ago
   return current && current < moment().subtract(8, 'day');
  }
 
// The tool function gets the array in the range
 function range(start, end) {const result = [];
 for (let i = start; i < end; i++) { result.push(i);
 }return result;}
const disabledTime = () => {
  return {
// Only 4-24 hours can be selected
    disabledHours: () => range(0, 24).splice(4, 20),
// Only 00-29 minutes can be selected
    disabledMinutes: () => range(30, 60), 
// You can only select seconds other than 55 and 56 seconds
    disabledSeconds: () => [55, 56],  
    }
  }
```

## 4. Disable 7-day range
```js
# Disable 7-day range
<RangePicker
    defaultPickerValue={moment("2021-05-01")}
    showTime={{format: "hh:mm:ss"}}
    disabledDate={disabledDate}
    onCalendarChange={val => setDates((val))}
/>
   const [dates, setDates] = useState([]);

   const disabledDate = (current) => {
// Within 7 days
    if (!dates || dates.length === 0) {return false;}
const tooLate = dates[0] && current.diff(dates[0],'days') > 7;
const tooEarly=dates[1] && dates[1].diff(current, 'days') > 7;
 return tooEarly || tooLate;
// Within  7 days from May 1, 2021 to June 1, 2021
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

// 1.1 Limit the time to May to June 2021
// const disabledDate = (currentDate) => {
//   const start = moment("2021-05-01")
//   const end = moment("2021-06-01")
//   return currentDate && currentDate < start
//     || currentDate > end
// }

// 1.2 Limit the time to any time except 202105-202106
// const disabledDate = (currentDate) => {
//   const start = moment("2021-05-01")
//   const end = moment("2021-06-01")
//   return currentDate && !(currentDate < start
//     || currentDate > end)
// }

// 1.3 Within 7 days
// const disabledDate = (current) => {
//   if (!dates || dates.length === 0) { return false; }
//   const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
//   const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
//   return tooEarly || tooLate;
// };

// 1.4 Limited to 2021-05-01 to 2021-06-01 &amp;&amp; 7 days
  const disabledDate = (current) => {
    if (!dates || dates.length === 0) { return false; }
    const start = moment("2021-05-01")
    const end = moment("2021-06-01")
    const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
    const tooEarly = dates[1] && (dates[1]).diff(current, 'days') > 7;
    return current && (tooEarly || tooLate)
      || current < start || current > end
  };

// The tool function gets the array in the range
  function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    } return result;
  }
// 2.1 Limit hours, minutes and seconds
  const disabledTime = () => {
    return {
// Only 4-24 hours can be selected
      disabledHours: () => range(0, 24).splice(4, 20),
// Only 00-29 minutes can be selected
      disabledMinutes: () => range(30, 60),
// You can only select seconds other than 55 and 56 seconds
      disabledSeconds: () => [55, 56],
    }
  }
  return (
    <>
      <RangePicker
// disabled={[false, true]}
        renderExtraFooter={() => 'This is the footer'}
        bordered={false}
        size={'large'}
        locale={locale}
 // picker="year|quarter|month|week|date|time"
        showTime={{
          format: "hh:mm:ss",
          defaultValue: [
            moment('01:00:00', 'HH:mm:ss'),
            moment('11:59:59', 'HH:mm:ss')
          ]
        }}
        defaultPickerValue={moment("2021-05-01")}
        format="YYYY/MM/DD HH:mm:ss"
        ranges={{
          Today: [moment(), moment()],
          'this month': [
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