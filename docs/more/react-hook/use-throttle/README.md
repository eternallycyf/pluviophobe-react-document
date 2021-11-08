# useThrottle 
<RcCard
  cardTitle={'usage'}
  cardExtra={'useThrottle'}
  content={
`import useThrottle from './useThrottle'
const throttledFunc = useThrottle(fn, 2000);`}
  code={`import { useEffect, useRef, useCallback } from 'react';
function useThrottle(fn, delay, dep = []) {
  useEffect(function () {
    current.fn = fn;
  }, [fn]);
  return useCallback(function (...args) {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        delete current.timer;
      }, delay);
      current.fn.call(this, ...args);
    }
  }, dep);
}
export default useThrottle`}
  descriptionTitle={'useThrottle-Hook SoundCode'}
  description={
    <> 
      <h3>Usage scenario</h3>
      <span>1: Listen for scrolling events - slide to the bottom to load more</span>
    </>
  }
/>

