import { JSX } from "react";
import { Container } from "./styles.ts";

interface NavItemProps {
  title: string;
  icon: JSX.Element;
  path: string;
}

export default function NavItem({ title, icon }: NavItemProps) {
  return (
    <Container>
      {icon}
      <span>{title}</span>
    </Container>
  );
}
