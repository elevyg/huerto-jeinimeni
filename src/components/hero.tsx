import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import ColumnContainer from "./layout/ColumnContainer";

interface Props {}

const Hero = (props: Props) => {
  return (
    <StaticImage
      alt="Lechugas"
      src="../images/lechugas.jpg"
      style={{
        width: "100vw",
        height: "90vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  );
};

export default Hero;
