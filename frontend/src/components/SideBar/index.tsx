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
            <NavItem title={link.title} icon={link.icon} path={link.path} />
          );
        })}
      </div>
    );
  };

  return (
    <Container>
      <LogoContainer>
        <LogoIcon>T</LogoIcon>
        <Logo>Taskify</Logo>
      </LogoContainer>
      <Nav>
        <Button>New task</Button>
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
