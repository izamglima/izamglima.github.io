import Head from 'next/head'
import ProjectsHome from '../../components/ProjectsHome';

const Projects = () => {
  return (
    <>
      <Head>
        <title>iza.m.g.lima | Projects</title>
      </Head>
      <main className="main">
        <ProjectsHome />
      </main>
    </>
    
  )
}

export default Projects;