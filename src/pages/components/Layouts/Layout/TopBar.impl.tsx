import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";

const TopBar: React.FC = () => {
  return (
    <Navbar>
      <div>
        <Banner href="/">EosJS Exam</Banner>
      </div>
      <div>
        <Link href={"/trade"}>
          <a style={{ color: "white" }}>Trade</a>
        </Link>
      </div>
    </Navbar>
  );
};

const Navbar = styled.nav({
  height: "65px",
  position: "fixed",
  zIndex: 10,
  width: "100%",
  padding: "1rem",
  justifyContent: "space-between",
  backgroundColor: "#000000",
  display: "flex",
  alignItems: "center",
});

const Banner = styled.a({
  display: "flex",
  height: "40px",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontSize: "100%",
  fontWeight: 600,
  whiteSpace: "nowrap",
});

export default TopBar;
