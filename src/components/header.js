/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { jsx, Styled, Container, Flex, NavLink, Box } from "theme-ui"
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
          <Styled.h2 sx={{ m: 0, alignSelf: "center" }}>
            <NavLink variant="active" as={Link} to="/">
              {siteTitle}
            </NavLink>
          </Styled.h2>
          <Box sx={{ alignSelf: "center" }}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </Box>
        </Flex>
        {isOpen && (
          <Box
            as="nav"
            sx={{
              zIndex: 2,
              position: "absolute",
              width: "100%",
            }}
          >
            {menuLinks.map(({ name, link }) => {
              const isActive = window?.location?.pathname === link
              return (
                <Styled.h3>
                  <NavLink
                    as={Link}
                    to={link}
                    py={2}
                    sx={{ width: "100%", textAlign: "center" }}
                    variant={isActive ? "active" : "nav"}
                  >
                    {name}
                  </NavLink>
                </Styled.h3>
              )
            })}
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
