import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10

export const CounterEffect = () => {

  const [counter, setCounter] = useState(5)

  const counterElement = useRef<HTMLHeadingElement>(null)

  const handleClick = () => {
    if (counter >= MAXIMUN_COUNT) return
    setCounter(previusValue => previusValue + 1)
  }

  useEffect(() => {
    if (counter < MAXIMUN_COUNT) return
    console.log('%cSe llego al valor maximo de 10', 'color:white; background-color:black')
    const timeLine = gsap.timeline()
    timeLine.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
    timeLine.to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })
  }, [counter])

  return (
    <>
      <h1>CounterEFFECT</h1>
      <h2 ref={counterElement}>{counter}</h2>

      <button onClick={handleClick}>
        +1
      </button>
    </>
  )
}
