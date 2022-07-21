import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>Ooops...</h1>
      <h2>This page cannot be found.</h2>
      <p>Go back to the <Link href="/"><a>Home</a></Link></p>
    </div>
  )
}

export default NotFound;