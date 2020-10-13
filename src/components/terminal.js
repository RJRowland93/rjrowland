/** @jsx jsx */
import React, { useEffect, useRef, useState } from "react"
import { jsx, IconButton } from "theme-ui"

function MenuButton({ color = "white", handleClick = () => {} }) {
  return (
    <IconButton
      p={0}
      sx={{ width: "20px", height: "20px" }}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="12"
        height="12"
        fill="currentcolor"
      >
        <circle
          r={11}
          cx={12}
          cy={12}
          fill={color}
          stroke="currentcolor"
          strokeWidth={2}
        />
      </svg>
    </IconButton>
  )
}

function Menu() {
  return (
    <div sx={{ display: "flex", backgroundColor: "muted" }}>
      <MenuButton color="red" />
      <MenuButton color="yellow" />
      <MenuButton color="green" />
    </div>
  )
}

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

function Terminal({ height, user, computer, renderIntro, prompts }) {
  const [state, setState] = useState([])
  const [left, setLeft] = useState(prompts)

  function printNext() {
    if (left.length) {
      const [head, ...rest] = left
      setLeft(rest)
      setState(prev => prev.concat([head]))
    }
  }

  useEffect(() => {
    printNext()
  }, [])

  return (
    <section sx={{ borderRadius: "5px" }}>
      <Menu />
      <div
        sx={{
          backgroundColor: "secondary",
          height,
          maxHeight: height,
          overflowY: "scroll",
          "::-webkit-scrollbar": {
            width: "3px",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "muted",
          },
        }}
      >
        {renderIntro()}
        {state.map(([c, r], i, a) => (
          <Prompt
            user={user}
            computer={computer}
            command={c}
            output={r}
            typingSpeed={100}
            typingDelay={500}
            outputDelay={500}
            isActive={i === a.length - 1}
            handleComplete={printNext}
          />
        ))}
      </div>
    </section>
  )
}

export default Terminal
