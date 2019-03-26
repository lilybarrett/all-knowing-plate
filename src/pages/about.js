import React from "react";
import Layout from "../components/layout";
import Image from "../components/image";
import styled from "styled-components";
import { FaUtensilSpoon, FaRegGrinHearts } from "react-icons/fa";
import { MdSentimentSatisfied, MdDataUsage } from "react-icons/md";

const Wrapper = styled("div")`
    max-width: 600px;
    margin: 0 auto;
`;

const HighlightedPhrase = styled("span")`
    color: orange;
`;

const LineItem = styled("li")`
    margin-bottom: 15px;
    list-style-type: none;
`;

const IconSpan = styled("span")`
    margin-right: 10px;
    vertical-align: middle;
`;

const TextSpan = styled("span")`
    line-height: 25px;
`;

const AboutPage = () => (
    <Layout>
        <Wrapper>
            <p><TextSpan>Bad cook? <HighlightedPhrase>No problem!</HighlightedPhrase> Serve meals on these plates and you'll leave your guests -- and maybe even yourself -- marveling over your skill. <HighlightedPhrase>We invite you to be our guest!</HighlightedPhrase></TextSpan></p>
            <ul>
                <LineItem>
                    <IconSpan><FaUtensilSpoon /></IconSpan><TextSpan>Our technogically advanced plates use <HighlightedPhrase>visual cues</HighlightedPhrase>, <HighlightedPhrase>sensory hints</HighlightedPhrase>, and the <HighlightedPhrase>rate of a guest's chewing</HighlightedPhrase> to instantaneously discern responses to food</TextSpan>
                </LineItem>
                <LineItem>
                    <IconSpan><MdSentimentSatisfied /></IconSpan><TextSpan>Based on what the guest craves, our plates enhance a food's <HighlightedPhrase>sweetness,</HighlightedPhrase> <HighlightedPhrase>saltiness</HighlightedPhrase>, <HighlightedPhrase>sourness</HighlightedPhrase>, <HighlightedPhrase>umami</HighlightedPhrase>, or other desired flavors</TextSpan>
                </LineItem>
                <LineItem>
                    <IconSpan><MdDataUsage /></IconSpan><TextSpan><HighlightedPhrase>Our plates delete data</HighlightedPhrase> when they sense the guest is done with his or her meal. The All-Knowing Plate never stores or shares any private information about guests' food preferences, unless it's with our powerful and financially generous partners.</TextSpan>
                </LineItem>
                <LineItem>
                    <IconSpan><FaRegGrinHearts /></IconSpan><TextSpan>The best part: Our plates are <HighlightedPhrase>self-cleaning</HighlightedPhrase>. Never do the dishes again!</TextSpan>
                </LineItem>
            </ul>
            <Image filename="spoons.jpg" />
        </Wrapper>
    </Layout>
  );

  export default AboutPage;
