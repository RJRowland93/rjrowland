/** @jsx jsx */
import { jsx, css, Styled, Box } from "theme-ui"

import ListLink from "./listLink"

const PostListing = post => {
  const title = post.frontmatter.title || post.fields.slug
  const tags = post.frontmatter.tags

  return (
    <ListLink key={post.fields.slug} to={post.fields.slug}>
      <article
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <Styled.h2 css={css({ color: "primary" })}>{title}</Styled.h2>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
          />
          {tags &&
            tags.map(tag => (
              <Box as="span" p={1} mr={2} sx={{ backgroundColor: "secondary" }}>
                {tag}
              </Box>
            ))}
        </section>
      </article>
    </ListLink>
  )
}

export default PostListing
