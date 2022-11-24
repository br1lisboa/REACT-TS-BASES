import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from "gsap";

export const useCounter = ({ maxCount = 10 }) => {

    const [counter, setCounter] = useState(5)
    const elementToAnimate = useRef<any>(null)
    const timeLine = useRef(gsap.timeline())

    const handleClick = () => {
        if (counter >= maxCount) return
        setCounter(previusValue => previusValue + 1)
    }

    useLayoutEffect(() => {
        timeLine.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
            .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
            .pause()
    }, [])

    useEffect(() => {
        timeLine.current.play(0)
    }, [counter, maxCount])

    return {
        counter,
        elementToAnimate,
        handleClick
    }
}


