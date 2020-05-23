import Nav from 'react-bootstrap/Nav'

export function Footer() {
  return (
    <footer className='mt-4'>
      <div>© Leo Ji, 2020. All rights reserved.</div>
      <Nav as='nav'>
        <Nav.Item>
          <Nav.Link href='https://leoji.blog/' className='pl-0'>
            Blog
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='https://photos.leoji.codes/'>Photos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='https://twitter.com/theleoji'>Twitter</Nav.Link>
        </Nav.Item>
      </Nav>
    </footer>
  )
}
