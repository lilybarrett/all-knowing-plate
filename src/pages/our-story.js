import React from "react";
import Layout from "../components/layout";
import Image from "../components/image";
import styled from "styled-components";
import { Link } from "gatsby";

const HighlightedPhrase = styled("span")`
    color: orange;
`;

const CTASpan = styled("span")`
   margin-right: 10px;
   text-decoration: underline;
   color: orange;
`;

const Intro = styled("p")`
   margin: 30px 0;
   text-align: center;
`;

const Paragraph = styled("p")`
   text-align: center;
   padding: 15px;
   border-bottom: 1px solid orange;
   max-width: 700px;
   margin: auto;
   margin-bottom: 20px;
`;

const SubHeader = styled("h3")`
   text-align: center;
`;

const Wrapper = styled("div")`
   max-width: 700px;
   margin: 0 auto;
`;

const SellingPoint = styled("div")`
   text-align: center;
   background-color: #1ac6ff;
   color: white;
   box-shadow: 0 0 4px 1px orange;
   max-width: 700px;
   margin: auto;
   margin-bottom: 20px;
   max-width: 300px;
   padding: 20px;
   font-size: 20px;
`;

const BuyWrapper = styled("div")`
   font-size: 30px;
   text-align: center;
   margin-top: 30px;
`;

const OurStoryPage = () => (
    <Layout>
       <Wrapper>
         <Intro><HighlightedPhrase>Twin sisters Lily and Rivka</HighlightedPhrase> created the All-Knowing Plate in <HighlightedPhrase>just a week!</HighlightedPhrase></Intro>
         <Image filename="founders.jpg" />
         <SubHeader><HighlightedPhrase>The Millennial's Dream</HighlightedPhrase></SubHeader>
         <Paragraph>We were sick and tired of working hard to cook a good meal and having it come out just mediocre or completely awful. We're not cooks, but we love to eat!
            If only our food could taste scrumptious all the time! If only we could accommodate different people's desires for spicier, sweeter, or saltier food! If only we could spread the love of food to everyone. Food brings people together; There's nothing like bonding over a meal that everyone enjoys.
         </Paragraph>
         <Paragraph>That’s when we started brainstorming and the
            concept of the <HighlightedPhrase>All-Knowing Plate</HighlightedPhrase> was born!
         </Paragraph>
         <Paragraph>Imagine a plate with sensors inside it that make your taste buds <HighlightedPhrase>tingle.</HighlightedPhrase> The All-Knowing Plate -- <HighlightedPhrase>the plate that knows!</HighlightedPhrase></Paragraph>
         <SellingPoint>Food tastes better than ever!</SellingPoint>
         <SellingPoint>Your plate cleans itself! NEVER DO THE DISHES AGAIN!</SellingPoint>
         <SellingPoint>Your data is protected (except when our powerful and financially generous partners need it!)</SellingPoint>
         <BuyWrapper><Link to="/shop/"><CTASpan>BUY NOW!!!</CTASpan><CTASpan>BUY NOW!!!</CTASpan><CTASpan>BUY NOW!!!</CTASpan></Link></BuyWrapper>
       </Wrapper>
    </Layout>
  );

  export default OurStoryPage;
  