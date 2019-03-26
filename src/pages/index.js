import React from "react";
import Layout from "../components/layout";
import Image from "../components/image";
import Slider from "react-slick";
import styled from "styled-components";

const TestimonialSpan = styled("span")`
  font-size: 1.3em;
  font-style: italic;
`;

const TestimonialBlock = styled("div")`
  margin-bottom: 20px;
`;

const TestimonialsWrapper = styled("div")`
  text-align: center;
  margin-top: 50px;
`;

const SubtitleWrapper = styled("div")`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  height: auto;
  text-align: center;
  margin-bottom: 1.45rem;
`;

const Subtitle = styled("p")`
  color: #1ac6ff;
  text-align: center;
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
};

const IndexPage = () => (
  <Layout>
    <SubtitleWrapper>
      <Subtitle>The plate that (literally) adds spice to your life</Subtitle>
    </SubtitleWrapper>
    <SimpleSlider />
    <TestimonialsWrapper>
      <TestimonialBlock>
        <TestimonialSpan>"I find every single meal I eat now so delicious, as if it's from a five-star restaurant -- And I'm a graduate student with no budget!"</TestimonialSpan> - Amanda K., Hong Kong, China
      </TestimonialBlock>
      <TestimonialBlock>
        <TestimonialSpan>"This plate has changed my life!"</TestimonialSpan> - Maura H., Austin, Texas
      </TestimonialBlock>
      <TestimonialBlock>
        <TestimonialSpan>"My wife has never been impressed with my cooking. Now she loves it!"</TestimonialSpan> - Frank M., Boston, MA
      </TestimonialBlock>
    </TestimonialsWrapper>
  </Layout>
);

export default IndexPage;

