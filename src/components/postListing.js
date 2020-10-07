/** @jsx jsx */
import { jsx, css, Styled, Box } from "theme-ui"

import ListLink from "./listLink"

const PostListing = props => {
  const title = props.frontmatter.title || props.fields.slug

  return (
    <ListLink key={props.fields.slug} to={props.fields.slug}>
      <article
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <Styled.h2 css={css({ color: "primary" })}>{title}</Styled.h2>
          <small>{props.frontmatter.date}</small>
          <Box as="span" mx={2}>
            &middot;
          </Box>
          <small>{props.timeToRead} min read</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: props.frontmatter.description || props.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </article>
    </ListLink>
  )
}

export default PostListing
