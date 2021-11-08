## useVirtualList 虚拟列表渲染
<RcCard
  cardTitle={'使用方法'}
  cardExtra={'useIsVisible 是否在可视区'}
  content={
`const Section = (props) => {
const ref = useRef(null)
const entry = useVirtualList(ref, {})
const isVisible = !!entry?.isIntersecting
console.log(\`Render Section \${props.title}\`, { isVisible })
return (
  <div
    ref={ref}
    style={{
      minHeight: '100vh',
      display: 'flex',
      border: '1px dashed #000',
      fontSize: '2rem',
      width: '100%'
    }}
  >
    {
      isVisible ? (
        <div style={{ margin: 'auto' }}>{props.title}</div>
      ) : ""
    }
  </div>
)
}
Array.from({ length: 100 }).map((_, index) => (
  <Section key={index + 1} title={\`\${index + 1}\`} />
))`}
  code={
String.raw`import { RefObject, useEffect, useState } from 'react'
interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}
/**
 * 
 * @param {ReactRef} elementRef 传入虚拟列表父盒子的 ref
 * @param {object} 
 * threshold         阀值 0-1 1表示完全出现在屏幕可视区域才触发
 * root              表示指定根元素 默认为浏览器视口  用于检查目标可见性
 * rootMargin        root的外边距 '0 0 0 0'  
 * freezeOnceVisible 是否缓存 再次滑动不重新渲染
 * @returns {Object} entry 这个对象具有当前可视区的信息 
 * 例如 entry.isIntersecting 是否在可视区范围
 */
function useVirtualList(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false
  }: Args
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const frozen = entry?.isIntersecting && freezeOnceVisible
  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }
  useEffect(() => {
    const node = elementRef?.current
    const hasIOSupport = !!window.IntersectionObserver
    if (!hasIOSupport || frozen || !node) return
    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, observerParams)
    observer.observe(node)
    return () => observer.disconnect()
  }, [elementRef, JSON.stringify(threshold), root, rootMargin, frozen])
  return entry
}
export default useVirtualList`}
  descriptionTitle={'useIsVisible-Hook 源码'}
  description={
    <> 
      <h3>使用场景</h3>
      <span>1: 虚拟渲染</span>
      <span>2: 懒加载</span>
    </>
  }
/>