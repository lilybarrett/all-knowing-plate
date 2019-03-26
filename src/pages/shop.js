import React from "react";
import Layout from "../components/layout";
import Image from "../components/image";
import styled from "styled-components";

const OutOfStock = styled("p")`
   text-align: center;
`;

const ShopPage = () => (
    <Layout>
       <OutOfStock>Oops! We are all out of stock due to extreme interest! Please check back later.</OutOfStock>
       <Image filename="out-of-stock.jpg" />
    </Layout>
  );

  export default ShopPage;
  