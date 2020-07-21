import { styled } from "@filbert-js/macro";

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

export const Stack = styled.div`
  display: flex;
  ${flexStyles}
`;
