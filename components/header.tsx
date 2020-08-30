import Link from 'next/link'

export function Header() {
  return (
    <header className='mb-5'>
      <h1 className='display-1'>
        <Link href='/'>
          <a>Leo Ji</a>
        </Link>
      </h1>
      <h2>just another person on the Internet</h2>
    </header>
  )
}
