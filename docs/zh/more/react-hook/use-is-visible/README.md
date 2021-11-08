# useIsVisible 组件是否在可视区
<RcCard
  cardTitle={'使用方法'}
  cardExtra={'useIsVisible 是否在可视区'}
  content={
`import useIsVisible from './useIsVisible'
const elemRef = useRef();
const isVisible = useVisible(elemRef);
<div style={{ height: "145vh", width: '100%' }}>1</div>
<div ref={elemRef}>hello {isVisible && console.log("visible")}</div>`}
  code={`import { useState, useEffect } from "react";
const OPTIONS = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};
const useIsVisible = (elementRef) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (elementRef.current) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(elementRef.current);
          }
        });
      }, OPTIONS);
      observer.observe(elementRef.current);
    }
  }, [elementRef]);
  return isVisible;
};
export default useIsVisible;`}
  descriptionTitle={'useIsVisible-Hook 源码'}
  description={
    <> 
      <h3>使用场景</h3>
      <span>1: 虚拟渲染</span>
      <span>2: 懒加载</span>
    </>
  }
/>