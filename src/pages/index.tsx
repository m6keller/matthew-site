import Head from 'next/head';
import { Link } from 'react-scroll';
import { HiOutlineArrowDown } from 'react-icons/hi'

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

export default function Home() {

  return (
    <>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your Page Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-d9f4c7 to-f8fa90">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold text-ac9969 mb-8">
            Welcome!
          </h1>
          <p className="text-2xl font-medium text-gray-800 mb-8">
            to my personal website
          </p>
          <Link to="experience" smooth={true} duration={2000}>
            <button className="bg-lion text-white font-bold py-4 px-6 rounded-lg shadow-lg bg-9DCDC0 hover:bg-#9DCDC0 transition-colors duration-300">
              learn more
            </button>
          </Link>
        </main>
      </div>
      <section className="h-screen bg-gray-100" id="experience">
        <div className="container mx-auto h-full">
          <div className="relative h-full">
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-400"></div>
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row items-center justify-center h-full">
                {experienceList.map((experience) =><ExperienceTile {...experience} />)}
              </div>
              <Link to="projects" className="flex mx-auto w-10 first-letter:mx-auto z-10 rounded-md bg-white items-center justify-center">
                <HiOutlineArrowDown size={20}/>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="flex flex-wrap justify-center items-center h-screen" id="projects">
        <table className="table-fixed w-full">
        <body className="bg-gray-100 min-h-screen">
            <tr>
              <td className="w-1/3 p-4 bg-yellow-500"></td>
              <td className="w-1/3 p-4 bg-green-500"></td>
              <td className="w-1/3 p-4 bg-purple-500"></td>
            </tr>
            <tr>
              <td className="w-1/3 p-4 bg-red-500"></td>
              <td className="w-1/3 p-4 bg-blue-500"></td>
              <td className="w-1/3 p-4 bg-indigo-500"></td>
            </tr>
          </body>
        </table>
      </section> */}

    </>
  );
}
