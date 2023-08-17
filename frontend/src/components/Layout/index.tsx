import React, { JSX } from "react";
import Header from "../Header";
import SideBar from "../SideBar";
import { Container, Main } from "./styles.ts";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Container>
      <Header />
      <SideBar />
      <Main>{children}</Main>
    </Container>
  );
}
