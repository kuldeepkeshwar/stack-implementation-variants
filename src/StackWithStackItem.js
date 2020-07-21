import { styled } from "@filbert-js/macro";
import React from "react";
function flexStyles({ direction = "vertical", gap }) {
  if (direction === "vertical") {
    return `
  flex-direction: column;
  & > * + * {
    margin-top: ${gap || 0};
  }
  `;
  } else {
    return `
    flex-direction: row;
  & > * + * {
    margin-left: ${gap || 0};
  }
    `;
  }
}
const StackItem = styled.div``;
const Element = styled.div`
  display: flex;
  ${flexStyles}
`;
export function Stack({ direction, gap, children }) {
  const items = React.Children.toArray(children).map(item => {
    if (item.type !== StackItem) {
      return <StackItem>{item}</StackItem>;
    }
    return item;
  });

  return (
    <Element direction={direction} gap={gap}>
      {items}
    </Element>
  );
}
