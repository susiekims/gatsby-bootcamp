import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => (
  <Layout>
    <Head title="About" />
    <h1>About</h1>
    <p>Hey my name is susie and I live in toronto</p>
    <p>
      <Link to="/contact">Want to work with me? Click here</Link>
    </p>
  </Layout>
)

export default AboutPage
