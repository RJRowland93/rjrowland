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
        <Container
          as="nav"
          sx={{
            zIndex: isOpen ? 2 : -1,
            position: "absolute",
            width: "100%",
            height: isOpen ? "80vh" : "0",
            visibility: isOpen ? "visible" : "hidden",
          }}
        >
          {menuLinks.map(({ name, link }) => {
            const isActive =
              typeof window !== "undefined" &&
              window?.location?.pathname === link
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
        </Container>
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
