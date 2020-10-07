import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Styled, Container, Flex, NavLink, Box } from "theme-ui"
import Headroom from "react-headroom"
import { Sling as Hamburger } from "hamburger-react"

const Header = ({ siteTitle, menuLinks, isOpen, setOpen }) => {
  return (
    <Headroom>
      <Container>
        <Flex
          as="header"
          bg="background"
          py={2}
          sx={{ justifyContent: "space-between" }}
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
                justifyContent: "flex-end",
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
            sx={{
              display: ["block", "none", "none"],
              position: "absolute",
              width: "100%",
            }}
          >
            {menuLinks.map(({ name, link }) => (
              <Styled.h3>
                <NavLink
                  as={Link}
                  to={link}
                  py={2}
                  sx={{ width: "100%", textAlign: "center" }}
                >
                  {name}
                </NavLink>
              </Styled.h3>
            ))}
          </Box>
        )}
      </Container>
    </Headroom>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array,
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
}

Header.defaultProps = {
  siteTitle: ``,
  menuLinks: [],
}

export default Header
