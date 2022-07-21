import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <h1>homepage</h1>
      <p>some text... </p>
      <Link href="/projects"><a>Little projects</a></Link>
    </div>
  )
}
