# useDebouce 防抖
<RcCard
  cardTitle={'使用方法'}
  cardExtra={'useDebouce 防抖'}
  content={
`// 此时
// 只要 把 之前的 表单value 全部换成 useDebounceValue就行了 
import useDebounce from './useDebounce'
const useDebounceValue = useDebounce(inputValue, 500)`
   }
code={`import { useState, useEffect } from 'react'
 function useDebounce(value: any, delay = 300) {
 const [debouncedValue, setDebouncedValue] = useState(value)
 useEffect(() => {
   const handler = window.setTimeout(() => {
     setDebouncedValue(value)
   }, delay)
   return () => {
     clearTimeout(handler)
   }
 }, [value, delay])
   return debouncedValue
}
export default useDebounce;`}
  descriptionTitle={'useDebouce-Hook SoundCode'}
  description={
    <> 
      <h3>使用场景</h3>
      <span>1: 搜索框联想建议</span>
      <span>2: window resize事件</span>
    </>
  }
/>