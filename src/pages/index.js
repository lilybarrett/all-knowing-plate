import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <div style={{ width: `100%`, maxWidth: `600px`, margin: `0 auto`, height: `auto`, textAlign: `center`, marginBottom: `1.45rem` }}>
      <p style={{ color: `#1ac6ff`, textAlign: `center` }}>The plate that (literally) adds spice to your life</p>
      <Image />
    </div>
    <div style={{ textAlign: `center` }}>
      <div style={{ marginBottom: `20px` }}>
        "This plate has changed my life!" - Maura H., Austin, Texas
      </div>
      <div style={{ marginBottom: `20px` }}>
        "I love every single meal I eat now -- And I'm a graduate student with no budget!" - Amanda K., Hong Kong, China
      </div>
      <div style={{ marginBottom: `20px` }}>
        "My wife has never been impressed with my cooking. Now she loves it!" - Frank M., Boston, MA
      </div>
    </div>
  </Layout>
)

export default IndexPage
