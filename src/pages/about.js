import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import styled from "styled-components"

const HighlightedPhrase = styled("span")`
    color: orange;
`;

const LineItem = styled("li")`
    margin-bottom: 15px;
`;

const AboutPage = () => (
    <Layout>
        <p>Bad cook? <HighlightedPhrase>No problem!</HighlightedPhrase> Serve meals on these plates and you'll leave your guests raving about your skill. <HighlightedPhrase>Be our guest!</HighlightedPhrase></p>
        <ul>
            <LineItem>
                Use <HighlightedPhrase>visual cues</HighlightedPhrase>, <HighlightedPhrase>sensory hints</HighlightedPhrase>, and the <HighlightedPhrase>rate of a guest's chewing</HighlightedPhrase> to discern responses to food
            </LineItem>
            <LineItem>
                Based on what the guest craves, enhances food's <HighlightedPhrase>sweetness,</HighlightedPhrase> <HighlightedPhrase>saltiness</HighlightedPhrase>, <HighlightedPhrase>sourness</HighlightedPhrase>, <HighlightedPhrase>umami</HighlightedPhrase>, or other flavors detected as desired 
            </LineItem>
            <LineItem>
                <HighlightedPhrase>Deletes data</HighlightedPhrase> when they sense the guest is done with his or her meal.  The All-Knowing Plate does not store any private information about guests' food preferences.
            </LineItem>
             <LineItem>
                <HighlightedPhrase>Self-cleaning</HighlightedPhrase>
            </LineItem>
        </ul>
        <Image filename="spoons.jpg" />
    </Layout>
  )

  export default AboutPage