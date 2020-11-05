import React from "react"
import SEO from "@components/seo"
import {
  Layout,
  Hero,
  Nav,
  Date,
  Separator,
  Schedule,
  Form
} from "@components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Hero  />
  </Layout>
)

export default IndexPage
