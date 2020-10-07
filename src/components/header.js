import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css, Styled, Flex, NavLink, Box } from "theme-ui"
import Headroom from "react-headroom"
import { Sling as Hamburger } from "hamburger-react"

const Header = ({ siteTitle, menuLinks }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <Headroom>
      <Flex
        as="header"
        bg="secondary"
        py={2}
        sx={{ justifyContent: "space-around" }}
      >
        <Styled.h1>
          <Styled.a as={Link} to="/">
            {siteTitle}
          </Styled.a>
        </Styled.h1>
        <Box sx={{ display: ["block", "none", "none"], alignSelf: "center" }}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </Box>
        <Box
          sx={{
            display: ["none", "block", "block"],
            alignSelf: "center",
            width: "50%",
          }}
        >
          <Flex
            as="nav"
            sx={{
              justifyContent: "space-around",
            }}
          >
            {menuLinks.map(({ name, link }) => (
              <Styled.h3>
                <NavLink as={Link} to={link} px={2}>
                  {name}
                </NavLink>
              </Styled.h3>
            ))}
          </Flex>
        </Box>
      </Flex>
      {isOpen && (
        <Box
          as="nav"
          bg="secondary"
          sx={{
            display: ["block", "none", "none"],
            position: "absolute",
            width: "100%",
          }}
        >
          {menuLinks.map(({ name, link }) => (
            <Styled.h3 css={css({ textAlign: "center" })}>
              <NavLink as={Link} to={link} py={2}>
                {name}
              </NavLink>
            </Styled.h3>
          ))}
        </Box>
      )}
    </Headroom>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  menuLinks: [],
}

export default Header
