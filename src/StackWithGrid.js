import React from "react";
import styled from "@emotion/styled";

function gridStyles({ direction = "vertical", gap, children }) {
  if (direction === "vertical") {
    return `
    grid-row-gap: ${gap || 0};
    grid-template-columns:auto;
    grid-template-rows: repeat(${React.Children.count(children)}, min-content);
  `;
  } else {
    return `
    grid-column-gap: ${gap || 0};
    grid-template-rows:auto;
    grid-template-columns: repeat(${React.Children.count(
      children
    )}, min-content);
    `;
  }
}

export const Stack = styled.div`
  display: grid;
  ${gridStyles}
`;
