import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const query = graphql`
  {
    person: file(relativePath: { eq: "person.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = ({ showPerson }) => {
  const data = useStaticQuery(query)
  const imageData = data.person.childImageSharp.fluid

  return (
    <header className="hero">
      {showPerson && <Image fluid={imageData} className="hero-person" />}
    </header>
  )
}

export default Hero
