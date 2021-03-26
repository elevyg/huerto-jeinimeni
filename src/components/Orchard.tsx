import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { spacing, theme } from "../../utils";
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
      <div
        style={{
          display: "flex",
          flex: "1",
          justifyContent: "space-evenly",
        }}
      >
        <div style={styles.itemContainer}>
          <StaticImage
            src="../images/carrots.jpg"
            alt="carrots"
            style={styles.roundImage}
            width={300}
          />
          <h2 style={styles.itemTitle}>Orgánica y Biointensiva</h2>
          <p style={styles.itemText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            autem consectetur ratione, praesentium molestiae dolores fugiat
            perferendis aspernatur amet iusto a minima! Explicabo aspernatur
            dolorem fuga non ad, voluptas dolore!
          </p>
        </div>
        <div style={styles.itemContainer}>
          <StaticImage
            src="../images/worker.jpg"
            alt="carrots"
            style={styles.roundImage}
            width={300}
          />
          <h2 style={styles.itemTitle}>Local y Colaborativa</h2>
          <p style={styles.itemText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            autem consectetur ratione, praesentium molestiae dolores fugiat
            perferendis aspernatur amet iusto a minima! Explicabo aspernatur
            dolorem fuga non ad, voluptas dolore!
          </p>
        </div>
        <div style={styles.itemContainer}>
          <StaticImage
            src="../images/tools.jpg"
            alt="carrots"
            style={styles.roundImage}
            width={300}
          />
          <h2 style={styles.itemTitle}>Innovadora y Sustentable</h2>
          <p style={styles.itemText}>
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

const styles: Record<string, React.CSSProperties> = {
  itemContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  roundImage: { borderRadius: 1000, overflow: "hidden" },
  itemTitle: {
    fontFamily: theme.typography.mainFont,
    color: theme.palette.primary.dark,
    fontSize: 50,
    marginTop: spacing.medium,
  },
  itemText: { marginLeft: spacing.medium, marginRight: spacing.medium },
};
