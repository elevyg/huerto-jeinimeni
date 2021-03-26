/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import { mq, spacing, theme } from "../../utils";
import { createStyles } from "../types/emotion-styles";
import ColumnContainer from "./layout/ColumnContainer";

interface Props {}

const Orchard = (props: Props) => {
  return (
    <ColumnContainer
      section
      id="orchard"
      style={{
        backgroundColor: theme.palette.grey[100],
      }}
    >
      <h1>Nuestra Huerta</h1>
      <div css={styles.itemsContainer}>
        <div style={styles.itemContainer}>
          <StaticImage
            src="../images/carrots.jpg"
            alt="carrots"
            css={styles.roundImage}
            width={300}
          />
          <h2 css={styles.itemTitle}>Orgánica y Biointensiva</h2>
          <p css={styles.itemText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            autem consectetur ratione, praesentium molestiae dolores fugiat
            perferendis aspernatur amet iusto a minima! Explicabo aspernatur
            dolorem fuga non ad, voluptas dolore!
          </p>
        </div>
        <div css={styles.itemContainer}>
          <StaticImage
            src="../images/worker.jpg"
            alt="carrots"
            css={styles.roundImage}
            width={300}
          />
          <h2 css={styles.itemTitle}>Local y Colaborativa</h2>
          <p css={styles.itemText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            autem consectetur ratione, praesentium molestiae dolores fugiat
            perferendis aspernatur amet iusto a minima! Explicabo aspernatur
            dolorem fuga non ad, voluptas dolore!
          </p>
        </div>
        <div css={styles.itemContainer}>
          <StaticImage
            src="../images/tools.jpg"
            alt="carrots"
            css={styles.roundImage}
            width={300}
          />
          <h2 css={styles.itemTitle}>Innovadora y Sustentable</h2>
          <p css={styles.itemText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            autem consectetur ratione, praesentium molestiae dolores fugiat
            perferendis aspernatur amet iusto a minima! Explicabo aspernatur
            dolorem fuga non ad, voluptas dolore!
          </p>
        </div>
      </div>
    </ColumnContainer>
  );
};

export default Orchard;

const styles = createStyles({
  itemsContainer: {
    display: "flex",
    flex: "1",
    justifyContent: "space-evenly",
    flexDirection: "column",
    [mq("medium")]: {
      flexDirection: "row",
    },
  },
  itemContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  roundImage: { borderRadius: 1000, overflow: "hidden" },
  itemTitle: {
    fontFamily: theme.typography.mainFont,
    color: theme.palette.primary.dark,
    fontSize: 50,
    marginTop: spacing.medium,
    textAlign: "center",
  },
  itemText: {
    display: "none",
    [mq("medium")]: {
      display: "block",
      marginLeft: spacing.medium,
      marginRight: spacing.medium,
    },
  },
});
