'use client'
import Link from "next/link"
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/Table"

export function CV() {

  let handlemode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>

          <span className="sr-only">Professor s Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#educational-qualification">
            Educational Qualification
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#research">
            Research
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#experience">
            Experience
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#teaching">
            Teaching
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#awards-achievements">
            Awards/Achievements
          </Link>
        </nav>
      </header>
      <main className="flex-1 dark:bg-gradient-to-r dark:from-slate-900 dark:to-zinc-800">
        <section className="w-full py-12 md:py-24 lg:py-32 border-y dark:bg-gradient-to-r dark:from-slate-900 dark:to-zinc-800">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div
              className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16 line-clamp-6">
              <div className="  leading-loose">
                <h1
                  className="slide-top lg:leading-tighter mb-10 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] bg-gradient-to-r from-rose-300 via-violet-600 to-violet-500 bg-clip-text text-transparent">
                  Dr. Rajat Subhra Goswami
                </h1>
                <div className="text-gray-500 dark:text-gray-400 mt-2">
                  Associate Professor & Head of the Department, Computer Science & Engineering
                </div>
                <div className="text-gray-500 dark:text-gray-400 mt-2">
                  <b className="">Research Areas:</b> Information Security, Cryptography, Blockchain Technology, Deep Learning, Machine
                  Learning, Quantum Computing, Image Processing, Big Data, Network Traffic Classification
                </div>
                <div className="flex space-x-4 mt-20">
                  

            <span className="relative inline-flex">
                <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="mailto:rajat@nitap.ac.in">
                    Email
                  </Link>
              <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500" />
              </span>
            </span>

                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200  bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="tel:+919436271052">
                    Phone
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200  bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="./Dr.%20Rajat%20Subhra%20Goswami-Rajat%20CV%20FINAL%20(AutoRecovered).pdf">
                    View CV
                  </Link>

                  <button onClick={()=>handlemode()}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>

                  </button>
                </div>
              </div>
              <Image
                alt="Professor"
                className=" slide-top mx-auto rounded-full aspect-video overflow-hidden  object-bottom sm:w-full lg:order-last lg:aspect-square animate-fade-in-up"
                height="750"
                src="/logo.png"
                width="750"
                 />
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 animate-fade-in-up"
          id="educational-qualification">
          <div className="container px-4 md:px-6">
            <div className="space-y-20">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Educational Qualification</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-40">
                <div>
                  <h3 className="text-xl font-bold">Doctor of Philosophy</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">National Institute of Technology, Arunachal Pradesh</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">Computer Science & Engineering in 2015</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Masters of Technology</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">Jadavpur University, West Bengal</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">Multimedia Development 2009</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Bachelor of Technology</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">West Bengal University of Technology, West Bengal</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">Information Technology in 2005</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-transparent animate-fade-in-up border-y "
          id="research">
          <div className="container px-4 md:px-6">
            <div className="space-y-20">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Research</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <h3 className="text-xl font-bold">Information Security</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Developing novel algorithms and techniques for secure communication and data protection.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Cryptography</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Exploring advanced cryptographic primitives and their applications in various domains.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Blockchain Technology</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Investigating the use of blockchain technology for secure and decentralized applications.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Deep Learning</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Developing novel deep learning models for various applications, including image processing and
                    natural language processing.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Machine Learning</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Designing efficient and scalable machine learning algorithms for data analysis and decision-making.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Quantum Computing</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Exploring the potential of quantum computing for solving complex problems and enhancing
                    cryptographic techniques.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Image Processing</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Advancing the state-of-the-art in image enhancement, segmentation, and analysis.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Big Data</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Designing scalable and efficient algorithms for processing and analyzing large-scale data.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Network Traffic Classification</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Developing machine learning-based techniques for identifying and categorizing network traffic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 animate-fade-in-up border-y "
          id="experience">
          <div className="container px-4 md:px-6">
            <div className="space-y-20">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
              <div className="flex flex-col">
                
              <div className="">
                <h2 className=" text-4xl p-10">Academic experiences </h2>

                <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <p><strong>Sl No</strong></p>
                        </TableCell>
                        <TableCell>
                            <p><strong>Name of Organization</strong></p>
                        </TableCell>
                        <TableCell>
                            <p><strong>Type of Job</strong></p>
                        </TableCell>
                        <TableCell>
                            <p><strong>Post</strong></p>
                        </TableCell>
                        <TableCell>
                            <p><strong>Date of Joining</strong></p>
                        </TableCell>
                        <TableCell>
                            <p><strong>Date of Leaving</strong></p>
                        </TableCell>
                        <TableCell>
                            <p><strong>Total Experiences</strong></p>
                        </TableCell>
                        <TableCell>
                            <p><strong>Reason for leaving</strong></p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <p>1.</p>
                        </TableCell>
                        <TableCell>
                            <p>National Institute of Technology, Arunachal Pradesh</p>
                        </TableCell>
                        <TableCell>
                            <p>Full Time</p>
                        </TableCell>
                        <TableCell>
                            <p>Asst. Professor</p>
                        </TableCell>
                        <TableCell>
                            <p>01.12.2011</p>
                        </TableCell>
                        <TableCell>
                            <p>Continuing</p>
                        </TableCell>
                        <TableCell>
                            <p>9.2 Years</p>
                        </TableCell>
                        <TableCell>
                            <p>-</p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <p>2.</p>
                        </TableCell>
                        <TableCell>
                            <p>Bengal Institute of Technology & Management, Santiniketan</p>
                        </TableCell>
                        <TableCell>
                            <p>Full Time</p>
                        </TableCell>
                        <TableCell>
                            <p>Asst. Professor</p>
                        </TableCell>
                        <TableCell>
                            <p>21.09.2008</p>
                        </TableCell>
                        <TableCell>
                            <p>25.11.2012</p>
                        </TableCell>
                        <TableCell>
                            <p>4.1 Years</p>
                        </TableCell>
                        <TableCell>
                            <p>Joined as an Asst. Professor NIT, Arunachal Pradesh</p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <p>3.</p>
                        </TableCell>
                        <TableCell>
                            <p>Jalpaiguri Govt. Engineering College</p>
                        </TableCell>
                        <TableCell>
                            <p>Part-Time</p>
                        </TableCell>
                        <TableCell>
                            <p>Lecturer</p>
                        </TableCell>
                        <TableCell>
                            <p>26.02.2006</p>
                        </TableCell>
                        <TableCell>
                            <p>30.06.2007</p>
                        </TableCell>
                        <TableCell>
                            <p>1.4 Years</p>
                        </TableCell>
                        <TableCell>
                            <p>Higher Study (M.Tech)</p>
                        </TableCell>
                    </TableRow>
                </TableBody>
                </Table>


              </div>
              

              <div>
                <h2 className=" text-4xl py-20 pb-10 pl-10">Administrative experiences</h2>
                  <Table align="left" cellSpacing={0}>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <p>Sl No</p>
                        </TableCell>
                        <TableCell>
                          <p>Name of Organization</p>
                        </TableCell>
                        <TableCell>
                          <p>Type of Job</p>
                        </TableCell>
                        <TableCell>
                          <p>Post</p>
                        </TableCell>
                        <TableCell>
                          <p>Date of Joining</p>
                        </TableCell>
                        <TableCell>
                          <p>Date of Leaving</p>
                        </TableCell>
                        <TableCell>
                          <p>Total Experiences</p>
                        </TableCell>
                        <TableCell>
                          <p>Reason for leaving</p>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <p>1.</p>
                        </TableCell>
                        <TableCell>
                          <p>National Institute of Technology, Arunachal Pradesh</p>
                        </TableCell>
                        <TableCell>
                          <p>Full Time</p>
                        </TableCell>
                        <TableCell>
                          <p>Asst. Professor</p>
                        </TableCell>
                        <TableCell>
                          <p>01.12.2011</p>
                        </TableCell>
                        <TableCell>
                          <p>Continuing</p>
                        </TableCell>
                        <TableCell>
                          <p>9.2 Years</p>
                        </TableCell>
                        <TableCell>
                          <p>-</p>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <p>2.</p>
                        </TableCell>
                        <TableCell>
                          <p>Bengal Institute of Technology &amp; Management, Santiniketan</p>
                        </TableCell>
                        <TableCell>
                          <p>Full Time</p>
                        </TableCell>
                        <TableCell>
                          <p>Asst. Professor</p>
                        </TableCell>
                        <TableCell>
                          <p>21.09.2008</p>
                        </TableCell>
                        <TableCell>
                          <p>25.11.2012</p>
                        </TableCell>
                        <TableCell>
                          <p>4.1 Years</p>
                        </TableCell>
                        <TableCell>
                          <p>Joined as an Asst. Professor NIT, Arunachal Pradesh</p>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <p>3.</p>
                        </TableCell>
                        <TableCell>
                          <p>Jalpaiguri Govt. Engineering College</p>
                        </TableCell>
                        <TableCell>
                          <p>Part-Time</p>
                        </TableCell>
                        <TableCell>
                          <p>Lecturer</p>
                        </TableCell>
                        <TableCell>
                          <p>26.02.2006</p>
                        </TableCell>
                        <TableCell>
                          <p>30.06.2007</p>
                        </TableCell>
                        <TableCell>
                          <p>1.4 Years</p>
                        </TableCell>
                        <TableCell>
                          <p>Higher Study (M.Tech)</p>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>

              </div>





                </div>
            </div>
          </div>
        </section>
        
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-transparent animate-fade-in-up border-y "
          id="teaching">
          <div className="container px-4 md:px-6">
            <div className="space-y-20">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Teaching</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* <div>
                  <h3 className="text-xl font-bold">Information Security</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Cryptography</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Graduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div> */}
                <div>
                  <h3 className="text-xl font-bold">Computer Graphics and Multimedia Theory</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Formal Language & Automata Theory</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Object-Oriented Programming</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Visual Programming & Web Technology</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Multimedia Technology</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Internet Technology</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Database Management System</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section
          className="w-full py-12 md:py-24 lg:py-32 animate-fade-in-up border-y "
          id="awards-achievements">
          <div className="container px-4 md:px-6">
            <div className="space-y-20">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"> Awards/Achievement</h2>
              <div className="">
              Awarded as one of the best teachers of NIT Arunachal Pradesh for the academic year of 2011-2012


              </div>
            </div>
          </div>
        </section>

        
        
      </main>
      <footer className="p-8 rounded-lg flex justify-center text-xl uppercase">
        Made by &nbsp; <Link href={"https://github.com/sh20raj"} target="_" className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent"> SH20RAJ 🚀</Link>
      </footer>
    </div>)
  );
}

function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}
