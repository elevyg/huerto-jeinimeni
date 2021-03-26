/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import { mq, spacing, theme } from "../../utils";
import { createStyles } from "../types/emotion-styles";
import ColumnContainer from "./layout/ColumnContainer";

interface Props {}

const Volunteers = (props: Props) => {
  return (
    <ColumnContainer section style={styles.columnContainer} id="volunteers">
      <h1
        style={{
          marginTop: spacing.medium,
        }}
      >
        Voluntariado
      </h1>
      <div style={styles.container}>
        <StaticImage
          src="../images/niki-working.jpg"
          alt="Niki Working"
          width={500}
          style={styles.image}
        />
        <p style={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
          voluptatem eaque accusamus, in consectetur quibusdam ex voluptates
          animi sunt commodi.
        </p>
      </div>
    </ColumnContainer>
  );
};

export default Volunteers;

const styles = createStyles({
  columnContainer: {
    backgroundColor: theme.palette.grey[100],
  },
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    [mq("medium")]: {
      flexDirection: "row",
      paddingLeft: spacing.xlarge,
    },
  },
  image: { borderRadius: 1000, overflow: "hidden" },
  text: {
    paddingTop: spacing.large,
    [mq("medium")]: {
      paddingTop: 0,
    },
    paddingLeft: spacing.xxlarge,
    paddingRight: spacing.xxlarge,
  },
});
