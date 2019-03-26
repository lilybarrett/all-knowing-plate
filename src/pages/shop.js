import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"

const ShopPage = () => (
    <Layout>
       <p style={{ textAlign: `center` }}>Oops! We are all out of stock due to extreme interest! Please check back later.</p>
       <Image filename="out-of-stock.jpg" />
    </Layout>
  )

  export default ShopPage