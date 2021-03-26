/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { theme } from "../../utils";

interface Props {
  title: string;
  to: string;
}

const NavLink = (props: Props) => {
  return (
    <div css={{ marginLeft: 20, marginRight: 20 }}>
      <AnchorLink
        to={props.to}
        gatsbyLinkProps={{
          style: {
            textDecoration: "none",
          },
        }}
      >
        <span
          css={{
            textDecoration: "none",
            color: theme.palette.primary.main,
            fontFamily: theme.typography.mainFont,
            fontSize: 30,
            "&:hover": {
              color: theme.palette.primary.dark,
              textDecoration: "underline",
              textUnderlineOffset: 5,
            },
          }}
        >
          {props.title}
        </span>
      </AnchorLink>
    </div>
  );
};

export default NavLink;
