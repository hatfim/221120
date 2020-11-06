import React from "react"

import Layout from "../components/layout"
import SVG from "../components/svg"
import SEO from "../components/seo"
import Form from "../components/form"
import logo from "!!raw-loader!../assets/images/logo.svg"

const RSVPPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="border">
      <div className="border__inner">
        <a href="/" className="site-logo">
          <SVG svg={logo} />
        </a>
        <p>What we want most for our wedding is to have our friends and family there to celebrate the occasion with us. So more than anything we`re simply grateful for your presence </p>
        <Form />
      </div>
    </div>
  </Layout>
)

export default RSVPPage
