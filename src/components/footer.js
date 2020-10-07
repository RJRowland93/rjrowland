import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css, Styled, Flex, Box, NavLink } from "theme-ui"

const style = { flex: "1" }

const Footer = ({ social, menuLinks }) => (
  <Flex
    as="footer"
    bg="secondary"
    py={2}
    sx={{ justifyContent: "space-evenly" }}
  >
    <Box sx={style}>
      {social.map(({ name, url }) => (
        <Styled.h4 css={css({ textAlign: "center" })}>
          <NavLink href={url} target="_blank" rel="noreferrer">
            {name}
          </NavLink>
        </Styled.h4>
      ))}
    </Box>
    <Box as="nav" sx={style}>
      {menuLinks.map(({ name, link }) => (
        <Styled.h4 css={css({ textAlign: "center" })}>
          <NavLink as={Link} to={link}>
            {name}
          </NavLink>
        </Styled.h4>
      ))}
    </Box>
  </Flex>
)

Footer.propTypes = {
  social: PropTypes.array.isRequired,
}

export default Footer
