/** @jsx jsx */
import { graphql, Link } from "gatsby"
import { jsx, NavLink } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Terminal from "../components/terminal"

const Homepage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const menuLinks = data.site.siteMetadata?.menuLinks || []
  const author = data.site.siteMetadata?.author?.name || ``

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Homepage" />
      <Terminal
        height={500}
        user={author.split(" ")[0].toLowerCase()}
        computer={siteTitle}
        renderIntro={() => (
          <p>
            Welcome to{" "}
            <NavLink as={Link} to="/">
              {`${siteTitle}.com`}
            </NavLink>
            !
          </p>
        )}
        prompts={[
          [
            "cat ./README.md",
            <p>I am currently a software engineer at The Home Depot.</p>,
          ],
          [
            "cat ./thoughts.md",
            <p>
              Head on over to my{" "}
              <NavLink as={Link} to="/thoughts">
                thoughts
              </NavLink>{" "}
              page for some helpful advice and reflections on my experiences in
              the software industry.
            </p>,
          ],
          [
            "cat ./tips.md",
            <p>
              The{" "}
              <NavLink as={Link} to="/tips">
                tips
              </NavLink>{" "}
              page is where I collect useful code snippets and commands.
            </p>,
          ],
          [
            "ls ./menu",
            <p>
              {menuLinks.map(({ name, link }) => (
                <NavLink as={Link} sx={{ pr: 1 }} to={link}>
                  {name.toLowerCase()}
                </NavLink>
              ))}
            </p>,
          ],
          ["", null],
        ]}
      />
    </Layout>
  )
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
        menuLinks {
          name
          link
        }
      }
    }
  }
`
