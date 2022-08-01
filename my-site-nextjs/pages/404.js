import Link from "next/link";

const NotFound = () => {
  return (
    <main className="main">
      <h1 className="text-center">Ooops...</h1>
      <div className="container-404">
        <div className="container-404__number">
          <div className="container-404__number--column">
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
          <div className="container-404__number--row">
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
          <div className="container-404__number--column">
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
          <div className="container-404__number--column">
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
          <div className="container-404__number--column">
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
          <div className="container-404__number--column">
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
          <div className="container-404__number--row">
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
            <span>&#10006;</span>
          </div>
          <div className="container-404__number--column">
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
      <h2 className="text-center">This page cannot be found.</h2>  
      <p className="text-center">Go back to the <Link href="/"><a className="link">Home</a></Link></p>
    </main>
  )
}

export default NotFound;