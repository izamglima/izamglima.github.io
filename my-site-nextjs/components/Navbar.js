import Image from "next/image";
import Link from "next/link";
import DarkMode from "./DarkMode";
import useSound from 'use-sound';



const Navbar = () => {
  const openMenu = () => {
    if (typeof window !== 'undefined') { 
      var menuToggle = document.querySelector(".navbar__links");
      menuToggle.classList.toggle('open')
    }
  }

  const Logo = () => {
    const [play, { stop }] = useSound('/sounds/electric-zap.mp3');
    //const [play, { stop }] = useSound('/sounds/buzz.mp3');

  
    return (
      <button onMouseEnter={() => play()} onMouseLeave={() => stop()}>
        <h1> iza.m.g.lima </h1>
      </button>
    );
  };

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
              <Logo />
            </a>
          </Link>
        </div>
      </div>
      <div className="navbar__links">
        <button className={`${["navbar__menu"]}`} onClick={openMenu}>
          <span></span>
        </button>
        <div className={`${["navbar__menu--toggle"]}`}>
          <Link href="/"><a className="navbar__links--link">Home</a></Link>
          <Link href="/about"><a className="navbar__links--link">About</a></Link>
          <Link href="/projects"><a className="navbar__links--link">Projects</a></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;