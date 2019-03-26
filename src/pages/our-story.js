import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import styled from "styled-components"

const CTASpan = styled("span")`
   margin-right: 10px;
   text-decoration: underline;
   color: orange;
`;

const OurStoryPage = () => (
    <Layout>
       <p style={{ textAlign: `center` }}>Lily and Rivka created the All-Knowing Plate in just a week!</p>
       <Image filename="founders.jpg" />
       <h3 style={{ textAlign: `center` }}>The Millennial's Dream</h3>
       <p style={{ textAlign: `center` }}>We were sick and tired of working hard to cook a good meal and having it come out just mediocre.
          If only our food could taste scrumptious all the time! That’s when we started brainstorming and the
          concept of the All-Knowing Plate was born!
      </p>
      <p style={{ textAlign: `center` }}>Imagine a plate…with sensors inside it that make your taste buds tingle. The All-Knowing Plate…the plate that knows!</p>
      <p style={{ textAlign: `center` }}>Food tastes better than ever!</p>
      <p style={{ textAlign: `center` }}>Your plate cleans itself!</p>
      <p style={{ textAlign: `center` }}>Your data is protected!</p>
      <p style={{ textAlign: `center` }}>NEVER DO THE DISHES AGAIN!!!</p>
      <p style={{ textAlign: `center` }}><CTASpan>BUY NOW!!!</CTASpan><CTASpan>BUY NOW!!!</CTASpan><CTASpan>BUY NOW!!!</CTASpan></p>
    </Layout>
  )

  export default OurStoryPage