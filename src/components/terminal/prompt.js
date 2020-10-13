/** @jsx jsx */
import React, { useEffect, useRef, useState } from "react"
import { jsx } from "theme-ui"

function Prompt({
  command,
  output,
  isActive,
  typingSpeed,
  typingDelay,
  outputDelay,
  user,
  computer,
  handleComplete = () => {},
}) {
  const elementRef = useRef()
  useEffect(() => elementRef.current.scrollIntoView(), [])

  const [left, setLeft] = useState(command)
  const [typing, setTyping] = useState("")
  const [result, setResult] = useState(null)
  const [isPrinting, setIsPrinting] = useState(false)

  const typingDelayTimeout = useRef(null)
  const resultDelayTimeout = useRef(null)
  const typingInterval = useRef(null)

  function printChar() {
    if (left.length) {
      const [c, ...rest] = left
      setLeft(rest)
      setTyping(prev => prev + c)
    } else {
      resultDelayTimeout.current = setTimeout(() => {
        setResult(output)
        handleComplete()
      }, outputDelay)
    }
  }

  useEffect(() => {
    if (isPrinting) {
      typingInterval.current = setTimeout(printChar, typingSpeed)
    }
    return () => {
      clearTimeout(resultDelayTimeout.current)
      clearInterval(typingInterval.current)
    }
  }, [isPrinting, left])

  useEffect(() => {
    typingDelayTimeout.current = setTimeout(
      () => setIsPrinting(true),
      typingDelay
    )

    return () => {
      clearTimeout(typingDelayTimeout.current)
    }
  }, [])

  return (
    <>
      <div>
        <span
          sx={{
            color: "primary",
          }}
        >
          {`${user}@${computer}`}
        </span>
        :<b>~</b>
        <span sx={{ pr: 1 }}>$</span>
        <span
          ref={elementRef}
          sx={{
            borderRight: isActive ? "1px solid white" : "",
            animation: "blink 1s step-end infinite",
            "@keyframes blink": {
              from: {},
              to: {
                borderColor: "white",
              },
              "50%": {
                borderColor: "transparent",
              },
            },
          }}
        >
          {typing}
        </span>
      </div>
      {result}
    </>
  )
}

export default Prompt
