import styled from "@emotion/styled";
import React from "react";
import { PaperProps } from "./Paper.interface";

const Paper = ({ children }: PaperProps) => {
  return (
    <PaperContainer>
      <Main>{children}</Main>
    </PaperContainer>
  );
};

const PaperContainer = styled.div({
  margin: "20px",
});

const Main = styled.main({
  borderRadius: "3px",
  padding: "20px",
  boxShadow: "0.9px 0.9px 5px 0.2px rgba(0,0,0,0.4)",
});

export default Paper;
