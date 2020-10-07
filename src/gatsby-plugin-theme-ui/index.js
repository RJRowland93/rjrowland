import merge from "deepmerge"
import { toTheme } from "@theme-ui/typography"
import parnassus from "typography-theme-parnassus"

const orange = "#f2a365"
const white = "#ffffff"
const blueWhite = "#ececec"
const blueGrey = "#222831"
const blue = "#30475e"

export default merge(toTheme(parnassus), {
  colors: {
    text: white,
    background: blueGrey,
    primary: orange,
    secondary: blue,
    muted: blueWhite,
    borderColor: "secondary",
  },
  sizes: {
    container: 768,
  },
  styles: {
    a: { color: "primary" },
    h1: { color: "primary" },
  },
})
