import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import About from "../components/about";
import ColumnContainer from "../components/layout/ColumnContainer";
import FindUs from "../components/FindUs";
import Volunteers from "../components/Volunteers";
import Orchard from "../components/Orchard";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ColumnContainer style={{ scrollBehavior: "smooth" }}>
      <Hero />
      <About />
      <Orchard />
      <FindUs />
      <Volunteers />
    </ColumnContainer>
  </Layout>
);

export default IndexPage;
