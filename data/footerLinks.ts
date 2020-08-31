import {FontAwesomeIconProps} from "@fortawesome/react-fontawesome";

import {faTypewriter, faAddressCard} from "@fortawesome/pro-regular-svg-icons";
import {faFlickr, faTwitter} from "@fortawesome/free-brands-svg-icons";

export type FooterLinksProps = {
  link: string;
  href: string;
  icon?: FontAwesomeIconProps["icon"];
  children?: React.ReactNode;
  className?: string;
  internal?: boolean;
}[];

const links: FooterLinksProps = [
  // {
  //   link: 'About',
  //   href: '/about',
  //   className: 'pl-0',
  //   internal: true,
  //   icon: faAddressCard,
  // },
  {
    link: "Blog",
    href: "https://leoji.blog",
    icon: faTypewriter,
    className: "pl-0",
  },
  {link: "Photos", href: "https://photos.leoji.codes/", icon: faFlickr},
  {link: "Twitter", href: "https://twitter.com/theleoji", icon: faTwitter},
  {link: "Contact", href: "/contact/", internal: true, icon: faAddressCard},
];

export default links;
