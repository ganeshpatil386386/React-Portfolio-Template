import ProjectsCard from "../components/ProjectsCard";

const Projects = () => {
  return (
    <div className='flex justify-evenly  items-center flex-wrap '>
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
    </div>
  );
};

export default Projects;
