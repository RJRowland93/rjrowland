/** @jsx jsx */
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

export default Menu
