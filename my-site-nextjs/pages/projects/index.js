import Head from 'next/head'
import ProjectsHome from '../../components/ProjectsHome';

const About = () => {
  return (
    <>
      <Head>
        <title>iza.m.g.lima | About</title>
      </Head>
      <main className="main">
        <ProjectsHome />
      </main>
    </>
    
  )
}

export default About;