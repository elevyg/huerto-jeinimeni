import React from "react";
import { spacing } from "../../../utils";

interface Props {
  style?: React.CSSProperties;
  id?: string;
  section?: true;
}

const ColumnContainer: React.FC<Props> = ({ children, style, id, section }) => {
  return (
    <div
      style={{
        ...{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          paddingTop: section ? spacing.xlarge : style?.paddingTop,
          paddingBottom: section ? spacing.xlarge : style?.paddingBottom,
        },
        ...style,
      }}
      id={id}
    >
      {children}
    </div>
  );
};

export default ColumnContainer;
