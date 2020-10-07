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
      width: "100%",
      "&:hover": {
        // transition: "outline 0.6s linear",
        outline: "2px solid",
        outlineColor: "secondary",
      },
    }}
  >
    {props.children}
  </Link>
)

export default ListLink
