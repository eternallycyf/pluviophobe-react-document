# useWinSize 屏幕尺寸
<RcCard
  cardTitle={'使用方法'}
  cardExtra={'useWinSize 获取屏幕尺寸'}
  content={
`import useWinSize form './useWinSize'
const size = useWinSize()`}
  code={`import {useState,useCallback} from 'react'
function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])
  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('reisze', onResize)
    }
  }, [])
  return size
}`}
  descriptionTitle={'useWinSize-Hook 源码'}
  description={
    <> 
      <h3>使用场景</h3>
      <span>1: 获取屏幕尺寸</span>
    </>
  }
/>
