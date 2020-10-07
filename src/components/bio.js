/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { jsx, Styled, Flex, Box } from "theme-ui"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social || {}

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <Flex>
      {avatar && (
        <Image
          sx={{ alignSelf: "center" }}
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      <Box ml={2}>
        {author?.name && (
          <Styled.p>
            Musings by{" "}
            <Styled.a
              sx={{ textDecoration: "none" }}
              href={`https://github.com/${social.github}`}
              target="__blank"
            >
              {author.name}
            </Styled.a>
          </Styled.p>
        )}
        {author?.summary && <Styled.p>{author.summary}</Styled.p>}
      </Box>
    </Flex>
  )
}

export default Bio
