'use client'
import Link from "next/link"
import Image from "next/image";

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
      <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 shadow-lg z-40 backdrop-blur-md">
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
                  className="slide-topx lg:leading-tighter mb-10 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] bg-gradient-to-r from-rose-300 via-violet-600 to-violet-500 bg-clip-text text-transparent">
                  Dr. Rajat Subhra Goswami
                </h1>
                <div className="text-gray-500 dark:text-gray-400 mt-2">
                  Associate Professor & Head of the Department, Computer Science & Engineering
                </div>
                <div className="text-gray-500 dark:text-gray-400 mt-2">
                  <b className="">Research Areas:</b> Information Security, Cryptography, Blockchain Technology, Deep Learning, Machine
                  Learning, Quantum Computing, Image Processing, Big Data, Network Traffic Classification 

                <a className=" text-blue-500 hover:animate-none opacity-h35 hover:opacity-100 animate-pulse " href="https://www.nitap.ac.in/department/faculty_profile?name=rajat&dept=1dbf504017" target="_"> Website </a>
                </div>
                <div className="flex space-x-4 mt-20">
                  

            <span className="relative inline-flex">
                <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="mailto:rajat@nitap.ac.in">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                </svg>
                    &nbsp;  Email
                  </Link>
              <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500" />
              </span>
            </span>

                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200  bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="tel:+919436271052">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                    </svg>  &nbsp; | &nbsp;

                    Phone
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200  bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="./Dr.%20Rajat%20Subhra%20Goswami-Rajat%20CV%20FINAL%20(AutoRecovered).pdf">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                      </svg> &nbsp; | &nbsp;
                    View CV
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200  bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="https://scholar.google.com/citations?user=-61STa0AAAAJ&hl=en">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg> &nbsp; Scholar
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
                className=" slide-topx mx-auto rounded-full aspect-video overflow-hidden  object-bottom sm:w-full lg:order-last lg:aspect-square animate-fade-in-up"
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
                <div className="card">
                  <h3 className="text-xl font-bold">Doctor of Philosophy</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">National Institute of Technology, Arunachal Pradesh</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">Computer Science & Engineering in 2015</p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Masters of Technology</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">Jadavpur University, West Bengal</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">Multimedia Development 2009</p>
                </div>
                <div className="card">
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
                <div className="card">
                  <h3 className="text-xl font-bold">Information Security</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Developing novel algorithms and techniques for secure communication and data protection.
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Cryptography</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Exploring advanced cryptographic primitives and their applications in various domains.
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Blockchain Technology</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Investigating the use of blockchain technology for secure and decentralized applications.
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Deep Learning</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Developing novel deep learning models for various applications, including image processing and
                    natural language processing.
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Machine Learning</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Designing efficient and scalable machine learning algorithms for data analysis and decision-making.
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Quantum Computing</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Exploring the potential of quantum computing for solving complex problems and enhancing
                    cryptographic techniques.
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Image Processing</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Advancing the state-of-the-art in image enhancement, segmentation, and analysis.
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Big Data</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Designing scalable and efficient algorithms for processing and analyzing large-scale data.
                  </p>
                </div>
                <div className="card">
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

                <table>
                <tbody>
                    <tr>
                        <td>
                            <p><strong>Sl No</strong></p>
                        </td>
                        <td>
                            <p><strong>Name of Organization</strong></p>
                        </td>
                        <td>
                            <p><strong>Type of Job</strong></p>
                        </td>
                        <td>
                            <p><strong>Post</strong></p>
                        </td>
                        <td>
                            <p><strong>Date of Joining</strong></p>
                        </td>
                        <td>
                            <p><strong>Date of Leaving</strong></p>
                        </td>
                        <td>
                            <p><strong>Total Experiences</strong></p>
                        </td>
                        <td>
                            <p><strong>Reason for leaving</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1.</p>
                        </td>
                        <td>
                            <p>National Institute of Technology, Arunachal Pradesh</p>
                        </td>
                        <td>
                            <p>Full Time</p>
                        </td>
                        <td>
                            <p>Asst. Professor</p>
                        </td>
                        <td>
                            <p>01.12.2011</p>
                        </td>
                        <td>
                            <p>Continuing</p>
                        </td>
                        <td>
                            <p>9.2 Years</p>
                        </td>
                        <td>
                            <p>-</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>2.</p>
                        </td>
                        <td>
                            <p>Bengal Institute of Technology & Management, Santiniketan</p>
                        </td>
                        <td>
                            <p>Full Time</p>
                        </td>
                        <td>
                            <p>Asst. Professor</p>
                        </td>
                        <td>
                            <p>21.09.2008</p>
                        </td>
                        <td>
                            <p>25.11.2012</p>
                        </td>
                        <td>
                            <p>4.1 Years</p>
                        </td>
                        <td>
                            <p>Joined as an Asst. Professor NIT, Arunachal Pradesh</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>3.</p>
                        </td>
                        <td>
                            <p>Jalpaiguri Govt. Engineering College</p>
                        </td>
                        <td>
                            <p>Part-Time</p>
                        </td>
                        <td>
                            <p>Lecturer</p>
                        </td>
                        <td>
                            <p>26.02.2006</p>
                        </td>
                        <td>
                            <p>30.06.2007</p>
                        </td>
                        <td>
                            <p>1.4 Years</p>
                        </td>
                        <td>
                            <p>Higher Study (M.Tech)</p>
                        </td>
                    </tr>
                </tbody>
                </table>


              </div>
              

              <div>
                <h2 className=" text-4xl py-20 pb-10 pl-10">Administrative experiences</h2>
                  <table align="left" cellSpacing={0}>
                    <tbody>
                      <tr>
                        <td>
                          <p>Sl No</p>
                        </td>
                        <td>
                          <p>Name of Organization</p>
                        </td>
                        <td>
                          <p>Type of Job</p>
                        </td>
                        <td>
                          <p>Post</p>
                        </td>
                        <td>
                          <p>Date of Joining</p>
                        </td>
                        <td>
                          <p>Date of Leaving</p>
                        </td>
                        <td>
                          <p>Total Experiences</p>
                        </td>
                        <td>
                          <p>Reason for leaving</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>1.</p>
                        </td>
                        <td>
                          <p>National Institute of Technology, Arunachal Pradesh</p>
                        </td>
                        <td>
                          <p>Full Time</p>
                        </td>
                        <td>
                          <p>Asst. Professor</p>
                        </td>
                        <td>
                          <p>01.12.2011</p>
                        </td>
                        <td>
                          <p>Continuing</p>
                        </td>
                        <td>
                          <p>9.2 Years</p>
                        </td>
                        <td>
                          <p>-</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>2.</p>
                        </td>
                        <td>
                          <p>Bengal Institute of Technology &amp; Management, Santiniketan</p>
                        </td>
                        <td>
                          <p>Full Time</p>
                        </td>
                        <td>
                          <p>Asst. Professor</p>
                        </td>
                        <td>
                          <p>21.09.2008</p>
                        </td>
                        <td>
                          <p>25.11.2012</p>
                        </td>
                        <td>
                          <p>4.1 Years</p>
                        </td>
                        <td>
                          <p>Joined as an Asst. Professor NIT, Arunachal Pradesh</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>3.</p>
                        </td>
                        <td>
                          <p>Jalpaiguri Govt. Engineering College</p>
                        </td>
                        <td>
                          <p>Part-Time</p>
                        </td>
                        <td>
                          <p>Lecturer</p>
                        </td>
                        <td>
                          <p>26.02.2006</p>
                        </td>
                        <td>
                          <p>30.06.2007</p>
                        </td>
                        <td>
                          <p>1.4 Years</p>
                        </td>
                        <td>
                          <p>Higher Study (M.Tech)</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>

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
                <div className="card">
                  <h3 className="text-xl font-bold">Computer Graphics and Multimedia Theory</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Formal Language & Automata Theory</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Object-Oriented Programming</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Visual Programming & Web Technology</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Multimedia Technology</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">Internet Technology</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Undergraduate course, National Institute of Technology Arunachal Pradesh
                  </p>
                </div>
                <div className="card">
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
      {/* <div className="ai fixed bottom-0 right-0   animate-bounce  duration-1000">
        <span className="relative inline-flex">
        <Link href={"/ai-assistant"} className=" text-center flex justify-center items-center flex-col">
        <div className=""><svg xmlns="http://www.w3.org/2000/svg" className="ionicon h-10 w-10" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M360 94.59V296M443.13 212.87L296 360M417.41 360H216M299.13 443.13l-144-144M152 416V216M68.87 299.13l144-144M94.59 152H288M212.87 68.87L360 216" /></svg>
        </div>
        <div className="">AI</div>

               
        </Link>
              <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500" />
              </span>
            </span>

      </div> */}
    </div>)
  );
}

