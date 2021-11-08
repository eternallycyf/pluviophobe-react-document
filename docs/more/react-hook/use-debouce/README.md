## useDebouce 

<RcCard
  cardTitle={'usage'}
  cardExtra={'useDebouce'}
  content={
`// this moment
// Just replace the previous form value with usedebouncevalue
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
      <h3>Usage scenario</h3>
      <span>1: Search box Lenovo suggestions</span>
      <span>2: window resizeEvent</span>
    </>
  }
/>