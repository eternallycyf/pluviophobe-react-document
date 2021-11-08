## useWinSize 

<RcCard
  cardTitle={'usage'}
  cardExtra={'useWinSize'}
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
  descriptionTitle={'useWinSize-Hook SoundCode'}
  description={
    <> 
      <h3>Usage scenario</h3>
      <span>1: get screen size</span>
    </>
  }
/>
