import Link, {LinkProps} from "next/link";
import Nav from "react-bootstrap/Nav";
import {NavLinkProps} from "react-bootstrap/NavLink";

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import links from "data/footerLinks";

type FooterNavProps = {
  icon?: FontAwesomeIconProps["icon"];
};
function FooterNavItemInternal({
  children,
  icon,
  linkProps,
  href,
  ...props
}: FooterNavProps & {linkProps?: LinkProps} & NavLinkProps) {
  return (
    <Nav.Item>
      <Link href={href ?? ""} passHref {...linkProps}>
        <Nav.Link as="a" {...props}>
          {icon ? (
            <>
              <FontAwesomeIcon
                icon={icon}
                size="1x"
                height="1em"
                className="align-text-top"
              />{" "}
            </>
          ) : undefined}
          {children}
        </Nav.Link>
      </Link>
    </Nav.Item>
  );
}

function FooterNavItemExternal({
  children,
  icon,
  ...props
}: FooterNavProps & NavLinkProps) {
  return (
    <Nav.Item>
      <Nav.Link {...props}>
        {icon ? (
          <>
            <FontAwesomeIcon
              icon={icon}
              size="1x"
              height="1em"
              className="align-text-top"
            />{" "}
          </>
        ) : undefined}
        {children}
      </Nav.Link>
    </Nav.Item>
  );
}

export function Footer() {
  return (
    <footer className="mt-5 small">
      <div className="mb-1">© Leo Ji, 2020. All rights reserved.</div>
      <Nav as="nav">
        {links.map(({link, internal, ...rest}) =>
          internal ? (
            <FooterNavItemInternal children={link} {...rest} key={link} />
          ) : (
            <FooterNavItemExternal children={link} {...rest} key={link} />
          )
        )}
      </Nav>
    </footer>
  );
}
