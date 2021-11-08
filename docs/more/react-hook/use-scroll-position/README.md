# useScrollPosition 
<RcCard
  cardTitle={'usage'}
  cardExtra={'useScrollPostion'}
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
  descriptionTitle={'useScrollPostion-Hook SoundCode'}
  description={
    <> 
      <h3>Usage scenario</h3>
      <span>1: Listen for scrolling events</span>
    </>
  }
/>
