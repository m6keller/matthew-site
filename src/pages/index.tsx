import Head from 'next/head';
import { Link } from 'react-scroll';
import { HiOutlineArrowDown } from 'react-icons/hi'
import { BsGithub } from "react-icons/bs"
import ReactModal from 'react-modal';
import { useState } from 'react';

const experienceList = [
  {
    title: "Biomedical Engineering Student",
    company: "University of Waterloo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula orci eget velit condimentum fermentum.",
    completion: 0.25,
  },
  {
    title: "Backend Developer",
    company: "Reya Health",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula orci eget velit condimentum fermentum.",
    completion: 1,
  },
  {
    title: "Full Stack Developer",
    company: "Scispot Inc.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula orci eget velit condimentum fermentum.",
    completion: 1,
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

function ExperienceTile({ title, description, company, completion } : {title: string, description: string, company: string, completion: number}) {
  const [open, setOpen] = useState(false);

  return (
    <button onClick={() => setOpen(true)} className="text-left relative flex items-center justify-center w-full md:w-1/2 py-4 md:py-8 px-4 md:px-8">
      <div className="relative bg-white border border-gray-200 rounded-lg shadow-md p-6">
        <h3 className="text-lg md:text-xl font-bold">{title}</h3>
        <div>@ {company}</div>
        <p className="mt-2 text-gray-600 text-sm md:text-base">{description}</p>
        <div className="absolute -top-2 left-0 -ml-3" >
          <CircleProgressBar progress={1} size={6} fill={completion >= 1}/>
        </div>
      </div>
      <InfoPopUp 
        open={open} 
        setOpen={setOpen}
        header={title}
        subheader={company}
        mainText={description}
        />
    </button>
  )

}

interface InfoPopUpProps {
  open: boolean, 
  setOpen: Function,
  header: string,
  subheader: string,
  mainText: string,
  githubLink?: string,
}

function InfoPopUp({ open, setOpen, header, subheader, mainText, githubLink="https://github.com/m6keller" }: InfoPopUpProps) {

  return (
    <ReactModal isOpen={open} 
    >
      <div>
        <button onClick={(e) => {
            e.stopPropagation();
            setOpen(false)
          }}
        >
          &times;
        </button>
        <div className="flex flex-col">
        <div className="flex flex-row justify-between">
            <h1 className="font-bold text-4xl">{header}</h1>
            {githubLink && <div>
              <a href={githubLink}>
                <BsGithub size={20}/>
              </a>
            </div>}
          </div>
          <h2 className="mt-1 font-medium">{subheader}</h2>
          <p className="mt-2">{mainText}</p>
        </div>
      </div>
    </ReactModal>
  );
}

function ProjectTile({ title, tags, description }: { title: string, tags: string[], description: string }) {
  const [open, setOpen] = useState(false);

  return (
    <button className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white text-left" onClick={() => setOpen(true)}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-gray-600 text-sm">{tags.join(", ")}</span>
      </div>
      <InfoPopUp 
        open={open} 
        setOpen={setOpen}
        header={title}
        subheader={tags.join(", ")}
        mainText={description}
      />
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
        <Link to="projects" smooth={true} duration={1000}>
          <button className="bg-tea-green font-bold py-4 px-6 rounded-lg shadow-sm hover:shadow-md">
            <HiOutlineArrowDown />
          </button>
        </Link>
      </main>
  </div>    
  )
}

function ExperienceSection() {
  return (
    <section className="" id="experience">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="relative">
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-400"></div>
            <div className="flex flex-col">
              <div className="flex flex-col items-center justify-center h-full">
                {experienceList.map((experience) => <ExperienceTile {...experience} />)}
              </div>
            </div>
          </div>
          <Link className="mt-4" to="contact" smooth={true} duration={1000}>
            <button className="bg-tea-green font-bold py-4 px-6 rounded-lg shadow-sm hover:shadow-md">
              <HiOutlineArrowDown />
            </button>
          </Link>
        </div>
      </section>
  )
}

function CircleProgressBar({ progress, size, fill=false} : {progress: number, size: number, fill?: boolean}) {
  
  const radius=50;
  const strokeWidth=10;
  const circumference = 2 * Math.PI * radius; // The circumference of the circle

  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <svg
      className={`w-${size} h-${size}`}
      viewBox={`0 0 ${2 * radius} ${2 * radius}`}
      fill="none"
    >
      <circle
        className={`text-${fill ? "tea-green" : "white"} fill-current`}
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <circle
        className="text-tea-green stroke-current"
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
      />
    </svg>
  );
};

function ProjectsSection() {
  return (
      <section className="flex flex-col flex-wrap justify-center items-center lg:h-screen md:h-screen" id="projects">
        <div className="grid md:grid-cols-2 md:grid-rows-3 sm:grid-cols-1 sm:grid-rows-6 lg:grid-cols-3 lg:grid-rows-2 items-center justify-center ">
          {projectsList.map(({title, description, tags}) =>  
            <ProjectTile 
            title={title}
            description={description}
            tags={tags}
            />
          )}
        
        </div>
        <Link className="flex mb-2" to="experience" smooth={true} duration={1000}>
          <button className="mt-4 bg-tea-green font-bold py-4 px-6 mx-auto rounded-lg shadow-sm hover:shadow-md">
            <HiOutlineArrowDown />
          </button>
        </Link>
      </section>
  )
}

function ContactBlock({}) {
  return (
    <div className="flex flex-row">

    </div>
  )
}

function ContactSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen" id="contact">
      contact section
      <div></div>
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
      <div className="flex flex-col">
        <LandingSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </>
  );
}
