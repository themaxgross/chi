import Nav from 'react-bootstrap/Nav'
import { NavLinkProps } from 'react-bootstrap/NavLink'

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { faTypewriter } from '@fortawesome/pro-regular-svg-icons'
import { faFlickr, faTwitter } from '@fortawesome/free-brands-svg-icons'

type FooterNavProps = {
  icon?: FontAwesomeIconProps['icon']
} & NavLinkProps

function FooterNavItem({ children, icon, ...props }: FooterNavProps) {
  return (
    <Nav.Item>
      <Nav.Link {...props}>
        {icon ? (
          <>
            <FontAwesomeIcon
              icon={icon}
              size='1x'
              height='1em'
              className='align-text-top'
            />{' '}
          </>
        ) : undefined}
        {children}
      </Nav.Link>
    </Nav.Item>
  )
}

export function Footer() {
  const links: {
    link: string
    href: string
    icon?: FontAwesomeIconProps['icon']
    children?: React.ReactNode
    className?: string
  }[] = [
    {
      link: 'Blog',
      href: 'https://leoji.blog',
      icon: faTypewriter,
      className: 'pl-0',
    },
    { link: 'Photos', href: 'https://photos.leoji.codes/', icon: faFlickr },
    { link: 'Twitter', href: 'https://twitter.com/theleoji', icon: faTwitter },
  ]

  return (
    <footer className='mt-5'>
      <div className='mb-1'>© Leo Ji, 2020. All rights reserved.</div>
      <Nav as='nav'>
        {links.map(({ link, ...rest }) => (
          <FooterNavItem children={link} {...rest} key={link.href} />
        ))}
      </Nav>
    </footer>
  )
}
