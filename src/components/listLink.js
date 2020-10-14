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
      width: "100%",
      outline: "2px solid",
      outlineColor: "secondary",
      "&:hover": {
        outline: "2px solid",
        outlineColor: "muted",
      },
    }}
  >
    {props.children}
  </Link>
)

export default ListLink
