import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <div className="container-404">
        <div className="container-404__first-number">
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
        
        <div className="container-404__second-number">
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
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            
            <div>
              <span>&#10006;</span>
              <span>&#10006;</span>
              <span>&#10006;</span>
              <span>&#10006;</span>
            </div>
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

        <div className="container-404__third-number">
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
    </div>
  )
}

export default NotFound;