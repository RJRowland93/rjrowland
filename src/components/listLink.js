/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"

const ListLink = props => (
  <Link
    {...props}
    sx={{
      display: "flex",
      color: "text",
      textDecoration: "none",
      p: 2,
      my: 2,
      //   mx: 1,
      width: "100%",
      outline: "2px solid",
      outlineColor: "secondary",
      "@media screen and (min-width: 40em)": {
        m: 0,
        outline: "none",
        outlineColor: "none",
      },
      "&:hover": {
        outline: "2px solid",
        outlineColor: "secondary",
      },
    }}
  >
    {props.children}
  </Link>
)

export default ListLink
