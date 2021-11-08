# useScrollPosition 屏幕滚动距离
<RcCard
  cardTitle={'使用方法'}
  cardExtra={'useScrollPostion 屏幕滚动距离'}
  content={
`import useScrollPostion form './useScrollPostion'
const position = useScrollPostion()`}
  code={`import {useState,useEffect} from 'react'
function useScrollPostion() {
  const [scrollPosition, setScrollPostion] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScrollPostion(window.scrollY)
    }
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  },[])
  return scrollPosition
}
export default useScrollPostion`}
  descriptionTitle={'useScrollPostion-Hook 源码'}
  description={
    <> 
      <h3>使用场景</h3>
      <span>1: 监听滚动事件</span>
    </>
  }
/>
