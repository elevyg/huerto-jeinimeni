import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { spacing, theme } from "../../utils";
import ColumnContainer from "./layout/ColumnContainer";

interface Props {}

const About = (props: Props) => {
  return (
    <ColumnContainer section id="about">
      <h1
        style={{
          marginTop: spacing.medium,
        }}
      >
        Sobre Nosotros
      </h1>
      <StaticImage
        src="../images/nosotros.jpg"
        alt="Jose y Niki"
        style={{ width: "20rem" }}
      />
    </ColumnContainer>
  );
};

export default About;
