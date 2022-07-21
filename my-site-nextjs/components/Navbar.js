import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <h1>izamglima</h1>
      {/* <Image src="/path.png" width={100} height={77} /> */}
      <Link href="/">Home</Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/projects"><a>Little projects</a></Link>
    </nav>
  )
}

export default Navbar;