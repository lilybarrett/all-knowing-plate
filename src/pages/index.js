import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Slider from "react-slick";
import styled from "styled-components";

const TestimonialSpan = styled("span")`
  font-size: 1.3em;
  font-style: italic;
`;

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <Slider {...settings}>
        <div>
          <Image filename="magic_plate.jpg" />
        </div>
        <div>
          <Image filename="pancakes.jpg" />
        </div>
        <div>
          <Image filename="dinner-party.jpg" />
        </div>
        <div>
          <Image filename="salad-plate.jpg" />
        </div>
        <div>
          <Image filename="cake.jpg" />
        </div>
      </Slider>
    );
  }
}

const IndexPage = () => (
  <Layout>
    <div style={{ width: `100%`, maxWidth: `600px`, margin: `0 auto`, height: `auto`, textAlign: `center`, marginBottom: `1.45rem` }}>
      <p style={{ color: `#1ac6ff`, textAlign: `center` }}>The plate that (literally) adds spice to your life</p>
    </div>
    <SimpleSlider />
    <div style={{ textAlign: `center`, marginTop: `50px` }}>
      <div style={{ marginBottom: `20px` }}>
        <TestimonialSpan>"I find every single meal I eat now so delicious, as if it's from a five-star restaurant -- And I'm a graduate student with no budget!"</TestimonialSpan> - Amanda K., Hong Kong, China
      </div>
      <div style={{ marginBottom: `20px` }}>
        <TestimonialSpan>"This plate has changed my life!"</TestimonialSpan> - Maura H., Austin, Texas
      </div>
      <div style={{ marginBottom: `20px` }}>
        <TestimonialSpan>"My wife has never been impressed with my cooking. Now she loves it!"</TestimonialSpan> - Frank M., Boston, MA
      </div>
    </div>
  </Layout>
)

export default IndexPage
