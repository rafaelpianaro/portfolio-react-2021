import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SocialIcon } from "react-social-icons"
// import { NavLink } from "react-router-dom";

function NavLink({ to, className, activeClassName, inactiveClassName, ...rest}){
    let location = useLocation()
    let isActive = location.pathname === to
    let allClassNames = className + (isActive ? `${activeClassName}` : `${inactiveClassName}`)
    return <Link className={allClassNames} to={to} {...rest} />
}

export default function NavBar(){
    
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" activeclassname="text-white" className="text-white inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Rafael
                    </NavLink>
                    <NavLink to="/post" activeClassName="text-red-100 bg-red-700"
                            // inactiveClassName="text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            inactiveClassName="text-red-200 hover:text-green-800"
                            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" activeClassName="text-red-100 bg-red-700"
                            // inactiveClassName="text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            inactiveClassName="text-red-200 hover:text-green-800"
                            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        Project
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-red-100 bg-red-700"
                            // inactiveClassName="text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            inactiveClassName="text-red-200 hover:text-green-800"
                            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        About me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://airbnb.com/h/prisma-da-colina" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35 }}/>
                    <SocialIcon url="https://www.linkedin.com/in/rafael-pianaro-9a491a53/" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35 }}/>
                    <SocialIcon url="https://github.com/rafaelpianaro" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35 }}/>
                    <SocialIcon url="https://www.youtube.com/user/rafaelpianaro" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35 }}/>
                </div>
            </div>
        </header>
    )
}