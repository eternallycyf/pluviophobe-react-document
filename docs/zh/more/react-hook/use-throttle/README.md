# useThrottle 节流
<RcCard
  cardTitle={'使用方法'}
  cardExtra={'useThrottle 节流'}
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
  descriptionTitle={'useThrottle-Hook 源码'}
  description={
    <> 
      <h3>使用场景</h3>
      <span>1: 监听滚动事件-滑动到底部加载更多</span>
    </>
  }
/>

