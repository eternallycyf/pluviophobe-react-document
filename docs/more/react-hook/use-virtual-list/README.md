# useVirtualList 
<RcCard
  cardTitle={'usage'}
  cardExtra={'useIsVisible'}
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
 * @param {ReactRef} elementRef The name of the parent box of the incoming virtual list ref
 * @param {object} 
 * threshold         threshold 0-1  1 indicates that it is triggered only when it completely appears in the visible area of the screen
 * root              Indicates that the specified root element defaults to a browser viewport for checking target visibility
 * rootMargin        Outer margin of root '0 0 0 0'  
 * freezeOnceVisible Whether the cache slides again without re rendering
 * @returns {Object} entry This object has information about the current viewport 
 * Example: entry.isIntersecting Is it within the visual area
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
  descriptionTitle={'useIsVisible-Hook SoundCode'}
  description={
    <> 
      <h3>Usage scenario</h3>
      <span>1: Virtual rendering</span>
      <span>2: Lazy loading</span>
    </>
  }
/>