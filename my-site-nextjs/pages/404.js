import Link from "next/link";

const NotFound = () => {
  return (
    <main className="main">
      <div className="container-404">
        <div className="container-404__number">
          <div className="container-404__column">
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
          <div className="container-404__row">
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
          <div className="container-404__column">
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
        </div>
        
        <div className="container-404__number">
          <div className="container-404__column">
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
          <div className="container-404__0">
              <span className="align-start">&#10006;</span>
              <span className="align-start">&#10006;</span>
              <span className="align-start">&#10006;</span>
              <span className="align-start">&#10006;</span>
              <span className="align-end">&#10006;</span>
              <span className="align-end">&#10006;</span>
              <span className="align-end">&#10006;</span>
              <span className="align-end">&#10006;</span>
          </div>
          <div className="container-404__column">
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
        </div>

        <div className="container-404__number">
          <div className="container-404__column">
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
          <div className="container-404__row">
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
          <div className="container-404__column">
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
        </div>
      </div>
      <h1>Ooops...</h1>
      <h2>This page cannot be found.</h2>
      
      <p>Go back to the <Link href="/"><a>Home</a></Link></p>
    </main>
  )
}

export default NotFound;