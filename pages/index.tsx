import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { usePages } from './all'
import ListingPage from '../src/simple/ListingPage'

const Home = () => {
  const data = useStaticQuery(query)
  const pages = usePages(data)
  return <ListingPage pages={pages} />
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            tags
          }
        }
      }
    }
  }
`

export default Home