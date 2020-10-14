/** @jsx jsx */
import { useEffect, useState } from "react"
import { jsx } from "theme-ui"

import Menu from "./menu"
import Prompt from "./prompt"

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
    <section>
      <Menu />
      <div
        sx={{
          p: 1,
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
