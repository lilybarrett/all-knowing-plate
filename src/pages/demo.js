import React from "react";
import Layout from "../components/layout";

const DemoPage = () => (
    <Layout>
        <div style={{ textAlign: "center" }}>
            <h1>Watch the magic of the All Knowing Plate!</h1>
            <video width="100%" controls>
                <source src="https://s3.amazonaws.com/plate-project/plate_movie.mp4" type="video/mp4" />
            </video>
        </div>
    </Layout>
  );

  export default DemoPage;
