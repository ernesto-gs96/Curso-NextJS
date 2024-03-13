import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"

const navItems = [
  {path: '/about', text: 'About'},
  {path: '/pricing', text: 'Pricing'},
  {path: '/contact', text: 'Contact'},
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        <Link className="flex items-center" href="/">
          <HomeIcon className="mr-2"/>
          <span>Home</span>
        </Link>

        <div className="flex flex-1"></div>

        {navItems.map(navItem => (
          <Link key={navItem.path} className="mr-2" href={navItem.path}>{navItem.text}</Link>
        ))}
    </nav>
  )
}
