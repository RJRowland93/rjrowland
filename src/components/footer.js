/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx, Styled, Flex, Container } from "theme-ui"
import { GitHub, Linkedin } from "react-feather"

const icons = {
  GitHub: <GitHub />,
  Linkedin: <Linkedin />,
}

const Footer = ({ social }) => (
  <Container
    as="footer"
    mt={3}
    pt={2}
    sx={{
      borderTop: "3px solid",
      borderColor: "secondary",
    }}
  >
    <Flex sx={{ justifyContent: "center" }}>
      {social.map(({ name, url }) => (
        <Styled.a href={url} target="_blank" rel="noreferrer" sx={{ p: 1 }}>
          {icons[name]}
        </Styled.a>
      ))}
    </Flex>
  </Container>
)

Footer.propTypes = {
  social: PropTypes.array.isRequired,
}

export default Footer
