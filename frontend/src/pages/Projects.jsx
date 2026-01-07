import { Link } from "react-router-dom";

import { CTA } from "../components/index";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      
      

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='w-full lg:w-400px' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-4xl ${project.theme}`} />
              <div className='btn-front rounded-4xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-5 font-poppins'>
                <Link
                  to={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border-0 border-solid rounded-4xl bg-gradient-to-r from-[#fca8c5] to-[#cb3659] px-10 py-2 text-white font-semibold'
                >
                  github link
                </Link>
               
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border-0 border-solid rounded-4xl bg-gradient-to-r from-[#fca8c5] to-[#cb3659] px-10 py-2 text-white font-semibold'
>
                  Live Link
                </Link>
                
                
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;