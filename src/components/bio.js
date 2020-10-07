/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { jsx, Styled } from "theme-ui"

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
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <Styled.p>
          Written by{" "}
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
    </div>
  )
}

export default Bio
