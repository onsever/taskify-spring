import React, { JSX } from "react";
import NavigationBar from "../NavigationBar";
import SideBar from "../SideBar";
import { Container, Main } from "./styles.ts";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Container>
      <NavigationBar />
      <SideBar />
      <Main>{children}</Main>
    </Container>
  );
}
