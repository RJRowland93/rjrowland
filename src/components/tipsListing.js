/** @jsx jsx */
import { jsx, Styled, Flex, Box } from "theme-ui"

import ListLink from "./listLink"

const PostListing = post => {
  const title = post.frontmatter.title || post.fields.slug
  const tags = post.frontmatter.tags

  return (
    <ListLink key={post.fields.slug} to={post.fields.slug}>
      <Flex
        as="article"
        sx={{ width: "100%", justifyContent: "space-between" }}
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <Styled.h2 sx={{ color: "primary", m: 0 }}>{title}</Styled.h2>
        </header>
        <section>
          {/* <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
          /> */}
          {tags &&
            tags.map(tag => (
              <Box
                as="small"
                p={1}
                mr={2}
                sx={{ backgroundColor: "secondary" }}
              >
                {tag}
              </Box>
            ))}
        </section>
      </Flex>
    </ListLink>
  )
}

export default PostListing
