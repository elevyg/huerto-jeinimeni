/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { spacing, mq } from "../../utils";
import { createStyles } from "../types/emotion-styles";
import ColumnContainer from "./layout/ColumnContainer";

interface Props {}

const FindUs = (props: Props) => {
  return (
    <ColumnContainer section id="find-us" style={{ paddingBottom: 0 }}>
      <h1 css={styles.title}>Donde encontrarnos</h1>
      <div css={styles.container}>
        <div css={{ ...styles.innerContainer, ...styles.paragraphContainer }}>
          <p>
            Estamos ubicados Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Facere enim repellendus quod placeat sit adipisci, maxime eius
            recusandae aliquam illum dolor asperiores itaque dolorem ad,
            quibusdam sequi id incidunt cupiditate harum, nostrum vero!
            Necessitatibus fugit doloribus saepe iusto, molestiae dolor
            voluptate nostrum ipsam, maiores eaque fugiat cupiditate velit
            consequatur error?{" "}
          </p>
        </div>
        <div css={styles.innerContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.893391791001!2d-71.67480048208056!3d-46.589168545528786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDM1JzIxLjIiUyA3McKwNDAnMzQuNiJX!5e1!3m2!1sen!2scl!4v1616765296139!5m2!1sen!2scl"
            style={styles.map}
          ></iframe>
        </div>
      </div>
    </ColumnContainer>
  );
};

export default FindUs;

const styles = createStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    [mq("medium")]: {
      flexDirection: "row",
    },
    alignItems: "center",
    justifyContent: "space-between",
    width: "100vw",
  },
  map: { width: "100%", height: "100%" },
  innerContainer: {
    width: "100%",
    height: 300,
    [mq("large")]: {
      width: "50%",
      height: 600,
    },
  },
  paragraphContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.medium,
    marginLeft: spacing.medium,
    [mq("medium")]: {
      marginRight: spacing.xlarge,
      marginLeft: spacing.xlarge,
    },
  },
});
