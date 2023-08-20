import {
  Button,
  Container,
  Logo,
  LogoContainer,
  LogoIcon,
  Nav,
  NavList,
} from "./styles.ts";
import { Category, NavLink, navLinks } from "./nav-links.tsx";
import NavItem from "../NavItem";
import { Link } from "react-router-dom";

export default function SideBar() {
  const renderNavItems = (category: Category) => {
    const filteredLinks: NavLink[] = navLinks.filter(
      (link) => link.category === category
    );

    return (
      <div key={category}>
        {category === Category.TAGS && <div className="tag">Tags</div>}
        {filteredLinks.map((link) => {
          return (
            <Link
              to={link.path}
              key={link.title}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <NavItem title={link.title} icon={link.icon} path={link.path} />
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <Container>
      <Link
        to={"/"}
        style={{
          textDecoration: "none",
        }}
      >
        <LogoContainer>
          <LogoIcon>T</LogoIcon>
          <Logo>Taskify</Logo>
        </LogoContainer>
      </Link>
      <Nav>
        <Link
          to={"/createTask"}
          style={{
            width: "100%",
          }}
        >
          <Button>Create Task</Button>
        </Link>
        <NavList>
          <div>
            {renderNavItems(Category.MAIN)}
            {renderNavItems(Category.TAGS)}
          </div>
          {renderNavItems(Category.SETTINGS)}
        </NavList>
      </Nav>
    </Container>
  );
}
