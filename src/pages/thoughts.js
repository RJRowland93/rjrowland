import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostListing from "../components/postListing"

const ThoughtsIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const thoughts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All thoughts" />
      <Bio />

      {thoughts.map(PostListing)}
    </Layout>
  )
}

export default ThoughtsIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/thoughts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
        timeToRead
      }
    }
  }
`
