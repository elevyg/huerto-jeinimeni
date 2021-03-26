import * as React from "react";
import { Link } from "gatsby";
import { theme } from "../../utils";
import { StaticImage } from "gatsby-plugin-image";
import NavLink from "./NavLink";

const Header = () => (
  <header style={styles.container}>
    <div style={styles.navLinkContainerLeft}>
      <NavLink to="#about" title="Nosotros" />
      <NavLink to="#orchard" title="Huerta" />
    </div>
    <div style={styles.navLinkContainerRight}>
      <NavLink to="#find-us" title="Ubicación" />
      <NavLink to="#volunteers" title="Voluntariados" />
    </div>
    <div style={styles.logoContainer}>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <StaticImage
          src="../assets/logo.png"
          width={250}
          alt="Huerto Jeinimeni"
          quality={100}
        />
      </Link>
    </div>
  </header>
);

export default Header;

const styles: Record<string, React.CSSProperties> = {
  container: {
    backgroundColor: theme.palette.common.white,
    height: "5rem",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 20,
  },
  navLinkContainerLeft: {
    display: "flex",
    flex: 1,
    marginRight: 125,
    justifyContent: "flex-end",
  },
  navLinkContainerRight: {
    display: "flex",
    flex: 1,
    marginLeft: 125,
    justifyContent: "flex-start",
  },
  logoContainer: {
    position: "absolute",
    top: 0,
    zIndex: 20,
    justifySelf: "center",
  },
};
