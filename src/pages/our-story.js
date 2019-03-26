import React from "react";
import Layout from "../components/layout";
import Image from "../components/image";
import styled from "styled-components";
import { Link } from "gatsby";

const CTASpan = styled("span")`
   margin-right: 10px;
   text-decoration: underline;
   color: orange;
`;

const Paragraph = styled("p")`
   text-align: center;
`;

const SubHeader = styled("h3")`
   text-align: center;
`;

const OurStoryPage = () => (
    <Layout>
       <Paragraph>Lily and Rivka created the All-Knowing Plate in just a week!</Paragraph>
       <Image filename="founders.jpg" />
       <SubHeader>The Millennial's Dream</SubHeader>
       <Paragraph>We were sick and tired of working hard to cook a good meal and having it come out just mediocre.
          If only our food could taste scrumptious all the time! That’s when we started brainstorming and the
          concept of the All-Knowing Plate was born!
      </Paragraph>
      <Paragraph>Imagine a plate…with sensors inside it that make your taste buds tingle. The All-Knowing Plate…the plate that knows!</Paragraph>
      <Paragraph>Food tastes better than ever!</Paragraph>
      <Paragraph>Your plate cleans itself!</Paragraph>
      <Paragraph>Your data is protected!</Paragraph>
      <Paragraph>NEVER DO THE DISHES AGAIN!!!</Paragraph>
      <Paragraph><Link to="/shop/"><CTASpan>BUY NOW!!!</CTASpan><CTASpan>BUY NOW!!!</CTASpan><CTASpan>BUY NOW!!!</CTASpan></Link></Paragraph>
    </Layout>
  );

  export default OurStoryPage;
  