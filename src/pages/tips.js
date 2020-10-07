import React from "react"
import { Link, graphql } from "gatsby"
import { Styled } from "theme-ui"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TipsIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const tips = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All tips" />
      <Bio />

      <ol style={{ listStyle: `none` }}>
        {tips.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <Styled.h2>
                    <Styled.a as={Link} to={post.fields.slug}>
                      {title}
                    </Styled.a>
                  </Styled.h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <Styled.p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default TipsIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/tips/" } }
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
      }
    }
  }
`
