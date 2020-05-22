/** @jsx jsx */
import React from "react";
import "./styles.css";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import { Stack as StackWithFlex } from "./StackWithFlex";
import { Stack as StackWithGrid } from "./StackWithGrid";
import { Stack as StackWithStackItem } from "./StackWithStackItem";

const yellowish = "rgb(245, 186, 76)";
const bluish = "rgb(117, 172, 253)";

const Card = styled.div`
  background: ${({ bg }) => bg || yellowish};
`;
const Box = styled.div`
  background: ${({ bg }) => bg || bluish};
  font-size: 20px;
  padding: 8px;
`;
const marginTop20 = css`
  margin-top: 20px;
`;
const marginLeft20 = css`
  margin-left: 20px;
`;
export default function App() {
  return (
    <StackWithFlex gap="16px">
      <Card>
        <StackWithFlex gap="8px">
          <Box>one</Box>
          <Box css={marginTop20}>two</Box>
          <Box>three</Box>
        </StackWithFlex>
      </Card>
      <Card>
        <StackWithGrid gap="8px">
          <Box>one</Box>
          <Box css={marginTop20}>two</Box>
          <Box>three</Box>
        </StackWithGrid>
      </Card>
      <Card>
        <StackWithStackItem gap="8px">
          <Box>one</Box>
          <Box css={marginTop20}>two</Box>
          <Box>three</Box>
        </StackWithStackItem>
      </Card>

      <Card>
        <StackWithFlex gap="8px" direction="horizontal">
          <Box>one</Box>
          <Box css={marginLeft20}>two</Box>
          <Box>three</Box>
        </StackWithFlex>
      </Card>
      <Card>
        <StackWithGrid gap="8px" direction="horizontal">
          <Box>one</Box>
          <Box css={marginLeft20}>two</Box>
          <Box>three</Box>
        </StackWithGrid>
      </Card>
      <Card>
        <StackWithStackItem gap="8px" direction="horizontal">
          <Box>one</Box>
          <Box css={marginLeft20}>two</Box>
          <Box>three</Box>
        </StackWithStackItem>
      </Card>
    </StackWithFlex>
  );
}
