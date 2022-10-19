import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
        <p className="text-center">this portifolio was created using Next.js</p>
        <p className="text-center">social links if you want to connect or just a sneak peek :)</p>
        <div className="social-links">
          <div>
            <Link href="https://www.linkedin.com/in/izabela-lima-916370110">
              <a className="icon-linkedin" target="_blank"></a>
            </Link>
          </div>
          <div>
            <Link href="https://www.instagram.com/izamglima_/">
              <a className="icon-instagram" target="_blank"></a>
            </Link>
          </div>
          <div>
            <Link href="https://github.com/izamglima">
              <a className="icon-github" target="_blank"></a>
            </Link>
          </div>
        </div>
    </footer>
  )
}

export default Footer;