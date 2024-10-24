import React,{useState} from 'react'
import './App.css'
import { NavLink} from 'react-router-dom'
const Nav = () => {
  let Links =[
    {name:"HOME",link:"/General"},
    {name:"SCEINCE",link:"/SCIENCE"},
    {name:"HEALTH",link:"/HEALTH"},
    {name:"SPORTS",link:"/SPORTS"},
    {name:"GENERAL",link:"/general"},
  ];
  let [open,setOpen]=useState(false);
return (
  <div className='shadow-md w-full fixed top-0 left-0'>
    <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800'>
     
      <span className='text-white text-lg font-serif'>NEWS- HEADLINES</span>
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    
    <h1 className='text-white font-sans' name={open ? 'close':'menu'}>{open ? 'x':<i class="fa-solid fa-bars"></i>}</h1>
    </div>

    <ul className={`md:flex md:justify-center bg-black  text-white text-center  md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
      {
        Links.map((link)=>(
          <li key={link.name} className='md:ml-2 text-lg z-50 md:my-0 my-7'>
            <a href={link.link} className=' text-white hover:text-black'>{link.name}</a>
          </li>
        ))
      }
    
    </ul>
    </div>
  </div>
)
}

export default Nav
