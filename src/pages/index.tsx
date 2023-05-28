import Head from 'next/head';
import { Link } from 'react-scroll';
import { HiOutlineArrowDown, HiOutlineArrowUp } from 'react-icons/hi'
import { BsGithub, BsLinkedin, BsList } from "react-icons/bs"
import { AiFillMail, AiOutlineMail } from "react-icons/ai"
import ReactModal from 'react-modal';
import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { IconType } from 'react-icons';

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

function NavBar() {
  return (
    <div className="flex flex-row items-center justify-end bg-tea-green w-full h-12">
      <p>
        <Link className=" font-bold text-lg px-4" to="about" smooth={true} duration={1000} >
          About
        </Link>
        <Link className=" font-bold text-lg px-4" to="projects" smooth={true} duration={1000} >
          Projects
        </Link>
        <Link className=" font-bold text-lg px-4" to="experience" smooth={true} duration={1000} >
          Experience
        </Link>
        <Link className=" font-bold text-lg px-4" to="contact" smooth={true} duration={1000} >
          Contact
        </Link>
      </p>
    </div>
  )
}

function LandingSection() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-d9f4c7 to-f8fa90">
      <NavBar />
      <main className="flex flex-row items-center justify-center w-full flex-1 px-20 text-center">
        <div className="flex flex-col items-start w-full">
          <h1 className="text-6xl font-bold text-ac9969 mb-8">
            Matthew Keller
          </h1>
          <p className="text-2xl font-medium text-gray-800 mb-8">
            Software Developer, Student, Frog-Lover
          </p>
          <Link className="flex" to="projects" smooth={true} duration={1000}>
            <button className="bg-tea-green font-bold py-4 px-6 rounded-lg shadow-sm hover:shadow-md">
              <HiOutlineArrowDown />
            </button>
          </Link>
        </div>
        
      </main>
  </section>    
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

function ProjectsSectionOld() {
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

function VerticalProjectNavbar({setShowNavbar} : {setShowNavbar: (showNavbar: boolean) => void}) {
  

  return (
    <div className="flex flex-col h-full items-end">
      {projectsList.map(({title, description, tags}) => 
        <p className="my-3">{title}</p>
      )}
    </div>
  );
}

interface ProjectTypeButtonProps {text: string, clicked: boolean, setClicked: Dispatch<SetStateAction<boolean>>}

function ProjectTypeButton({ text, clicked, setClicked }: ProjectTypeButtonProps) {
  return (
    <button className={`flex bg-${clicked && "tea-green"} font-bold py-1 px-6 rounded-lg hover:shadow-md border-2 border-tea-green`} onClick={() => setClicked((prev) => !prev)}>
      {text}
    </button>
  )
}

function ProjectsSection() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const [showWeb, setShowWeb] = useState(false);
  const [showBackend, setShowBackend] = useState(false);
  const [showMl, setShowMl] = useState(false);
  const [showData, setShowData] = useState(false);
  const [showHardware, setShowHardware] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
      <section className="flex flex-row flex-wrap justify-center items-center lg:h-screen md:h-screen w-full h-full" id="projects">
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full">
            <div className="flex w-5/6">
            </div>
            <button className={`flex bg-tea-green w-1/6 justify-${showNavbar ? "start" : "end hidden"} `}>
              <BsList className="text-black" size={30}/>
            </button>
          </div>
          <div className="flex items-center justify-between w-full">
          <div className={`flex flex-row justify-between px-5 w-${showNavbar ? "5/6" : "full"}`}>
            <p className="flex text-center text-3xl font-bold items-center justify-start">Projects</p>
            <div className="flex flex-row mt-2 space-x-4 justify-end">
              <ProjectTypeButton text="All" clicked={showAll} setClicked={setShowAll} />
              <ProjectTypeButton text="Web" clicked={showWeb} setClicked={setShowWeb} />
              <ProjectTypeButton text="Backend" clicked={showBackend} setClicked={setShowBackend} />
              <ProjectTypeButton text="ML" clicked={showMl} setClicked={setShowMl} />
              <ProjectTypeButton text="Data" clicked={showData} setClicked={setShowData} />
              <ProjectTypeButton text="Hardware" clicked={showHardware} setClicked={setShowHardware} />
            </div>
          </div>
          <div className={`flex justify-center h-full w-1/6 ${!showNavbar && "hidden"} bg-tea-green `}>
            <VerticalProjectNavbar setShowNavbar={setShowNavbar}/>
          </div>
        </div>  
        </div>    
        <Link className="flex mb-2" to="experience" smooth={true} duration={1000}>
            <button className="mt-4 bg-tea-green font-bold py-4 px-6 mx-auto rounded-lg shadow-sm hover:shadow-md">
              <HiOutlineArrowDown />
            </button>
        </Link>  
      </section>
  )
}

interface ContactElementProps {Icon: IconType, text: string}

function ContactElement({Icon, text} : ContactElementProps) {
  return (
    <div className="flex flex-row space-x-4 items-center">
      <Icon size={30}/>
      <p className="text-center">{text}</p>
    </div>
  )
}


function ContactSection() {

  return (
    <section className="flex flex-col items-center justify-center h-screen w-full" id="contact">
      <div className="flex flex-col justify-around ml-20 w-full">
        <p className="text-2xl font-bold my-20">Contact Me</p>
        <div className="flex flex-col space-y-4">
          <ContactElement Icon={BsGithub} text="/m6keller"/>
          <ContactElement Icon={BsLinkedin} text="in/m6keller"/>
          <ContactElement Icon={AiOutlineMail} text="m6keller@uwaterloo.ca"/>
        </div>
      </div>
      <Link className="flex mb-20 mt-auto" to="home" smooth={true} duration={1000}>
        <button className="mt-4 bg-tea-green font-bold py-4 px-6 mx-auto rounded-lg shadow-sm hover:shadow-md">
            <HiOutlineArrowUp />
        </button>
      </Link>
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
      <div className="flex flex-col w-full">
        <LandingSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </>
  );
}
