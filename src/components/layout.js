import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Flex } from "theme-ui"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleAndMenuQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
          socialLinks {
            name
            url
          }
        }
      }
    }
  `)

  const [isOpen, setOpen] = useState(false)
  return (
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header
        siteTitle={data.site.siteMetadata?.title}
        menuLinks={data.site.siteMetadata?.menuLinks}
        isOpen={isOpen}
        setOpen={setOpen}
      />

      <Container
        as="main"
        sx={{
          flex: "1",
          opacity: isOpen ? "0.1" : "1",
        }}
      >
        {children}
      </Container>
      <Footer
        social={data.site.siteMetadata?.socialLinks}
        menuLinks={data.site.siteMetadata?.menuLinks}
      />
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
