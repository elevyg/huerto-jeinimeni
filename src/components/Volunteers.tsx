import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { spacing, theme } from "../../utils";
import ColumnContainer from "./layout/ColumnContainer";

interface Props {}

const Volunteers = (props: Props) => {
  return (
    <ColumnContainer
      section
      style={{
        backgroundColor: theme.palette.grey[100],
        paddingLeft: spacing.xlarge,
      }}
      id="volunteers"
    >
      <h1
        style={{
          marginTop: spacing.medium,
        }}
      >
        Voluntariado
      </h1>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <StaticImage
          src="../images/niki-working.jpg"
          alt="Niki Working"
          width={500}
          style={{ borderRadius: 1000, overflow: "hidden" }}
        />
        <p
          style={{
            paddingLeft: spacing.xxlarge,
            paddingRight: spacing.xxlarge,
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
          voluptatem eaque accusamus, in consectetur quibusdam ex voluptates
          animi sunt commodi.
        </p>
      </div>
    </ColumnContainer>
  );
};

export default Volunteers;
