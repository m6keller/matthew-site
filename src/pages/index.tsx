import Head from 'next/head';
import { Link } from 'react-scroll';
import { HiOutlineArrowDown } from 'react-icons/hi'
import ReactModal from 'react-modal';
import { useState } from 'react';

const experienceList = [
  {
    title: "Biomedical Engineering Student",
    company: "University of Waterloo",
    description: 'bme blah blah blah',
  },
  {
    title: "Backend Developer",
    company: "Reya Health",
    description: 'Backend blah blah blah',
  },
  {
    title: "Full Stack Developer",
    company: "Scispot Inc.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula orci eget velit condimentum fermentum.",
  }
]

const projectsList = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula orci eget velit condimentum fermentum.",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula orci eget velit condimentum fermentum.",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula orci eget velit condimentum fermentum.",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula orci eget velit condimentum fermentum.",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "Project 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula orci eget velit condimentum fermentum.",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "Project 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula orci eget velit condimentum fermentum.",
    tags: ["React", "Next.js", "Tailwind"],
  },
]

function ExperienceTile({ title, description, company } : {title: string, description: string, company: string}) {

  return (
    <div className="relative flex items-center justify-center w-full md:w-1/2 py-4 md:py-8 px-4 md:px-8">
      <div className="relative bg-white border border-gray-200 rounded-lg shadow-md p-6">
        <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
        <span className="absolute top-0 left-0 -ml-3 h-6 w-6 rounded-full bg-gray-100 border-2 border-gray-400"></span>
      </div>
    </div>
  )

}

function ProjectPopUp({ open, setOpen}: {open: boolean, setOpen: Function}) {
  return (
    <ReactModal isOpen={open} className="">
    {/* <ReactModal isOpen={open} className="rounded"> */}
      <button className="close" onClick={() => setOpen(false)}>&times;</button>
      <div className="flex flex-col">
        <h1>Project 1</h1>
        <p>blah blah blah</p>
      </div>
    </ReactModal>
  )
}


function ProjectTile({ title, tags, description }: { title: string, tags: string[], description: string }) {
  const [open, setOpen] = useState(true);

  return (
    <button className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white text-left" onClick={() => setOpen(true)}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-gray-600 text-sm">{tags.join(", ")}</span>
      </div>
      <ProjectPopUp open={open} setOpen={setOpen}/>
    </button>
  );
}

function LandingSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-d9f4c7 to-f8fa90">
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1 className="text-6xl font-bold text-ac9969 mb-8">
        Matthew
      </h1>
      <p className="text-2xl font-medium text-gray-800 mb-8">
        Software Developer, Student, Frog-Lover
      </p>
      <Link to="experience" smooth={true} duration={1000}>
        <button className="bg-tea-green font-bold py-4 px-6 rounded-lg shadow-sm hover:shadow-md">
          <HiOutlineArrowDown />
        </button>
      </Link>
    </main>
  </div>
  )
}

function ExperienceSection () {
  return (
    <section className="h-screen" id="experience">
        <div className="container mx-auto h-full">
          <div className="relative h-full">
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-400"></div>
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row items-center justify-center h-full">
                {experienceList.map((experience) => <ExperienceTile {...experience} />)}
              </div>
              <Link to="projects" className="mx-auto z-10" smooth={true} duration={1000}>
                <button className="bg-tea-green font-bold py-4 px-6 rounded-lg shadow-sm hover:shadow-md">
                  <HiOutlineArrowDown />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}

function ProjectsSection() {
  return (
      <section className="flex flex-wrap justify-center items-center h-screen" id="projects">
        <div className="grid md:grid-cols-3 md:grid-rows-2 grid-cols-2 grid-rows-3 items-center justify-center h-full">
          {projectsList.map(({title, description, tags}) =>  
            <ProjectTile 
            title={title}
            description={description}
            tags={tags}
            />
          )}
        </div>
      </section>
  )
}

export default function Home() {

  return (
    <>
      <Head>
        <title>Matthew's Personal Site</title>
        <meta name="description" content="asldkjfklsajdfkl" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingSection />
      <ProjectsSection />
      <ExperienceSection />
    </>
  );
}
