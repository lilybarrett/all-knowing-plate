import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"

const AboutPage = () => (
    <Layout>
        <p>Bad cook? No problem! Serve your guests meals on these plates and you'll leave them raving about your skill. Be our guest!</p>
        <Image filename="magic_plate.jpg" />
        <ul>
            <li>
                Self-cleaning
            </li>
            <li>
                Use visual cues, sensory hints, and the rate of a guest's chewing to discern responses to food
            </li>
            <li>
                Enhances sweetness, saltiness, or any other flavor that the user craves
            </li>
            <li>
                Deletes data when they sense the guest is done with his or her meal.  The All-Knowing Plate does not store any private information about guests' food preferences.
            </li>
        </ul>
    </Layout>
  )

  export default AboutPage