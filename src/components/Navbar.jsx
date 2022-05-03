import React from 'react'
// import {
//     NavLink,
//     Link,
// } from 'react-router-dom'

const Navbar = () => {

    const display = () => {
        const navmenu = document.querySelector("#navmenu")
        navmenu.classList.toggle("hidden")
    }
    return (
        <>
            <div className="absolute z-20">
                <nav className="w-full fixed top-0 left-0 right-0 flex sm:block justify-center        
                bg-gradient-to-t from-blue-600 to-sky-700">

                    {/* hidden buttom */}
                    <div className="flex mt-4 items-start sm:hidden">
                        <button onClick={() => display()} className="flex items-center px-3 py-2 
                                border rounded border-sky-700 hover:text-white hover:border-white
                                text-white ">
                            <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>

                    <div className='flex flex-col sm:flex-row justify-center items-center sm:pb-0 pb-4 '>
                        <div className='mx-8 w-full sm:w-1/5 ml-8 text-center font-bold text-xl'>
                            <a href="#about">
                                <div className='w-full'>
                                    Angel Riera
                                </div>
                                <div className='w-full flex justify-center items-center lx:space-x-2'>
                                    <img className='App-logo' src="RagAndRoll/logo192.png" alt="" width={30} height={30} />
                                    <p>
                                        FullStack

                                    </p>
                                    <img className='fill-' src="RagAndRoll/images/icons/django.svg" alt="" width={30} height={30} />

                                </div>
                            </a>
                        </div>

                        <div className="navbar2 hidden" id='navmenu'>



                            <a href="#exp"
                                className="nav-btn2">
                                Experience
                            </a>

                            <a href="#projects"
                                className="nav-btn2">
                                Projects
                            </a>

                            <a href="#skills"
                                className="nav-btn2">
                                Skills
                            </a>
                            <a href="#contacto"
                                className="nav-btn2">
                                Contact
                            </a>
                            <a href="/RagAndRoll/Cv_Angel_Riera.pdf" target="_blank"
                                className="nav-btn2">
                                ⇩CV
                            </a>
                        </div>
                    </div>

                </nav>
            </div>

        </>
    )
}

export default Navbar