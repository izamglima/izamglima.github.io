import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/About.module.css'

const About = () => {
  return (
    <>
      <Head>
        <title>iza.m.g.lima | About</title>
      </Head>
      <main className="main">
        <section className={styles.resume}>
          <h1 className="text-center">About</h1>

          <div className={styles.container}>
            <aside className={styles.box}>
              <span className={styles.pill}>CSS3</span>
              <span className={styles.pill}>Javascript</span>
              <span className={styles.pill}>jQuery</span>
              <span className={styles.pill}>Git</span>
              <span className={styles.pill}>HTML5</span>
              <span className={styles.pill}>Task Runners</span>
              <span className={styles.pill}>REST APIs</span>
              <span className={styles.pill}>CI / CD</span>
              <span className={styles.pill}>Angular</span>
              <span className={styles.pill}>Responsive Design</span>
              <span className={styles.pill}>NgRx</span>
              <span className={styles.pill}>React</span>
              <span className={styles.pill}>DOM Manipulations</span>
              <span className={styles.pill}>Agile</span>
            </aside>
            <div>
              <div className={styles.box}>
                  <div className={styles.bg}></div>
                  <div className={styles.avatar}></div>
                  <h2>Izabela Moreira Germer de Lima</h2>
                  <p>Amstelveen, North Holland, Netherlands</p>
              </div>
              <div className={styles.box}>
                  <h3>Resume</h3>
                  <p>I am a System Analyst focused on Frontend Development. I like to solve problems through technology, creativity and design. I prefer to work with agile methodologies and to be part of a multidisciplinary team, which you can improve together.</p>
              </div>
              <div className={styles.box}>
                  <h3>Experience</h3>
                  <div className={styles.item}>
                    <h4>Frontend Developer</h4>
                    <small>ECCO Leather B.V. · Full-time</small>
                    <small>Nov 2020 - Feb 2021 · 4 mos</small>
                    <p>Web system to display collections of products with admin area. The stack used was Angular 9 with NgRx for state management and typical CRUD operations using REST.</p>
                  </div>
                  <div className={styles.item}>
                    <h4>Frontend Developer</h4>
                    <small>Venturus · Full-time</small>
                    <small>Oct 2018 - Mar 2020 · 1 yr 6 mos</small>
                    <p>Big international system that remotely updates sim cards using technologies like: AngularJS, Jasmine with Karma for Unitary Tests (80% of coverage), JSONSchema, Mocks, Swagger, Gruntjs, CSS3 and HTML5. Using Scrum as an agile methodology. Also, CI/CD through the Jenkins pipeline and environment running Docker with Kubernetes.</p>
                  </div>
                  <div className={styles.item}>
                    <h4>Frontend Developer</h4>
                    <small>Talent Invest · Full-time</small>
                    <small>Jan 2018 - Sep 2018 · 9 mos</small>
                    <p>Front-end development of an investment and financing system using technologies such as: HTML5, SASS, CSS3, Flexbox, Bootstrap 4, Grunt, Javascript and typical CRUD operations using REST.</p>
                  </div>
                  <div className={styles.item}>
                    <h4>Frontend developer and Backend developer</h4>
                    <small>Stoom - Soluções em E-commerce · Full-time</small>
                    <small>Jan 2016 - Dec 2017 · 2 yrs</small>
                    <p>Web commerce implementation and maintenance. Worked with the following technologies: Java Spring with Struts, Hibernate, PostgreSQL in the Back-end. In Frontend: HTML5, CSS3, Vanilla Javascript and jQuery; Besides that, I had the opportunity to create and monitor A/B tests, Landing Pages, using HotJar and Google Analytics.</p>
                  </div>
              </div>
              <div className={styles.box}>
                  <h3>Education</h3>
                  <div className={styles.item}>
                    <h4>Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - IFSP</h4>
                    <small>Análise e Desenvolvimento de Sistemas</small>
                    <small>2015 - 2018</small>
                    <p><Link href="https://portal.cmp.ifsp.edu.br/"><a>https://portal.cmp.ifsp.edu.br/</a></Link></p>
                  </div>
                  <div className={styles.item}>
                    <h4>People Computação</h4>
                    <small>Technical Course, Computer Technician</small>
                    <small>Jan 2013 - Jun 2015</small>
                    <p><Link href="http://peoplecampinas.com.br/"><a>http://peoplecampinas.com.br/</a></Link></p>
                  </div>
              </div>
              <div className={styles.box}>
                  <h3>Licenses &amp; certifications</h3>
                  <div className={styles.item}>
                    <h4>Angular e RxJS: Programação reativa</h4>
                    <small>Alura</small>
                    <small>Dec 2020</small>
                    <p><Link href="https://www.alura.com.br/"><a>https://www.alura.com.br/</a></Link></p>
                  </div>
                  <div className={styles.item}>
                    <h4>AngularJs: crie webapps poderosas</h4>
                    <small>Alura</small>
                    <small>Apr 2020</small>
                    <p><Link href="https://www.alura.com.br/"><a>https://www.alura.com.br/</a></Link></p>
                  </div>
                  <div className={styles.item}>
                    <h4>JavaScript: conhecendo o Browser e padrões de projeto</h4>
                    <small>Alura</small>
                    <small>Apr 2020</small>
                    <p><Link href="https://www.alura.com.br/"><a>https://www.alura.com.br/</a></Link></p>
                  </div>
              </div>
              <div className={styles.box}>
                  <h3>Languages</h3>
                  <div className={styles.item}>
                    <small>Portuguese</small>
                    <small>English</small>
                    <small>Dutch basic</small>
                  </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/about/more"><a className={`${styles.link} ${"btn"} ${"btn-small"}`}>More about me</a></Link>
          </div>
        </section>
      </main>
    </>
    
  )
}

export default About;