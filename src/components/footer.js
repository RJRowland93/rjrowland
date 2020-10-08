import React from "react"
import PropTypes from "prop-types"
import { Styled, Flex, Container } from "theme-ui"

const Footer = ({ social }) => (
  <Container
    as="footer"
    mt={2}
    pt={2}
    sx={{
      borderTop: "3px solid",
      borderColor: "secondary",
    }}
  >
    <Flex sx={{ justifyContent: "space-around" }}>
      {social.map(({ name, url }) => (
        <Styled.h4>
          <Styled.a
            sx={{ width: "100%", textAlign: "center" }}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </Styled.a>
        </Styled.h4>
      ))}
    </Flex>
  </Container>
)

Footer.propTypes = {
  social: PropTypes.array.isRequired,
}

export default Footer
