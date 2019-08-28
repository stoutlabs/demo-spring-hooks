import React from "react"

import Faqs from "../components/Faqs/FaqsList";
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>FAQs</h1>

    <Faqs />
  </Layout>
)

export default IndexPage
