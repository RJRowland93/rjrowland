import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "theme-ui"

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

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title}
        menuLinks={data.site.siteMetadata?.menuLinks}
      />
      <Container sx={{ minHeight: "100%" }}>{children}</Container>
      <Footer
        social={data.site.siteMetadata?.socialLinks}
        menuLinks={data.site.siteMetadata?.menuLinks}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
