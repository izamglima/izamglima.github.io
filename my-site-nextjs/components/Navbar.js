import Image from "next/image";
import Link from "next/link";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <Image src="/path.png" width={100} height={77} /> */}
      <div className="navbar__icons">
        <DarkMode/>
      </div>
      <div className="navbar__title">
        <div className="navbar__title--box">
          <Link href="/">
            <a>
              <h1>iza.m.g.lima</h1>
            </a>
          </Link>
        </div>
      </div>
      <div className="navbar__links">
        <Link href="/"><a className="navbar__links--link">Home</a></Link>
        <Link href="/about"><a className="navbar__links--link">About</a></Link>
        <Link href="/projects"><a className="navbar__links--link">Projects</a></Link>
      </div>
    </nav>
  )
}

export default Navbar;